const { name } = require("ejs");
const exprsse = require("express");
const app = exprsse()

// backend ----
//mongodb+srv://mouhallouche47:<db_password>@cluster01.d5t6loj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01
  const mongos= require("mongoose")

  mongos.connect("mongodb+srv://mouhallouche47:123mohck56@cluster01.d5t6loj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01")
  .then(()=>{
     console.log("connectd succsfully ") 

  }).catch((error)=>{
  console.log("erro",error);

  })

  const article=require("./models/article")

///.........

app.use(exprsse.json())

app.get("/hello",function(req , respose){
    respose.send("hello")
})

app .get ("/hyy", function(req,respose){

respose.send("you visite")
})
app .get ("/byr", function(req,respose){

    respose.send("ahmeddd")
    })
app.post("/addcom",function(req,respons){
let nb="";
for(let i =0;i<100;i++ )  {
    nb+=i;
}
    respons.send(`donc on post pour crre :${nb}`)
}
 )
 app .get ("/find/:nbb1/:nbb2", function(req,respose){
    const num1=req.params.nbb1;
    const num2=req.params.nbb2;

    const total=Number (num1)+ Number (num2)
 console.log(req.params)
    // respose.send(` the nubmer : ${num1} + ${num2}`)
    // respose.send(` the nubmer : ${total}`)
    // respose.sendFile(__dirname+"/views/nub.html")
    respose.render("nub.ejs",{
        name:"allouche",
        nb:num1
    })
    })

 
app.get("/boddy",function(req,respons){
//  methode1
    // console.log(req.body)
    // console.log(req.query)
    // respons.send(`name ${req.body.name} add  ${req.query.age}`)
//methode2


respons.json({
    name:req.body.name,
    age:req.query.age,
    language:"arabic"
})

})








app.delete("/dddel",function(req,respons){
    
    respons.send("delete")
})


app.post ("/articles", async function(req,respons){
    const art= new article()
    art.title=req.body.title
    art.body=req.body.body
    art.nb=100
 await   art.save()
    respons.json({
        title:req.body.title,
        body:req.body.body
    })
})


 app.get("/articles", async function(req,respons){

const arr=  await article.find()
    
     respons.json(arr)
 })

 app.get("/articles/:articlesId",async function(req,respons){
    const id=req.params.articlesId

    try{
        const arrs= await article.findById(id)
        respons.json(arrs)
        return
    }catch(erro){
        console.log(id)
        respons.send(erro)


    }
 })


 app.delete("/articles/:articlesId",async function(req,respons){
    const id=req.params.articlesId

    try{
        const arrs= await article.findByIdAndDelete(id)
        respons.json(arrs)
        return
    }catch(erro){
        console.log(id)
        respons.send(erro)


    }
 })

/********************************** */ 


app.get("/showAll",async function (req,respons) {
  const  all=await article.find()

    respons.render("allArtical.ejs",{
        ALLartical:all
    })
})



app.listen(300, function (){
    console.log(" I am listing in porte 300")
})
