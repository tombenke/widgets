function(e) {
  var widget = $(this), app = $$(widget).app;
  var params = e.data.args[2];
  var record = e.data.args[0][0];
  app.db.name = params.db;
  app.db.uri = "/"+params.db+"/";
  var average = $("#average").attr("value");
  var numberOfVotes = $("#numberOfVotes").attr("value");
  var all = numberOfVotes * average;
  numberOfVotes++;
  var checked = $('input:radio[name=vote]:checked').attr("id");
  var vote = checked.substring(4,5);
  all = all + parseInt(vote);
  var average = all/numberOfVotes;
  record.rating.average = average;
  record.rating.numberOfVotes = numberOfVotes;
  app.db.saveDoc(record,{success:function(resp){
      widget.trigger("_init", { "user" : resp._id, "db" : "rating", "authentication_needed" : params.authentication_needed, "display_result" : params.display_result  });
  }});
};
