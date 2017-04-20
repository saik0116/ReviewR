"use strict";
if (document.deviceready) {
    document.addEventListener('deviceready', OnDeviceReady);
}
else {
    document.addEventListener('DOMContentLoaded', OnDeviceReady)
}
var rating = 2;
var stars = null;
let imageTaken = "";
var array2;

var myArray = {"reviews":[
  {"id":237428374, "name":"Timmies", "rating":4, "img":"path/and/filename/on/device.png"},
  {"id":123987944, "name":"Starbucks", "rating":4, "img":"path/and/filename/on/device.png"}
]};

function OnDeviceReady() {
    let save = document.getElementById("save");
    save.addEventListener("touchend", addtoarray);
    let delt = document.getElementById("delete");
    delt.addEventListener("touchend", deleteRev);
    let myPic = document.getElementById("take-pic");
    myPic.addEventListener("touchend", capture);
    stars = document.querySelectorAll('.star');
    addListeners();
    setRating();
    console.log("device ready!!!");
}

function addListeners() {
    console.log("i'm adding the listeners to my stars");
  [].forEach.call(stars, function (star, index) {
        star.addEventListener('touchend', (function (idx) {
            console.log('adding listener', index);
            return function () {
                rating
                rating = idx + 1;
                console.log('Rating is now: ' + rating);
                setRating();
            }
        })(index));
    });
}
                    
function setRating() {
    console.log("i'm setting my ratings");
  [].forEach.call(stars, function (star, index) {
        if (rating > index) {
            star.classList.add('rated');
            console.log('added rated on', index);
        }
        else {
            star.classList.remove('rated');
            console.log('removed rated on', index);
        }
    });
}
var li;
function addtoarray() {
    
    var item = document.getElementById("item").value;
    
     array2 = {
        id: Date.now()
        , name: item
        , rating: rating,
        img: imageTaken
    }
    let list = document.getElementById("item-list");
     li = document.createElement("li");
    li.className = "table-view-cell";
    li.id = "testing123";
    list.appendChild(li);
    
    myArray.reviews.push(array2);
   
    
    for (var i = 0, l = myArray.reviews.length; i < l; i++) {
var myids = myArray.reviews[i].id;
}
    console.dir(myids);

   let a = document.createElement("a");
    a.className = "navigate-right pull-right";
    
    a.setAttribute("ids", myids);
    
    a.addEventListener("click", itemClick);
    
    
    
    
    
     li.innerHTML =  array2.name + "<br>" + '<img id="test12" src="'+ array2.img+'">' +  "<br>"  + "Rating: " + array2.rating;

    li.appendChild(a);    
    
    document.getElementById("myForm").reset();
    
    
    
//    console.dir(myArray);
    console.dir(myArray.reviews);
    

}

function itemClick(ev){
    ev.preventDefault();
    var id = ev.currentTarget.getAttribute("ids");
    var thisarray;
    for (var i = 0, l = myArray.reviews.length; i < l; i++) {
        if(
id == myArray.reviews[i].id) {
            let editm = document.getElementById("editModal");
            editm.classList.add("active");
            thisarray = myArray.reviews[i];  
        }
    }
    
     let deleteeee = document.getElementById("delete");
    deleteeee.addEventListener("click", function(){
        var test = id.parentNode;
    test.removeChild(id);
    ;
    });
    
    
    
    document.getElementById("editname").textContent = thisarray.name;
    
    document.getElementById("ratingz").textContent = "Rating: " + thisarray.rating;
    
    document.getElementById("editimg").src = thisarray.img;
}


function capture() {
    
    //Camera = navigator.camera;    
    var options = {
            "quality": 80,
            "destinationType": navigator.camera.DestinationType.FILE_URI,
            "encodingType": navigator.camera.EncodingType.PNG,
            "mediaType": navigator.camera.MediaType.PICTURE,
            "pictureSourceType": navigator.camera.PictureSourceType.CAMERA,
            "allowEdit": true,
            "targetWidth": 300,
            "targetHeight": 300
            //"saveToPhotoAlbum":true
        };
    
   
    
    navigator.camera.getPicture( onSuccess, onFail, options);
}
        function onSuccess(imageURI) { 
            
           imageTaken = imageURI; document.getElementById("myImage").src = imageURI;
            
            // image.src = imageURI;
            
//            image.setAttribute("id", "newImage")
//            currentPhoto = "data:image/jpeg;base64," + imageURI;
//           
//           
            
//            document.getElementById("takePhoto").style.display = "none";
//            document.getElementById("saveMe").style.display = "block";
//   
//         console.log("hi from onSuccess");  
 
        }
       
        function onFail(message) {
            alert('Failed because: ' + message);
        }
// 

function deleteRev(){
    
    
   var testing = li;
    var parent = testing.parentNode;
    parent.removeChild(testing);
   // myArray.reviews.splice(li.currentTarget);
//var deltedsfs = myArray.reviews;
//    deltedsfs
console.log("hm");
    
    
}