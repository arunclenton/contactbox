var page1 = document.getElementById('p1');
var page2 = document.getElementById('p2');
var page3 = document.getElementById('p3');
var page4 = document.getElementById('p4');
var page5 = document.getElementById('p5');


// function validate(){
//     var  first = document.getElementById('firstnsme');
    
//     if(first.value == ''){
//     page1.innerHTML ="name is not found";
//     console.log(page1)
//     console.log(10);
//     // return false;
  
//     }
// }

    
// }
// function validate() {
// //   let x = document.forms["myForm"]["fname"].value;
//   if (document.myform.first.value == "") {
//     console.log("Name must be filled out!");
//     document.myform.name.focus();
//     return false;
//   }
// }
// function validate() {
//     var x = document.getElementById("sand").value;
//     // document.getElementById(").innerHTML = x;
//     x.innerHTML="arun";
//     console.log(x)
//   }

 var button =document.getElementById('button');

 function add(){
 
  
  var  first = document.getElementById('firstname').value;
  
      if(first == ''){
      page1.innerText ="*name is not found*";
    console.log(add);
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

 var mail = document.getElementById('arun').value;

if(mail.length <= 10 + "letter"){
  page3.innerText ="*e-mail is not required*"

}

var phone = document.getElementById('arun1').value;

if(phone ==''){
  page4.innerText ="*phone number is not valid*"

}

var message = document.getElementById('message').value;

if(message == ''){
  page5.innerText ="*enter a message*"

}
if(message.length <= 10 +'word'){
  page5.innerText ="*enter 10 words*"

}

}
