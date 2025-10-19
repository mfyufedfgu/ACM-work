import { useState } from "react"


function TaskList({tasks, onRemoveTask}) {
    return(
        <ul style={{listStyleType: "none", padding: 0}}>
            {tasks.map((task, index) => (
                <TaskItem key={index} text={task} 
                    onRemove={ () => onRemoveTask(index)}
                />
            ))}
        </ul>
    )
}

function TaskItem({ text, onRemove }) {

    const [completed, setCompleted] = useState(false);

    return(
        <li style={{margin: "10px 0"}}>
            <span style={{textDecoration: (completed)? "line-through" : "none", 
                marginRight: "10px"
            }}>
                {text}
            </span>

            <button onClick={() => setCompleted(!completed)}>
                {completed ? "Undo" : "Complete"}
            </button>

            <button onClick={onRemove}
            style={{ marginLeft: "5px", color: "red"}}>X</button>

        </li>
    );  

}

export default TaskList;