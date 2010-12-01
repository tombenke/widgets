function( e, doc )
{
    var widget = $(this);
    var app = $$(widget).app;

    return {
        doc : doc/*,
        title_selected : function()
        {
            return function(text, render)
            {
                if( doc.title && doc.title.indexOf( text ) >= 0 )
                {
                    return 'selected=true'
                }
            }
        }*/
    }
}
