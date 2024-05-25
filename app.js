if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express=require('express')
const app=express()
const path=require('path')
const mongoose=require('mongoose')
const router=require('./router/camp')
mongoose.connect(process.env.url,{useNewUrlParser:true}).then(()=>
{
    console.log('mongoose db connected')
})
.catch(err=>
    {
        console.log(err)
    }
)
const methodOverride=require('method-override')
const ejsMate=require('ejs-mate')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.engine('ejs',ejsMate)

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method'))
app.use('/',router)

app.listen(process.env.PORT,()=>
{
    console.log('server running on')
})