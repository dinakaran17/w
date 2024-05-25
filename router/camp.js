const express=require('express')
const router=express.Router()
const User=require('../models/camp')
router.get('/camp',async(req,res)=>
{
    const camp=await User.find({})
res.render('index',{camp})
})

router.get('/camp/new',(req,res)=>
{
    res.render('new')
})
router.post('/camp',async(req,res)=>

{
    const camp=await new User(req.body)
    await camp.save()
    res.redirect('/camp')

})
router.get('/camp/:id',async(req,res)=>

{
    const {id}=req.params;
    const camp=await User.findById(id)
    res.render('show',{camp})
    })

    router.get('/camp/:id/edit',async(req,res)=>
    {
        const {id}=req.params;
        const camp=await User.findByIdAndUpdate(id)
        res.render('edit',{camp})
    })
    router.put('/camp/:id',async(req,res)=>
    {
        const {id}=req.params;
        const camp=await User.findByIdAndUpdate(id,req.body)
        res.redirect('/camp')
    })

    router.delete('/camp/:id',async(req,res)=>
    {
        const {id}=req.params;
        const camp=await User.findByIdAndDelete(id)
        res.redirect('/camp')

    })
module.exports=router;