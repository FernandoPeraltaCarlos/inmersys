import react,{useEffect} from 'react';
import style from './style.module.scss';

import Search from './Todo-Components/Search'

function Todo (){
    return(
        <main className={style.main}>
            <section className={style.todo}>
                <Search />
            </section>
        </main>
    )
}

export default Todo;