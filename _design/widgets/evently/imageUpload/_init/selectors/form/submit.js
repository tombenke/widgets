function(e) {
  var form = $(this), app = $$(form).app,
  f = form.serializeObject();
  var params = e.data.args[2];
  var dburi = app.db.uri;
  var display = params.display;
  if(params.db != "")
  {
     dburi = '/'+params.db+'/'
  }
  var parameters = {db : dburi, id : f._id};
  var empty_doc = {};
  empty_doc._id = f._id;
  app.db.saveDoc(empty_doc,{success: function(r){
        $("#_rev").attr("value",r.rev);
        form.ajaxSubmit({
            url: dburi + $.couch.encodeDocId(f._id),
                success: function(resp) {
	                if(display){
                        form.trigger("display_image", parameters);
	                }else{
	                    form.trigger("image_uploaded", parameters);
	                }
                }
        });
  
  }});
  return false;
};
