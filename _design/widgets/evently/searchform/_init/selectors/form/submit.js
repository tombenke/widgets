function(e)
{
    var widget = $(this);
    var searchCriteria = {
        textToSearch : $('input[id=textToSearch]', this).val()
    };

    $(this).trigger('doSearch', searchCriteria );
    return false;
}