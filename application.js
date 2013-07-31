$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  };

  function bindEvents() {
    $(".add").on("click", function(event) {
      event.preventDefault();
      var input = $("#entry").val();
      $(".todo_list").append(buildTodo(input));
    });

    $(".todo_list").on("click", ".complete", function(event){
      event.preventDefault();
      $(this).parents('ul').siblings('h2').css("text-decoration", "line-through").css("color", "red");
    });

      $(".todo_list").on("click", '.delete', function(event){
      event.preventDefault();
      $(this).parents('.todo').remove();
      // $(this).parents().eq(2).remove();
    });

  };
  bindEvents();
});  
