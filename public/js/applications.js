$(document).ready(function(){

//this function grabs posts from the database and updates the view
function getApps(user){
  userId = user || "";
  if(userId){
    userId = "/?user_id=" + userId;
  }
  $.get("/api/posts" + userId, function(data){
    console.log("Apps", data);
    apps= data;
    of (!apps || !apps.length){
      displayEmpty(author);
    } else {
      initializeRows();
    }
  });
}

});
