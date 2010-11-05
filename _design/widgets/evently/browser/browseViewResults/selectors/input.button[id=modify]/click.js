function(e)
{
    var widget = $(this);
    var app = $$(widget).app;

    app.db.openDoc(widget.attr('name'), {
        success: function(resp)
        {
            widget.trigger('modifyDoc', resp);
        }
    });
}
