import react,{useRef, useState} from 'react';
import styled from 'styled-components';
import arrow from '../../../public/arrow.svg';

const Nav = styled.nav`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`;

const Section = styled.section`
padding: 1em;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
max-width: 600px;
border-radius: 1rem;
background: #38404B;
box-shadow: 3px 3px 8px 0px rgba(46, 53, 62, 0.90) inset, -3px -3px 6px 0px rgba(66, 75, 88, 0.90) inset, 3px -3px 6px 0px rgba(46, 53, 62, 0.20) inset, -3px 3px 6px 0px rgba(46, 53, 62, 0.20) inset, -1px -1px 2px 0px rgba(46, 53, 62, 0.50), 1px 1px 2px 0px rgba(66, 75, 88, 0.30);
&{
    img{
        &:hover{
            cursor: pointer;
        }
    }
}
`;

const SearchBox = styled.input`
border:none;
background-color: transparent;
color: rgba(148, 173, 207, 0.70);
font-family: Ubuntu;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
width: 100%;
height: 100%;
&:focus{
    border:none;
    outline: none;
}
&::placeholder{
    font-size:.8rem;
}
`;

function Search ({event}) {

    const [input, setInput] = useState('');
    const inputRef = useRef(null);

    function inputText (e) {
        setInput(e.target.value);
    }

    function addTask (){
        event(input);
        inputRef.current.value = '';
    }

    function addTaskKeyboard (e){
        if(e.key === 'Enter'){
            event(input);
            inputRef.current.value = '';
        }
    }

    return(
        <Nav>
            <Section>
                <SearchBox ref={inputRef} onKeyDown={addTaskKeyboard} onInput={inputText} type="text" placeholder='Add new task' />
                <img onClick={addTask} src={arrow.src} alt="arrow" />
            </Section>
        </Nav>
    )
}

export default Search;