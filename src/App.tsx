import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

// function declaration
function App() {
    // Делает что-то полезное

    // Обязана вернуть JSX
    console.log('APP rendering')
    return (
        <div className="App">
            <PageTitle title={'This is APP component'}/>
            <Accordion title={'Menu'} />
            <Accordion title={'Users'} />
            <Rating value={0}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <h1>{ props.title }</h1>
}

export default App;
