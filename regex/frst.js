// <!-- <!DOCTYPE html>
// <html>
//   <head>
//     <title></title>
//   </head>
//   <body>
//     <form id="form1" method="post" onsubmit="return valid();">
//       <input type=text id="name" name="name" placeholder="name"/>
//       <input type=password id="pass" name="pass"  placeholder="password"/>
//       <input type=submit name="submit" value="Submit"/>
      
//     </form>
//     <script> -->
        // function valid(){

            // let pass=document.getElementById("pass").value;
            // let form=document.getElementById("form1");
            // let alpha="abcdefghijklmnopqrstuvwxyz";
            // let a=0,s=0,n=0;
            // let spl="@#$%^&*!";
            // for (const i of pass)
            // {
            //     if(alpha.includes(pass))
            //     a++;
            //     if(!isNaN(pass))
            //     n++;
            //     if(spl.includes(pass))
            //     s++;
            // }
            

            // if(pass.length != 8 || a==0 || n==0 || s==0){
            //     alert("Length of the password should be 8 characters");
            //     form.reset();
            //     return false;
            // }
            // return true;
        // }
        {/* <!-- </script>
    </body>
</html> --> */}









// let s="1a1211234";
// let p=/^\w{2}(?=\d{2}\w{1})\d{4}$/;
// // console.log(s.match(p));

// if(s.match(p))
// console.log("true");
// else
// console.log("false")

const { createConnection} =require('mysql');
const express =require('express');
const router=express.Router();
const bodyparser=require('body-parser');
const encoder=bodyparser.urlencoded({extended:true});

const con=createConnection({
    host:"localhost",
    user:"root",
    password:"Kongu@2022",
    database:"frstnew"

});

con.connect((error,connection)=>{
    if(error) throw error;
    else console.log("Connected successfully");

    app.post("/",encoder,function(req,res){

        var username=req.body.username;
        var password=req.body.password;
    
        connection.query(`select * from new where username=? and password=?`,[username,password],(err,result,fields) => {
            
            if(result.length>0)
            res.redirect("/welcome");
            else
            res.redirect("/");
        })
        res.end();
        
    });
});

app.get('/',function(req,res){

    res.sendFile(__dirname+"/index.html");
});


app.get('/welcome',function(req,res){

    res.sendFile(__dirname+"/welcome.html");
});
    


app.listen(4000);









