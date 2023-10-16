import react,{useState} from 'react';
import styled from 'styled-components';

type props = {
    active:boolean
}

let Article = styled.article<props>`
display: flex;
justify-content: space-around;
align-items: center;
width: 300px;
padding: 1em;
&:hover{
    cursor: pointer;
}
${props => props.active ? 
    `
    border-radius: 1rem;
    background: #38404B;
    box-shadow: 5px 5px 13px 0px rgba(48, 54, 64, 0.90), -5px -5px 10px 0px rgba(64, 74, 86, 0.90), 5px -5px 10px 0px rgba(48, 54, 64, 0.20), -5px 5px 10px 0px rgba(48, 54, 64, 0.20), -1px -1px 2px 0px rgba(48, 54, 64, 0.50) inset, 1px 1px 2px 0px rgba(64, 74, 86, 0.30) inset;
    ` :
    `
    border-radius: 1rem;
    background: #38404B;
    box-shadow: 5px 5px 13px 0px rgba(48, 54, 64, 0.90) inset, -5px -5px 10px 0px rgba(64, 74, 86, 0.90) inset, 5px -5px 10px 0px rgba(48, 54, 64, 0.20) inset, -5px 5px 10px 0px rgba(48, 54, 64, 0.20) inset, -1px -1px 2px 0px rgba(48, 54, 64, 0.50), 1px 1px 2px 0px rgba(64, 74, 86, 0.30);`
}
div{
    width: 15px;
    height: 15px;
    border-radius: 100%;
    border: 2.5px solid #94ADCF;
    ${props => props.active ? `
        background-color:none;
    `:
    `
        background-color:#94ADCF;
    `
    }
}
p{
    color: #94ADCF;
    font-size: clamp(.8rem,100vw,1rem);
    @media (width < 800px) {
            font-size: .8rem;
    }
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    ${props => props.active ? `
        text-decoration:none;
    `:
    `
        text-decoration:line-through;
    `
    }
}
`;

function Task ({name, status, task , event}){

    function toogleTask (){
        event(task)
    }

    return(
        <Article onClick={toogleTask} active={status}>
            <div></div>
            <p>{name}</p>
        </Article>
    )
}

export default Task;