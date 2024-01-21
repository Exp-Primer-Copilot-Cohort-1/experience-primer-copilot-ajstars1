// Create web server

var express = require('express');
var router = express.Router();
var comments = require('../models/comments');

// Get all comments
router.get('/', function(req, res) {
    comments.getAll(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

// Get comments by id
router.get('/:id', function(req, res) {
    comments.getById(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

// Get comments by user id
router.get('/user/:id', function(req, res) {
    comments.getByUserId(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

// Get comments by post id
router.get('/post/:id', function(req, res) {
    comments.getByPostId(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

// Get comments by parent id
router.get('/parent/:id', function(req, res) {
    comments.getByParentId(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

// Create comments
router.post('/', function(req, res) {
    comments.create(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

// Update comments
router.put('/:id', function(req, res) {
    comments.update(req.params.id, req.body, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

// Delete comments
router.delete('/:id', function(req, res) {
    comments.delete(req.params.id, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

module.exports = router;
