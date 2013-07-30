$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    $(".add").on("click", function(event) {
    event.preventDefault();
    var input = $("#entry").val();
    $(".todo_list").append(buildTodo(input));
    });

    $(".complete").on("click", function(event){
    event.preventDefault();
    $("this").css("text-decoration", "line-through");
    });


    // Bind functions which add, remove, and complete todos to the appropriate
    // elements

  //Create functions to add, remove and complete todos

  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }
  
  bindEvents();
  }
});  




    // start stolen code.
    // var newdiv = document.createElement('div');
    // newdiv.style = "float:right;width:250px;min-height:200px;
      // display:block;border-width: 1px 1px 1px";
    // document.body.appendChild(newdiv);  

    // var newform = document.createElement('form');
    // newform.id = "ttmsetpointrun"; 
    // newform.action="";
    // newform.style="text-align:right";
    // newdiv.appendChild(newform);

    // var newinput = document.createElement('input');
    // newinput.style = "float:bottom;";
    // newinput.type = "submit";
    // newinput.value = "Move to Set Point";
    // newform.appendChild(newinput);
    // end stolen code

  //     document.getElementById("todo").addEventListener("click",function(form) {
  //   if(form.target && form.target.nodeName == "button") {
  //     alert("You have reached the limit of adding ");

  //   }  
  // });

// //create a form
// var f = document.createElement("form");
// f.setAttribute('method',"post");
// f.setAttribute('action',"submit.php");

// //create input element
// var i = document.createElement("input");
// i.type = "text";
// i.name = "user_name";
// i.id = "user_name1";

// //create a checkbox
// var c = document.createElement("input");
// c.type = "checkbox";
// c.id = "checkbox1";
// c.name = "check1";

// //create a button
// var s = document.createElement("input");
// s.type = "submit";
// s.value = "Submit";

// // add all elements to the form
// f.appendChild(i);
// f.appendChild(c);
// f.appendChild(s);

// // add the form inside the body
// $("body").append(f);   //using jQuery or
// document.getElementsByTagName('body')[0].appendChild(f); //pure javascript
