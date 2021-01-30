import React from 'react';

import ReviewsContainer from '../Components/ReviewsContainer.js';
import AddReview from '../Components/Forms/AddReview.js';

export default class Reviews extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ReviewsContainer />
                <AddReview />
            </div>
        );
    }
}