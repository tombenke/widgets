function() {
    var widget = $(this);
    var app = $$(widget).app;
    var viewResults = {};
    var searchCriteria = {};
  
    $.couch.session({
        success : function(r)
        {
            app.view(
                "findNoteByWord",
                {
                    success : function(json)
                    {
                        viewResults = json;
                        widget.trigger("browseSearchResults",viewResults);
                    },
                    startkey : [searchCriteria.textToSearch],
                    endkey : [searchCriteria.textToSearch,[]],
                    group : true,
                    reduce : true
                });
        }
    });
}
