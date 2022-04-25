import React, {useState} from 'react';

type OnOffToggle = {
    toggle: boolean
}

const OnOffToggle = (props: any) => {

    const [toggle, setToggle] = useState(false)

    const OnToggle = {
        color: 'white',
        background: toggle ? 'gray' : 'green'
    }

    const OffToggle = {
        color: 'white',
        background: !toggle ? 'gray' : 'red'
    }

    const circle = {
        width: '20px',
        height: '20px',
        borderRadius: '10px',
        background: !toggle ? 'green' : 'red',
        marginLeft: '10px'
    }

    const wrapper = {
        display: 'flex',
        justifyContent: 'center'
    }

    return (
        <div style={wrapper}>
            <button style={OnToggle} onClick={() => setToggle(false)}>On</button>
            <button style={OffToggle} onClick={() => setToggle(true)}>Off</button>
            <div style={circle}></div>
        </div>
    );
};

export default OnOffToggle;