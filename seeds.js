var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name:"Cloud's Rest",
        image: "https://images.unsplash.com/photo-1533597818151-d1071f26fe32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet quam ac elit rutrum fringilla. Aenean ac enim quis massa ullamcorper bibendum eu at libero. In nisi orci, egestas in blandit tempor, pulvinar egestas purus. Sed cursus, arcu nec mattis suscipit, diam lorem aliquam mi, eget fermentum urna massa vitae tellus. Mauris a consequat odio, id lobortis nulla. Suspendisse vulputate eleifend neque, in vehicula sem sagittis sit amet."
    },
    {
        name:"Rocky Fields",
        image: "https://images.unsplash.com/photo-1477581265664-b1e27c6731a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet quam ac elit rutrum fringilla. Aenean ac enim quis massa ullamcorper bibendum eu at libero. In nisi orci, egestas in blandit tempor, pulvinar egestas purus. Sed cursus, arcu nec mattis suscipit, diam lorem aliquam mi, eget fermentum urna massa vitae tellus. Mauris a consequat odio, id lobortis nulla. Suspendisse vulputate eleifend neque, in vehicula sem sagittis sit amet."
    },
    {
        name:"Waterfall Springs",
        image: "https://images.unsplash.com/photo-1545750214-7685c8e77df5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet quam ac elit rutrum fringilla. Aenean ac enim quis massa ullamcorper bibendum eu at libero. In nisi orci, egestas in blandit tempor, pulvinar egestas purus. Sed cursus, arcu nec mattis suscipit, diam lorem aliquam mi, eget fermentum urna massa vitae tellus. Mauris a consequat odio, id lobortis nulla. Suspendisse vulputate eleifend neque, in vehicula sem sagittis sit amet."
    }
]

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        //add a few campgrounds
        data.forEach(function(seed){
              Campground.create(seed, function(err, campground){
                  if(err){
                      console.log(err);
                  } else {
                      console.log("added a campground!");
                      //create a comment
                      Comment.create(
                          {
                              text: "This place is great, but I wish there was internet",
                              author: "Homer"
                          }, function(err, comment){
                              if(err){
                                  console.log(err);
                              } else{
                                  campground.comments.push(comment);
                                  campground.save();
                                  console.log("Created new comment");
                              }
                          });
                  }
              }); 
        });
    });
    //add a few comments
}


module.exports = seedDB;