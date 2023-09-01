const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div 
        className="todo" 
        style={{backgroundImage: todo.isCompleted ? "linear-gradient(to right, #E6F6B8 , #687F38)" : ""}}
    >
        <div className="content">
            <p>{todo.text}</p>
            <p className='category'> 
                <svg  fill="#2960D7" height="10px" width="10px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                    <path d="M213.3,0h-128C38.2,0,0,38.2,0,85.3v128L298.7,512L512,298.7L213.3,0z M85.3,128c-23.6,0-42.7-19.1-42.7-42.7
                        s19.1-42.7,42.7-42.7S128,61.8,128,85.3S108.9,128,85.3,128z"/>
                </svg>  {todo.category}
            </p>
        </div>
        <div>
            <button className='complete' onClick={() => completeTodo(todo.id)}>
                Completar
            </button>
            <button className='remove' onClick={() => removeTodo(todo.id)}>
                <svg fill="#fff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    width="10px" height="10px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                    <g>
                        <g>
                            <path d="M75.834,33.388h-51.67c-1.311,0-2.375,1.058-2.375,2.373v49.887c0,1.314,1.064,2.377,2.375,2.377h51.67
                                c1.314,0,2.375-1.063,2.375-2.377V35.76C78.209,34.446,77.148,33.388,75.834,33.388z"/>
                        </g>
                        <g>
                            <path d="M79.004,17.352H59.402v-2.999c0-1.314-1.061-2.377-2.373-2.377H42.971c-1.312,0-2.375,1.063-2.375,2.377v2.999H20.996
                                c-1.312,0-2.375,1.059-2.375,2.373v6.932c0,1.314,1.063,2.373,2.375,2.373h58.008c1.314,0,2.375-1.059,2.375-2.373v-6.932
                                C81.379,18.41,80.318,17.352,79.004,17.352z"/>
                        </g>
                    </g>
                </svg>
            </button>
        </div>
    </div>
  )
}

export default Todo