import React from 'react';

export default class GlamourDisplay extends React.Component {
    render() {
        return (
            <div style={{marginTop: '3em', marginBottom: '3em'}}>
                <p>{this.props.text}</p>
                <img style={{ height: '35em', width: '75em', border: 'solid gray 1px', borderRadius: '0.5em' }} src={this.props.img}></img>
            </div>
        );
    }
}