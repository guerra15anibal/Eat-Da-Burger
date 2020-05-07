$(function () {
  $(".change-eaten").on("click", function (event) {
    var id = $(this).data("id");
    var newBurger = $(this).data("newBurger");

    var newBurgerState = {
      devoured: NewBurger,
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newBurgerState,
    }).then(function () {
      console.log("changed not eaten to", newBurger);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurg = {
      burger_name: $("#ca").val().trim(),
      devoured: $("[burger_name=devoured]:checked").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurg,
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burger/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
