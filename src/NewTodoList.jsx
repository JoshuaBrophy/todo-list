import { TodoItem } from "./TodoItem.jsx"

export function ToDoList({todos, toggleTodo, deleteTodo}) { 

    return ( 
        <ul className="list"> 

        {todos.length === 0 && "Need more to do? GET PLANNING"}
        {}
      
        {todos.map (todo => { 
          return ( 
            <TodoItem 
            {...todo} 
            key={todo.id} 
            toggleTodo={toggleTodo} 
            deleteTodo={deleteTodo}
            />
          )

        })}
       
            </ul> 

    )

}