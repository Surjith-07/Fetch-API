fetch('https://official-joke-api.appspot.com/jokes/programming/random')
.then((res)=>res.json())
.then((message)=>console.log(message[0].setup,message[0].punchline))
.catch((message)=>console.log(message));

fetch('https://official-joke-api.appspot.com/jokes/programming/random')
.then((res)=>res.json())
    .then((res)=>console.log(res[0].setup))
.catch((message)=>console.log(message));



//get
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json.id))

//post
fetch('https://jsonplaceholder.typicode.com/todos',{
    method:'POST',
    headers:{'content-type' : 'application/json'},
    body:JSON.stringify({
        userId:23,
        id:233,
        title:'hai',
        completed:true
    })
})
    .then(response => response.json())
    .then(json => console.log(json))


const URL = "http://localhost:8080/Studentmanagement_war_exploded/webapi/resource"
options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ "name": "kalees", "address": "hai" }),
};


fetch( URL, options)
    .then((response)=>(response.json()))
    .then(json=>(console.log(json)))


let value=function value(){
    return fetch('http://localhost:8080/Studentmanagement_war_exploded/webapi/resource')
         .then(response => {
             if (!response.ok) {
                 throw new Error('Network response was not ok');
             }
             return response.json();
         })
         .then(data => {
             // Process the data here
             console.log(data);
         })
         .catch(error => {
             console.error('There was a problem with the fetch operation:', error);
         });
 }


 console.log(value());

 GetAll
 fetch('http://localhost:8080/Studentmanagement_war_exploded/webapi/resource')
         .then(response => {
             if (!response.ok) {
                 throw new Error('Network response was not ok');
             }
             return response.json();
         })
         .then(data => {
             // Process the data here
             console.log(data[0].name);
         })
         .catch(error => {
             console.error('There was a problem with the fetch operation:', error);
         })
 
 
 GetById
 fetch('http://localhost:8080/Studentmanagement_war_exploded/webapi/resource/student/id')
         .then(response => {
             if (!response.ok) {
                 throw new Error('Network response was not ok');
             }
             return response.json();
         })
         .then(data => {
             // Process the data here
             console.log(data[0].name);
         })
         .catch(error => {
             console.error('There was a problem with the fetch operation:', error);
         })
 
 //POST
 const URL = "http://localhost:8080/Studentmanagement_war_exploded/webapi/resource/student"
 options = {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ "name": "kalees", "address": "hai" }),
 };

 fetch( URL, options)
     .then((response)=>(response.json()))
     .then(json=>(console.log(json)))
 
 //PUT
 const URL = "http://localhost:8080/Studentmanagement_war_exploded/webapi/resource/student"
 options = {
     method: "PUT",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ "id":2, "name": "kalees", "address": "hai" }),
 };
 
 fetch( URL, options)
     .then((response)=>(response.json()))
     .then(json=>(console.log(json)))
 
 //DELETE
 const URL = "http://localhost:8080/Studentmanagement_war_exploded/webapi/resource/student/1"
 options = {
     method: "DELETE",
 };
 
 fetch( URL, options)
     .then((response)=>(response.json()))
     .then(json=>(console.log(json)))