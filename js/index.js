document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
  $("#page").on("swiperight","#value1", function(event, ui){
    $("#value2").innerText("THIS WORKED");
  });
};
