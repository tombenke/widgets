function(e)
{
    var widget = $(this);
    var app = $$(widget).app;

    var form = $(':parent');
    var newDoc = form.serializeObject();
    newDoc.title = newDoc.title[0];
    newDoc.country = newDoc.country[0];

    app.db.saveDoc( newDoc,
    {
        success: function( resp )
        {
            alert('Form data succesfully saved: ' );
            widget.parentsUntil('#contactManager').trigger( '_init' );
        }
    });
    return false;
}