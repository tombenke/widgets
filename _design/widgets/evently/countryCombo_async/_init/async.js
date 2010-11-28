function( callback )
{
    var app = $$(this).app;

    app.view(
        "countries",
        {
            success : function( results )
            {
                callback( results );
            }
        }
    );
}
