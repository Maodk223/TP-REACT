import {useState} from 'react';
import {INITIAL_TASKS} from './task-util';
import './Todo.css';
import {NewTodoTask} from "./dumbs/NewTodoTask";
import {TodoList} from "./dumbs/TodoList";
import {ListFooter} from "./dumbs/ListFooter";

let refresh = 1;

export function Todo() {
    const [tasks, setTasks] = useState(INITIAL_TASKS);
    const [mode, setMode] = useState('ALL')

    console.log('REFRESH', refresh++);

    return (
              <>
                  <NewTodoTask setTasks={setTasks}></NewTodoTask>
                  <TodoList tasks={tasks} mode={mode} setTasks={setTasks}></TodoList>
                  <ListFooter tasks={tasks} setMode={setMode}></ListFooter>
              </>
    );
}
