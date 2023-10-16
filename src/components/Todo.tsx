import react,{useEffect, useReducer, useState} from 'react';
import style from './style.module.scss';

import Search from './Todo-Components/Search'
import Task from './Todo-Components/Task'

function Todo (){
/* The `useState` hook is used to declare a state variable called `state` and a function called `setState` to update the state
variable. In this case, the initial value of the state variable is an array of objects representing tasks. Each task object
has two properties: `task` (representing the task description) and `active` (representing whether the task is active or not). */
    const [state,setState] = useState([
        {
            task:"Tarea de ejemplo1",
            active:true,
        },
        {
            task:"Tarea de ejemplo",
            active:true,
        },
        {
            task:"Tarea de ejemplo",
            active:false,
        }
    ])
    
/**
 * The reducer function takes in a task list and an action, and returns a new task list based on the action type.
 * @param taskList - An array of tasks. Each task is an object with properties like "name", "active", etc.
 * @param action - The `action` parameter is an object that represents the action being dispatched. It typically has a `type`
 * property that describes the type of action being performed, and a `payload` property that contains any additional data needed
 * to perform the action.
 * @returns The reducer function returns the updated taskList based on the action type.
 */
    function reducer (taskList,action) {
        switch(action.type){
            case 'complete':
                return taskList.map(task=>{
                    if(task=== action.payload){
                        return {...task ,active:false}
                    }
                    return task;
                })
                break;
            case 'uncomplete':
                return taskList.map(task=>{
                    if(task=== action.payload){
                        return {...task,active:true}
                    }
                    return task;
                });
                break;
            case 'add':
                return [...taskList, action.payload]
        }
    }

    /* The line `const [taskList, dispatch] = useReducer(reducer, state);` is using the `useReducer` hook in React to manage the
    state of the task list. */
    const [taskList, dispatch] = useReducer(reducer, state);

/**
 * The function "completeTask" dispatches an action to mark a task as complete.
 * @param task - The task parameter is the task that needs to be completed.
 */
    function completeTask (task){
        dispatch({type:'complete', payload:task})
    }

 /**
  * The function uncompleteTask dispatches an action to mark a task as uncompleted.
  * @param task - The task parameter is the task that needs to be marked as uncompleted.
  */
    function uncompleteTask (task){
        dispatch({type:'uncomplete', payload:task})
    }

/**
 * The addTask function dispatches an action to add a new task with the given task and active status to the state, and then logs
 * the state to the console.
 * @param task - The `task` parameter is the task that you want to add to the state.
 */
    function addTask (task){
        dispatch({type:'add', payload: {task:task, active:true} })
        console.log(state)
    }

    return(
        <main className={style.main}>
            <section className={style.todo}>
                <Search event={addTask} />
                <article className={style.todoSection}>
                    {
                        taskList.filter(task => task.active === true).length === 0 ? <p>No pending tasks</p>:
                        taskList.filter(task=> task.active === true).map((task,index)=>(
                            <Task key={index} event={completeTask} name={task.task} status={task.active} task={task}/>
                        ))
                    }
                </article>
                <h2>Completed</h2>
                <article className={style.todoSection}>
                    {
                        taskList.filter(task => task.active === false).length === 0 ? <p>No tasks completed</p>:
                        taskList.filter(task=> task.active === false).map((task,index)=>(
                            <Task key={index} event={uncompleteTask} name={task.task} status={task.active} task={task} />
                        ))
                    }
                </article>
            </section>
        </main>
    )
}

export default Todo;