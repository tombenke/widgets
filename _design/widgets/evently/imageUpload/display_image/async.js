function( callback )
{
       var widget = $(this);
       var app = $$(widget).app;
       var id = $$(this).id;
	   var dburi = $$(this).db;
       app.db.openDoc(id, { success: function(resp) {
	       var name = '';
           for(var attribute in resp._attachments){
	               name = attribute;
           }
		   var uri = dburi + id + '/' + name;
		   callback(uri);
	   }});
       

}



