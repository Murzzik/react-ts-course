import React from "react";

type AccordionPropsType = {
    title: string
    value: number
    value1: number
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
        return (
            <div>
                <AccordionTitle title={props.title}/>
                {props.collapsed ? <AccordionBody value={props.value} value1={props.value1}/> : ''}
            </div>
        )
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    debugger
    console.log('AccordionTitle rendering')
    return <h3>{props.title}</h3>
}


function AccordionBody(props: any) {
    console.log('AccordionBody rendering')
    return <ul>
        <li>Profile</li>
        <li>Messages</li>
        <li>Settings</li>
    </ul>
}

export default Accordion;