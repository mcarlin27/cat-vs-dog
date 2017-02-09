$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#user").append("<li>Meow!</li>");
    $("ul#webpage").append("<li>Mrowr!</li>");
  });

  $("button#dog").click(function() {
    $("ul#user2").append("<li>Woof!</li>");
    $("ul#webpage2").append("<li>Ruff! Ruff!</li>");
  });
});
