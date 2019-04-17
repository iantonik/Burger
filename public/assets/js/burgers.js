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


    })
})