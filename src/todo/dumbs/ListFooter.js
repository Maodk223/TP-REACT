import {ActionFilterButton} from "./ActionFilterButton";

export function ListFooter({tasks, setMode}) {
    const remainingTasks = tasks.filter((t) => !t.completed).length;

    function filterDisplay(event, mode) {
        event.preventDefault();
        document.querySelectorAll('a').forEach(a=>a.className='')
        event.target.className = 'selected'
        setMode(mode);
    }

    return (
        <footer className="footer">
                  <span className="todo-count">
                    <strong>{remainingTasks} tâches restantes</strong>
                  </span>
            <ul className="filters">
                <ActionFilterButton filterDisplay={filterDisplay} mode={'ALL'}></ActionFilterButton>
                <ActionFilterButton filterDisplay={filterDisplay} mode={'ACTIVE'}></ActionFilterButton>
                <ActionFilterButton filterDisplay={filterDisplay} mode={'COMPLETED'}></ActionFilterButton>
            </ul>
        </footer>
    )
}