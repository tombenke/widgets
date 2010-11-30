function( callback )
{
//    var widget = $(this);
    var app = $$(this).app;

    alert('async');

//    app.db.openDoc( widget.attr('name'),
    app.db.openDoc( $$(this).args.userId, //'tombenke',
    {
        success: function( response )
        {
            callback( response );
        }
    });

}



