var app = new Framework7({
    // App root element
    el: '#app',
    // ... other parameters
});
var mainView = app.views.create('.view-main')


document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    var options = {
        quality: 80,
        encodingType: Camera.EncodingType.PNG,
        destinationType: Camera.DestinationType.FILE_URI,

    };
    console.log(navigator.camera);


    $("#takePic").on("click", takePic);

    function takePic() {
        console.log("click");
        navigator.camera.getPicture(onSuccess, onError, options);
    }

    function onSuccess(imageData) {
        console.log("Success! :)");
        console.log(imageData);
        resolveLocalFileSystemURL(imageData, function (fileEntry) {
            var image = fileEntry.toURL()
            console.log(image);
            // do something with URL, assign to src or create an html 
            //$('#photo1').href = myNewImage;
            $("#photos").append("<img src='" + image + "'>");
            //$("#takePic").after("<img src='" + image + "'>");
            // $("#myimg").attr("src", imageData);
            // $("#gallery").append("<img src='" + imgData + "'>");
        }, onError);
    }

    function onError(message) {
        console.log("Error :(");
        alert("Photo not taken because " + message);
    }
}