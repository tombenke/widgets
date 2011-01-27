function( callback )
{
    var widget = $(this);
    var app = $$(widget).app;
    var search_key = $$(this).args.key;
    var db = $$(this).args.db;
    var authentication_needed = $$(this).args.authentication_needed;
    var display_result = $$(this).args.display_result;

    app.db.name = db;
    app.db.uri = "/" + db + "/";
    app.view(
        "findCommentsByObject",
        {
            success : function( json )
            {
                callback( json );
            },
            key : search_key
        }
    );

/* app.db.openDoc(user, {success : function(json){
            if(authentication_needed){
                $.couch.session({
                    success : function(r) {
                        if(r.userCtx.name){
                           callback([json,true,display_result]);
                        }else{
                           callback([json,false,display_result]);
                        }
                }});
            }else{
                callback([json,true,display_result]);
            }
   }});*/
}



