import React from "react"

function TodoList(){
    return(
        <>
            <div className="container">
                <div className="header">TODO LIST</div>
                <input type="text" placeholder="Add Activity"/>
                <button>Add</button>
            </div>
        </>
        
    );
}
export default TodoList
