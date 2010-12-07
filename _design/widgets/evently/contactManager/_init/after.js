function()
{
    var widget = $(this);
    var app = $$(widget).app;

    app.view(
        $$(this).args.viewName,
        {
            success : function( results )
            {
                widget.trigger( "browseViewResults", results );
            }
        }
    );
}
