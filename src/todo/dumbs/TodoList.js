import {OneTodo} from "./OneTodo";

export function TodoList({tasks, setTasks, mode}) {
    const filteredTasks = tasks.filter(t => {
        switch (mode) {
            case 'ALL':
                return true;
            case 'ACTIVE':
                return !t.completed;
            case 'COMPLETED':
                return t.completed;
        }
    })

    function onToggle(checked) {
        setTasks(prevTasks => {
            const newTasks = prevTasks.map((t) => {
                if (t.completed === checked) {
                    return t;
                } else {
                    return {...t, completed: checked};
                }
            });
            return newTasks;
        });
    }

    function onComplete(task) {
        setTasks((tasks) =>
            tasks.map((t) => (t.id === task.id ? {...task, completed: !task.completed} : t)));
    }

    function onDestroy(task) {
        setTasks((tasks) => tasks.filter((t) => t.id !== task.id));
    }
    return (
        <section className="main">
            <input
                type="checkbox"
                id="toggle-all"
                className="toggle-all"
                onClick={(e) => onToggle(e.target.checked)}
            />
            <label htmlFor="toggle-all">Tâches finies</label>
            <ul className="todo-list">
                {filteredTasks.map((task) =>
                    <OneTodo task={task} onComplete={onComplete} onDestroy={onDestroy}></OneTodo>
                )}
            </ul>
        </section>
    )
}