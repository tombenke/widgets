function()
{
    var widget = $(this);
    var app = $$(widget).app;
    var viewResults = {};
  
    app.view(
        "contacts",
        {
            success : function(json)
            {
                viewResults = json;
                widget.trigger("browseViewResults",viewResults);
            }
        }
    );
}