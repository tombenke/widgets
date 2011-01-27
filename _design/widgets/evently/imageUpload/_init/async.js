function( callback )
{
    var widget = $(this);
    var app = $$(widget).app;
    if( $$(this).args.db != "" )
    {
        app.db.name = $$(this).args.db;
        app.db.uri = "/" + $$(this).args.db + "/";
    }

    if( $$(this).args.id == "" )
    {
        var empty_doc = {};
        $.ajax({
            type: "GET",
            url: "/_uuids",
            dataType: "json",
            success: function( data )
            {
                empty_doc.id = data.uuids[0];
                empty_doc.rev = "";
                callback( empty_doc );
            }
        });
    }
    else
    {
        callback( $$(this).args );
    }
}



