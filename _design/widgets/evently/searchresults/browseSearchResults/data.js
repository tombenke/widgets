function(e, viewResults)
{
    var items = [];

    for ( row in viewResults.rows )
    {
//        alert( viewResults.rows[r].key.toString().split(',')[1] );
        var arr = viewResults.rows[row].key.toString().split(',');
        var item = {
            id : arr[1],
            title : arr[2]
        };
        items.push( item );
    }

    return {
        viewResults : items
//        viewResults : viewResults.rows
    }
}
