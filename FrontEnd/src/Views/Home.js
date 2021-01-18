import React from 'react';

import GlamourDisplaysContainer from '../Components/GlamourDisplaysContainer.js';
import MontageDisplay from '../Components/MontageDisplay.js'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <GlamourDisplaysContainer />

                <MontageDisplay />
            </div>
        );
    }
}