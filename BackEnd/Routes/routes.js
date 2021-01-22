const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('Hello from SkateLog backend!');
});

router.post('/addreview', (req, res) => {
    const addedReview = new addReviewTemplate({
        name: req.body.name,
        msg: req.body.msg
    });
    addedReview.save()
    .then(data => {
        res.json(data);
        res.send(`${ addedReview.name } left a review.`);
    })
    .catch(err => {
        res.json(err);
        res.send(`There was an error adding ${ addedReview.name }'s review.`)
    })
});

module.exports = router;