"use strict";
if (document.deviceready) {
    document.addEventListener('deviceready', OnDeviceReady);
}
else {
    document.addEventListener('DOMContentLoaded', OnDeviceReady)
}
var rating = 2;
var stars = null;
//let navC = navigator.camera;
function OnDeviceReady() {
    let save = document.getElementById("save");
    save.addEventListener("touchend", addtoarray);
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
//let Hpic = document.getElementById("takepic");
//Hpic.addEventListener("click", onSuccess )
//                      
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
//navigator.camera.getPicture( successCallback, errorCallback, options ); 
//console.log(save);
function addtoarray() {
    var item = document.getElementById("item").value;
    var array2 = {
        id: Date.now()
        , name: item
        , rating: rating
            //img: imageSrc
    }
    let list = document.getElementById("item-list");
    var li = document.createElement("li");
    li.className = "table-view-cell";
    li.id = "testing123";
    list.appendChild(li);
    li.innerHTML = array2.name + '<a class="navigate-right pull-right" href="gifts.html">' + "Rating: " + array2.rating + '</a>';
    // console.log(myarray);
}

//function capture(){
//    
//    console.log("camera is trying");
//    
//    var options = {
//        quality: 80
//        , destinationType: Camera.DestinationType.DATA_URL
//        , encodingType: Camera.EncodingType.PNG
//        , mediaType: Camera.MediaType.PICTURE
//        , pictureSourceType: Camera.PictureSourceType.CAMERA
//        , allowEdit: true
//        , targetWidth: 300
//        , targetHeight: 300
//        
//        
//    };
//    
//    function onSuccess(imageURI) {
//     
//    }
//
//    function onFail(message) {
//        alert('Failed because: ' + message);
//    }
//
//    
//    navigator.camera.getPicture( onSuccess, onFail, options);
//};

function capture() {
    
    console.log("testcapture");
    console.dir(navigator);
    //Camera = navigator.camera;    
    var options = {
            quality: 80,
            destinationType: navigator.camera.DestinationType.FILE_URI,
            encodingType: navigator.camera.EncodingType.PNG,
            mediaType: navigator.camera.MediaType.PICTURE,
            pictureSourceType: navigator.camera.PictureSourceType.CAMERA,
            allowEdit: true,
            targetWidth: 300,
            targetHeight: 300,
            saveToPhotoAlbum:true
        };
    
    console.dir(options);
    
    navigator.camera.getPicture( onSuccess, onFail, options);
}
        function onSuccess(imageURI) {
           
//            let image = document.createElement("img");
//            image.src = "data:image/jpeg;base64," + imageURI;
//            image.setAttribute("id", "newImage")
//            currentPhoto = "data:image/jpeg;base64," + imageURI;
//           
//           
//            document.getElementById("captured-photo").appendChild(image);
//            document.getElementById("takePhoto").style.display = "none";
//            document.getElementById("saveMe").style.display = "block";
//   
         console.log("hi from onSuccess");  
 
        }
       
        function onFail(message) {
            alert('Failed because: ' + message);
        }
   
        
       
    

