$(document).ready(function(){
var appContainer = $("#app-container")
//this function grabs apps from the database and updates the view
function getApps(user){
  userId = user || "";
  if(userId){
    userId = "/?user_id=" + userId;
  }
  $.get("/api/apps" + userId, function(data){
    console.log("Apps", data);
    apps= data;
    of (!apps || !apps.length){
      displayEmpty(author);
    } else {
      initializeRows();
    }
  });
}

function initializeRows() {
  appContainer.empty();
  var appsToAdd = [];
  for (var i = 0; i < apps.length; i++) {
    appsToAdd.push(createNewRow(apps[i]));
  }
  appContainer.append(appsToAdd);
}
});
