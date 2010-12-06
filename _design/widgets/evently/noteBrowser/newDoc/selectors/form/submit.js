function(e)
{
    var widget = $(this);
    var newDoc = widget.serializeObject();

    $$(this).app.db.saveDoc( newDoc, {
        success: function( resp )
        {
            widget.trigger('_init', resp);
        }
    });

    return false;
}