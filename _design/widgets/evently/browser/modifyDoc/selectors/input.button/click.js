function(e)
{
    var widget = $(this);
    var app = $$(widget).app;
    var doc = {};

    $.couch.session({
        success : function(r)
        {
//            var userCtx = r.userCtx;
            doc._id = $('#_id').attr('value');
            doc._rev = $('#_rev').attr('value');
            doc.type = $('#type').attr('value');
            doc.title = $('#title').attr('value');
            doc.details = $('#details').attr('value');

            $.log(doc);
            app.db.saveDoc(doc, {
                success: function(resp)
                {
                    widget.trigger('_init');
                }
            });
    }
    });
}
