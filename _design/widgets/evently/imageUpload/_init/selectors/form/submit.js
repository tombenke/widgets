function( e )
{
    var form = $(this);
    var app = $$(form).app;
    var f = form.serializeObject();
    var params = e.data.args[2];
    var dburi = app.db.uri;
    var display = params.display;

    if( params.db != "" )
    {
        dburi = '/' + params.db + '/'
    }

    var parameters = {
        db : dburi,
        id : f._id
    };

    form.ajaxSubmit(
    {
        url: dburi + $.couch.encodeDocId( f._id ),
        success: function( resp )
        {
            if( display )
            {
                form.trigger( "display_image", parameters );
            }
            else
            {
                form.trigger( "image_uploaded", parameters );
            }
        }
    });
  
    return false;
};
