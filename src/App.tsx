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
            <Rating value={3}/>
            <Accordion title={'Menu'} value={12} value1={23} collapsed ={true}/>
            <Accordion title={'Users'} value={15} value1 ={45} collapsed ={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
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
