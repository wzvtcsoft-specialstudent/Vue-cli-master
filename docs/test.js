$("#test").text("test!!!!!!");
$.getJSON("https://jsonplaceholder.typicode.com/todos/1",function(data){
    window.alert(data);
},"json");

var parta="3c89eca1a394f14faea8";
var partb="493ca018057adb15ca9f";

$.ajax({
  url: "https://api.github.com/graphql",
  type: "POST",
  headers:{
    "Authorization": "bearer "+parta+partb
  }
  ,contentType:"application/json"
  ,cache: false
  ,data: '{"query": "query { viewer { login }}"}'
  ,dataType:'json'
  ,success: function(result){
    window.alert(result.data.viewer.login);
  }
});
