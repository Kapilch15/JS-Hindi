//IIFE function Immediately invoke function expressions

(function dbCall (){
    console.log("DB is connected");
}) ();

( function dbCall2 (){
    console.log("DB connected 2");
}) ();


( dbCall3 = (userName)=>{
    console.log(`connected with ${userName}`);
}) ("Hitesh");