const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express()
const port=8080
app.use(cors())
const conn = mysql.createConnection({
    // host:'localhost',
    // database:'blog_react',
    // user: 'root',
    // password:'password'
    host:'166.62.28.130',
    database:'testdbs',
    user: 'taskdb',
    password:'taskdb123@' 
})

// const datas = {
    
//     "data":[
// {id: 1, data: '5 Ways ChatGPT Will Impact String'}
// ,
// {id: 2, data: "12 Reasons You Shouldn't Invest in String"}
// , 
// {id: 3, data: 'Top 25 String Mistakes That Brands Are Making In 2023'}
// , 
// {id: 4, data: 'Best String Ideas To Grow Your Business in 2023'}
// , 
// {id: 5, data: "34 String Trends You Can't Ignore"}
// ,
// {id: 6, data: '18 Things about String that everyone dont know'}]}


conn.connect(function(error){
    if(error){
        throw error;
    }
    else{
        console.log('Success');
    }
});

app.get('/data',(req,res)=>{
    const sql = 'SELECT * FROM blog_data';
    conn.query(sql,(error,results)=>{
        res.send(results);
        console.log(results);
     });
});

/*app.post('/posts',(req,res)=>{
    let data = {name:req.body.name};
    let sql = "INSERT INTO user SET ?";
    let query = conn.query(sql,data,(err,results)=>{
        if(err) throw err;
        res.send(JSON.stringify({"status":200,"error":null,"response":results}));
    });
});*/

app.listen(port,()=>{
    console.log('Server is listening at http://localhost:',{port})
})



