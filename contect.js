var page1 = document.getElementById('p1');
var page2 = document.getElementById('p2');
var page3 = document.getElementById('p3');
var page4 = document.getElementById('p4');
var page5 = document.getElementById('p5');


 var button =document.getElementById('button');

 function add(){
 
  
  var  first = document.getElementById('firstname').value;
  
      if(first == ''){
      page1.innerText ="*name is not found*";
    console.log(add);
}
else{
  page1.innerText =''

}
      if(first.length <= 6 +"letter"){
        page1.innerText ="*please enter 6 charecter*";
      }
var second = document.getElementById('lastname').value;
if(second == ''){
  page2.innerText ="*last name is not found*";

  if(second.length <= 4 + "letter"){
    page2.innerText ="*please enter the 4 charecter*"
  }

 }
 else{
  page2.innerText =''

}

 var mail = document.getElementById('arun').value;
if(mail == ''){
  page3.innerText ="*vaild E-mail id*"

}
else{
  page3.innerText =''

}
if(mail.length <=10 + "letter"){
  page3.innerText ="*e-mail is not required*"

}
else{
  page3.innerText =''

}

var phone = document.getElementById('arun1').value;

if(phone ==''){
  page4.innerText ="*please vaild phone number*"

}
else{
  page4.innerText =''

}

var message = document.getElementById('message').value;

if(message == ''){
  page5.innerText ="*enter a message*"

}
else{
  page5.innerText =""
}
if(message.length <=10 +'word'){
  page5.innerText ="*enter 10 words*"

}
var boxs =document.querySelectorAll('.cheak');
boxs.forEach(function(cheakbox){
  cheakbox.addEventListener('click',function(){
      // console.log(this);
      var brandname =this.value;
      console.log(brandname)
  })
})
}
