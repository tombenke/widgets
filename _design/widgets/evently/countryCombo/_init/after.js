function()
{
    var widget = $(this);
    var app = $$(widget).app;

    var viewResults = {};

    alert('release me...!');
    app.view(
        "countries",
        {
            success : function( results )
            {
                viewResults = results;
                widget.trigger( "showCombo", viewResults );
            }
        }
    );
}
