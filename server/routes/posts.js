const express = require('express');

const router = express.Router();

const ControllerPosts = require('../controllers/posts');

router.get('/', ControllerPosts.getPosts);
router.post('/', ControllerPosts.createPost);

module.exports = router;