var http=  new XMLHttpRequest();
var userData;
var data;
var user = {"mail":null};
   
http.onreadystatechange = function (){
    
    if ( http.status === 200 && http.readyState===4){
        data = JSON.parse(this.responseText);
        userData = data.account; 
        console.log(userData);
         user.mail =  userData.mail     
    }
};

http.open("GET","./data/data.json",true);
http.send();

console.log(user);
const teste = document.querySelector(".teste");
function load_home() {
    document.querySelector(".main").innerHTML='<object type="text/html" data="./home.html" ></object>';
}

console.log(teste);


  