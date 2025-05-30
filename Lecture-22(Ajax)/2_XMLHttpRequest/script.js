const btn = document.querySelector('button');
//1) Create the XML Http Request Object
let xml = new XMLHttpRequest();

//2) SetUp the Request
xml.open("GET","https://cat-fact.herokuapp.com/facts");

//3) What to do on success of the request ?
xml.onload = (res)=>{
   // console.log(res);
   let data = JSON.parse(res.target.response); //JS ke objects ki array return krega ye data mein
   data.forEach((d)=>{
    console.log(d.text);  //Har ek object ka text print kardiya
   })
}

//4) What to do on failure of the request ?
xml.onerror = (err)=>{
    console.log(err);
}

btn.addEventListener('click',()=>{
    xml.send();  //To send the request.
    //Ek baar send request gayi to open state of xml execute hui and request success hogyi
    //But if button is clicked next time , usme xml object previous wala hi hai jo ki ab
    //opened state me nhi hai toh request will not be sent to the server.
})
/*
--> xml.send(); is a method of the XMLHttpRequest object that initiates the actual HTTP request to the specified URL.

--> It sends the request to the server (in this case, the API) using the HTTP method defined earlier in xml.open().

--> The server receives the request, processes it, and sends back a response containing cat fact data in JSON format.

--> JSON stands for JavaScript Object Notation.

--> JSON is a lightweight data format used to store and exchange data between a server and a client (e.g., browser).
--> Appending li in ul is done to add the data to our webpage. 

*/