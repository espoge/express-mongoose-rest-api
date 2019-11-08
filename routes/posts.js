const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
var bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/',(req,res)=>{
    res.send("It's working!");
})


router.post('/',async (req,res)=>{
    //res.send("It's working!");
    //console.log(req)
    const post = Post({
        title: req.body.title,
        description: req.body.description
    });
    try{
        const savedPost = await post.save()
        res.json({data:savedPost, message:'success'})
    }catch(e){
        res.json({error:e})
    }
})

module.exports = router