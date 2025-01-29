import logo from './logo.svg';
import './App.css';
// import Header from './component/Header';
// import Contenu from './component/Contenu';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import ListeItems from './ListeItems';
import Editeur from './Editeur';

function App() {

  const [todoList, setTodoListe] = useState([])
  
  const [ShowValidation, setShowValidation ] = useState(false)
  const [todo, setTodo] = useState()
    
  // permet d'ajouter les liste quans on clique le bouton

  function handlSubmit(e) {
    e.preventDefault()
    
    if (todo === "") {
      setShowValidation(true)
      return  
    }
    const updatedList = [...todoList];
    updatedList.push({ id: nanoid(), content: todo });
    setTodoListe(updatedList)
    setTodo("")
    setShowValidation(false)
  }

  const [todoIndex, setTodoIndex] = useState ('');
  const [isEditing, setIsEditing ] = useState(false)

  function deleteTodo(id) {
    alert ('Appuit sur ok pour suprimer')
    setTodoListe(todoList.filter(todo => todo.id !== id))

  }

  // Barre liste

  
  // function barTodo(id) {
  //   alert ('vouler barrez')
  //   // setTodoListe(todoList.map(todo => todo.id === id))
    
    

  // }

  // Modification
  const [check, setChecked] = useState (false) 

  function editTodo(itemData) {   
    alert("Appuit sur ok pour modifier");
    setIsEditing(true);
    // console.log("ediTodo", itemData);
    setTodo(itemData.content); 
    setTodoIndex(itemData.id)
    
  }

  function updateTodo(e) {
    e.preventDefault();
    alert("vous allez modifier");
    console.log({ todo });
    
    let updateTodoText = todo;
    let updateTodos = todoList.map((items) => {
        if (items.id === todoIndex) {
            items.content = updateTodoText;
        }
        return items;
    });

    setTodoListe(updateTodos); 
    setIsEditing(false);
    setTodo(""); 
    setTodoIndex("");
}

  return (
    <div class="mt-20 p-6 border-2 rounded-md shadow w-3/4 m-auto">
      {/* <Header/> */}
      {/* <Contenu/> */}
      <div className='text-2xl font-sans font-bold text-center bg-orange-200 rounded-full p-2 mb-5'>
        <h1 className=''>MON TO DO LIST</h1>
      </div>

      {!isEditing && (

        <form onSubmit={handlSubmit}>
        <input
          value={todo}
          type='text'
          onChange={e => setTodo(e.target.value)}
          placeholder='Ecrire ....'
          className=' focus:border-blue-500 focus:outline focus:outline-blue-500 ml-4 bg-transparent md:max-w-2xl p-1 w-full mb-5 border-b-4 border-blue-500'

        />
        
        <button
          type='submit'
          className='bg-blue-500 p-3 w-28 cursor-auto ml-2 rounded-full font-bold text-cente text-white hover:bg-blue-400'>Ajouter</button>
           {ShowValidation && (
          <p className='text-red-600'>Ajouter une tâche d'abord</p>
        )}
      </form>
  
          )}
      
      <ul>
        {todoList.length === 0 && (
          <li className='text-red-600'>Vous n'avez pas de liste ajouter</li>
        )}

         {isEditing && (
          <Editeur 
          updateTodo={updateTodo}
          todo={todo}
          setTodo={setTodo} />
          )}
        

        {todoList.map(items =>            
          <ListeItems key={items.id} itemData={items} deleteTodo={deleteTodo} editTodo={editTodo}/>
        )}

      </ul>

    </div>
  );
}

export default App;
