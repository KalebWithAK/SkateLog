import React from 'react';

import FounderPics from '../Components/FounderPics.js';
import Wreaths from '../Components/Wreaths.js';
import Story from '../Components/Story.js';

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '1em 0em 1em' }}>
                <FounderPics />
                <h3>Bold. Innovative.</h3>
                <Wreaths />
                <Story />
            </div>
        );
    }
}