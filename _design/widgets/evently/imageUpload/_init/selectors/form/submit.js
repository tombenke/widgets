function(e) {
  var form = $(this), app = $$(form).app,
  f = form.serializeObject();
  var params = e.data.args[2];
  var dburi = app.db.uri;
  if(params.db != "")
  {
     dburi = '/'+params.db+'/'
  }
  form.ajaxSubmit({
    url: dburi + $.couch.encodeDocId(f._id),
    success: function(resp) {
       //alert("Sikeresen feltöltve!!");
       form.trigger("image_uploaded", f._id);
    }
  });
  
  return false;
};
