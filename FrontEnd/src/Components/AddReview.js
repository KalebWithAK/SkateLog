import React from 'react';

export default class AddReview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formDisplay: 'none',
            name: '',
            msg: ''
        }
    }

    render() {
        return (
            <div>
                <button onClick={ this.displayForm }>Leave a Review</button>
                <form style={{ display: this.state.formDisplay, flexDirection: 'column', alignItems: 'center' }} onSubmit={ this.handleSubmit }>
                    <input type='text' placeholder='Name' onChange={ this.handleNameChange } />
                    <input type='text' placeholder='What are your thoughts about SkateLog?' style={{ width: '20em',}} onChange={ this.handleMsgChange } />
                    <input type='submit' />
                </form>
            </div>
        );
    }

    displayForm = () => {
        if (this.state.formDisplay === 'none')
            this.setState({ formDisplay: 'flex' });
        else
            this.setState({ formDisplay: 'none' })
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }

    handleMsgChange = (e) => {
        this.setState({ msg: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(`${ this.state.name }: ${ this.state.msg }`);
    }
}