import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function LEDSwitch(props)
{
    return (
        <button onClick = { props.onClick }>
            {props.value}
        </button>
    );
}

class Page extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            LEDOn : false
        }
    }

    toggleLED()
    {
        this.setState({ LEDOn : !this.state.LEDOn });
    }

    render()
    {
        return (
            // throw the page into here
            <div>
                <h1>click the button to toggle the led</h1>
                <LEDSwitch
                    value = { this.state.LEDOn ? 'turn off' : 'turn on' }
                    onClick = { () => this.toggleLED() }
                />
            </div>
        );
    }
}

ReactDOM.render(<Page ref={ (page) => window.page = page }/>, document.getElementById('root'));

console.log(window.page.state.LEDOn);