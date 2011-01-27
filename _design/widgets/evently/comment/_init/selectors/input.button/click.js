function(e) {
  var widget = $(this), app = $$(widget).app;
  var params = e.data.args[2];
  
  var comment = {};
  app.db.name = params.db;
  app.db.uri = "/"+params.db+"/";
  comment.text = $("#comment_text").attr("value");//.replace(/\n/g,"<br/>").replace(/\r/g,"");
  comment.target = params.key;
  comment.type = "comment";
  var currentTime = new Date();
  var timestamp = currentTime.getFullYear()+"-"+(currentTime.getMonth()+1)+"-"+currentTime.getDate()+" "+currentTime.getHours()+":"+currentTime.getMinutes()+":"+currentTime.getSeconds();
  comment.timestamp = timestamp;
  app.db.saveDoc(comment,{success:function(resp){
      widget.trigger("_init", { "key" : params.key, "db" : "comments", "authentication_needed" : params.authentication_needed, "display_result" : params.display_result });
  }});
};
