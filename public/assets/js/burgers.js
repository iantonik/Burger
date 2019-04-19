$(function(){
    $(".devour").on("click", function(){
        var id=$(this).data("id");
        var status = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id,{
            type: "PUT",
            data: status
        }).then(
            function(){
                console.log(`Changed burger state to ${status}`)
                location.reload();
            }
        )


    });

    $(".create-burger").on("submit", function(event) {
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#burger-name").val().trim(),
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("Created New Burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
})