import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <div>
                <h1>Ideas</h1>

                <h2>Ideass for Future Features</h2>
                <ul>
                    { this.ideaList.map(idea => <li>
                        { idea.name } { idea.description }
                    </li>) }
                </ul>
            </div>
        );
    }
}