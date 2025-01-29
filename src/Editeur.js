import React from 'react';

function Editeur({updateTodo, todo, setTodo}) {

    return ( 
        <form onSubmit={updateTodo}>
        <input
          value={todo}
          type='text'
          onChange={e => setTodo(e.target.value)}
          placeholder='Ecrire ....'
          className=' focus:border-blue-500 focus:outline focus:outline-blue-500 ml-4 bg-transparent md:max-w-2xl p-1 w-full mb-5 border-b-4 border-blue-500'

        />
        <button
          type='submit'
          className='bg-blue-500 p-3 w-28 cursor-auto ml-2 rounded-full font-bold text-cente text-white hover:bg-blue-400'>
            Modifier</button>
      </form>
     );
}
 
export default Editeur;