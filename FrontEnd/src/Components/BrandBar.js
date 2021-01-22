import React from 'react';

export default class BrandBar extends React.Component {
    render() {
        return (
            <div style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
                <p style={{justifySelf: 'flex-start'}}>Logo</p>
                <h1 style={{position: 'relative', left: '42.5%'}}>SkateLog</h1>
            </div>
        );
    }
}