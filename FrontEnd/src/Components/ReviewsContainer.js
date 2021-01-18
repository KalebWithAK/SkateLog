import React from 'react';

import Review from './Review.js';

export default class ReviewsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: [
                { id: 0, author: 'Xander', msg: 'I love my SkateLog!' },
                { id: 1, author: 'Collin', msg: 'It\'s so fun to do tricks on my SkateLog.' },
                { id: 2, author: 'Hrudey', msg: 'The SkateLog is really easy to ride.' },
            ],
        }
    }
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', margin: '1em 0em 1em' }}>
                { this.state.reviews.map(review => <Review key={ review.id } author={ review.author } msg={ review.msg }/>) }
            </div>
        );
    }
}