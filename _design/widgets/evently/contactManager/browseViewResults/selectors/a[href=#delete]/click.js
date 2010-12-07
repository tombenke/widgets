function(e)
{
    var widget = $(this);
    var app = $$(widget).app;
    var id_rev_array = widget.attr('name').split('/');
    var _idsub = id_rev_array[0];
    var _revsub = id_rev_array[1];

    $.log(id_rev_array );
    if(confirm("Do you really want to remove the document?"))
    {
        var docToDelete = {
            _id: _idsub,
            _rev: _revsub
        }
        app.db.removeDoc( docToDelete,
        {
            success: function(resp)
            {
                widget.trigger('_init');
            }
        });
    }

}
