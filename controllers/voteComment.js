const commentsModel = require('../models/comments')

function voteComment(req, res) {
    const commentId = req.params.comment_id
    const query = queryBuilder(req.query)

    commentsModel.findOneAndUpdate({ _id: commentId }, query, function (error, comment) {
        if (error) {
            return res.status(500).send({ error: error });
        }
        res.status(200).send({ STATUS: 'SUCCESS' });
    });
}

function queryBuilder(urlQuery) {
    let query;
    for (var key in urlQuery) {
        if (key === 'vote') {
            if (urlQuery[key] === 'up') {
                query = {$inc:{ votes: 1 }};
            }
            if (urlQuery[key] === 'down') {
                query = {$inc:{ votes: -1 }};
            }
        }

    }
    return query;
}

module.exports = voteComment