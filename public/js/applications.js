$(document).ready(function(){
var appContainer = $("#app-container")

$(".company").on("click", function(){
  location.href = "../views/company.handlebars";
})
//this function grabs apps from the database and updates the view
// function getApps(user){
//   userId = user || "";
//   if(userId){
//     userId = "/?user_id=" + userId;
//   }
//   $.get("/api/apps" + userId, function(data){
//     console.log("Apps", data);
//     apps= data;
//     of (!apps || !apps.length){
//       displayEmpty(author);
//     } else {
//       initializeRows();
//     }
//   });
// }

//this route will take the form submission
// $(".company").on("click", function(){
//   location.href = "company.handl";
// })


});
