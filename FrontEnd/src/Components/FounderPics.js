import React from 'react';

export default class FounderPics extends React.Component {
    render() {
        return (
            <div style={{ height: '35em', width: '75em', border: 'solid gray 1px', borderRadius: '0.5em' }}>
                <img src={ this.props.img } alt='pic of gabe and collin'></img>
            </div>
        );
    }
}