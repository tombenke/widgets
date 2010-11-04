function()
{
    var elem = $(this);
    $$(this).userCtx = null;
    $.couch.session({
        success : function(r)
        {
            var userCtx = r.userCtx;
            if( userCtx.name )
            {
                elem.trigger("loggedIn", [r]);
            }
            else
            {
                elem.trigger("loggedOut");
            };
        }
    });
}