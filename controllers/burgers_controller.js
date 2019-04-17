var express=require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })

});


router.put("/api/burgers/:id", function(req, res){
    var condition = "id = "+req.params.id;

    console.log("Update condition ", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result){
        if(result.changedRows == 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    }
    )
})


module.exports = router;