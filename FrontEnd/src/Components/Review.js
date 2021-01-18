import React from 'react';

export default class Review extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ width: '40em', textAlign: 'left', borderBottom: 'dashed gray 1px' }}>
                <p><b>{ this.props.author }:</b> { this.props.msg }</p>
            </div>
        );
    }
}