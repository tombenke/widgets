function( callback )
{
       var widget = $(this);
       var app = $$(widget).app;
       if($$(this).args.db != "")
       {
          app.db.name = $$(this).args.db;
          app.db.uri = "/"+$$(this).args.db+"/";
       }

       if( $$(this).args.id == "" )
       {
          var empty_doc = {};
          app.db.saveDoc(empty_doc, { success: function(resp) {	
                   //widget.trigger('upload', resp);
		   callback(resp);
          }});
       }else{
          callback($$(this).args);
       }

}



