function(e)
{
    var widget = $(this);
    var app = $$(widget).app;

    widget.trigger('newDoc', widget);
}
