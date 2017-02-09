$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#user").append("<li>Meow!</li>");
    $("ul#cat-response").append("<li>Mrowr!</li>");
    $("ul#user").children("li").click(function() {
    $(this).remove();
    });
    $("ul#cat-response").children("li").click(function() {
    $(this).remove();
    });
  });

  $("button#dog").click(function() {
    $("ul#user2").append("<li>Woof!</li>");
    $("ul#dog-response").append("<li>Ruff! Ruff!</li>");
    $("ul#user2").children("li").click(function() {
    $(this).remove();
    });
    $("ul#dog-response").children("li").click(function() {
    $(this).remove();
    });
  });
});
