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
            <div>
                <FounderPics />
                <h3>Bold. Innovative.</h3>
                <Wreaths />
                <Story />
            </div>
        );
    }
}