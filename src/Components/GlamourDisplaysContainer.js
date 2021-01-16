import React from 'react';

import GlamourDisplay from './GlamourDisplay.js'

export default class GlamourDisplaysContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displays: [
                { text: 'Some Text Here', img: '', id: 0},
                { text: 'Some Text Here', img: '', id: 1 },
                { text: 'Some Text Here', img: '', id: 2 },
            ]
        };
    }

    render() {
        return (
            <div>
                { this.state.displays.map(display => <GlamourDisplay text={display.text} img={display.img} />) }
            </div>
        );
    }
}