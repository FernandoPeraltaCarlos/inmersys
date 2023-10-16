import react,{useEffect, useReducer, useState} from 'react';
import style from './style.module.scss';

import Search from './Todo-Components/Search'
import Task from './Todo-Components/Task'

function Todo (){
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

    const [taskList, dispatch] = useReducer(reducer, state);

    function completeTask (task){
        dispatch({type:'complete', payload:task})
    }

    function uncompleteTask (task){
        dispatch({type:'uncomplete', payload:task})
    }

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