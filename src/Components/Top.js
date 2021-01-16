import React from 'react';

import BrandBar from './BrandBar.js';
import NavBar from './NavBar.js';

export default class Top extends React.Component {
    render() {
        return (
            <div style={{width: '100%', position: 'sticky', top: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', background: 'white'}}>
                <BrandBar />
                <NavBar />
            </div>
        );
    }
}