$(document).ready(function () {
  $(".inputField").change(function () {
    var input = $(this).val();
    $("ul").append(
      "<li>" +
        input +
        "<text class='fas fa-check'>✓</text> <text class='fas fa-trash'>×</text> </li>"
    );
    $(this).val(" ");
  });
  $("ul").on("click", ".fa-trash", function () {
    $(this).parent("li").fadeOut(200);
  });
  $("ul").on("click", ".fa-check", function () {
    $(this).parent("li").toggleClass("done");
  });
});
