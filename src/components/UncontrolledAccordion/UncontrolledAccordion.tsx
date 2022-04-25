import React, {useState} from "react";

type AccordionPropsType = {
    title: string
}

function Accordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState<boolean>(false)

    console.log('Accordion rendering')
        return (
            <div>
                <AccordionTitle title={props.title} toggle={() => setCollapsed(!collapsed)}/>
                {collapsed ? <AccordionBody/> : ''}
            </div>
        )
}

type AccordionTitlePropsType = {
    title: string
    toggle: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    debugger
    console.log('AccordionTitle rendering')
    return <h3 onClick={props.toggle}>{props.title}</h3>
}


function AccordionBody() {
    console.log('AccordionBody rendering')
    return <ul>
        <li>Profile</li>
        <li>Messages</li>
        <li>Settings</li>
    </ul>
}

export default Accordion;