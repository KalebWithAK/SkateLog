import React from 'react';

export default class MontageDisplay extends React.Component {
    render() {
        return (
            <div style={{width: '75em', height: '35em', border: 'solid gray 1px', borderRadius: '0.5em', marginBottom: '1em', textAlign: 'center'}}>
                Video
                <video width='75' height='35'>
                    <source src='' type=''></source>
                    Montage
                </video>
            </div>
        );
    }
}