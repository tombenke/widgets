function( callback )
{
//    var widget = $(this);
    var app = $$(this).app;

//    app.db.openDoc( widget.attr('name'),
    app.db.openDoc( 'tombenke',
    {
        success: function( response )
        {
            callback( response );
        }
    });

}



