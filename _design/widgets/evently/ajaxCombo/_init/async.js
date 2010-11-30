function( callback )
{
    var app = $$(this).app;

    app.view(
        $$(this).args.viewName,
        {
            success : function( results )
            {
                callback( results );
            }
        }
    );
}
