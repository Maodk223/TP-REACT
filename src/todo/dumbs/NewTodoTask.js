import {createNewTask} from "../task-util";

export function NewTodoTask({setTasks}) {

    function onCreateTask(event) {
        if (event.keyCode === 13) {
            // setTasks(tasks => ([...tasks, createNewTask(value)])); // id will inc by 2 ! because of <StrictMode>
            // Solution
            // Avoid side-effect
            // prepare your data BEFORE updating the state
            const newTask = createNewTask(event.target.value);
            event.target.value = '';
            setTasks((tasks) => [...tasks, newTask]);
        }
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                type="text"
                className="new-todo"
                placeholder="Ajouter une tâche"
                autoComplete="off"
                autoFocus={true}
                onKeyDown={onCreateTask}
            />
        </form>
    )
}