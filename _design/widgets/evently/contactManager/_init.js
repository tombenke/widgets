function() {
    var widget = $(this);
    var app = $$(widget).app;
    var viewResults = {};
  
    $.couch.session({
        success : function(r)
        {
            app.view(
                "contacts",
                {
                    success : function(json)
                    {
                        viewResults = json;
                        widget.trigger("browseViewResults",viewResults);
                    }
                });
        }
    });
}
