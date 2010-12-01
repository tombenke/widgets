function(e)
{
    var form = $(':parent');
    var newDoc = form.serializeObject();
    newDoc.title = newDoc.title[0];
    newDoc.country = newDoc.country[0];

    $$(this).app.db.saveDoc( newDoc, {
        success: function( resp )
        {
            alert('Form data succesfully saved.');
            form.trigger('_init');
        }
    });

    return false;
}