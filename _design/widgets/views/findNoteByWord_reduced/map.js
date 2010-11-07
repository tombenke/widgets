function( doc )
{
    if( doc.title )
    {
        var words = doc.title.toLowerCase().replace(/[^a-z]+/g, ' ').split(' ');
        for( word in words )
        {
            emit( [words[ word ], doc._id, doc.title], null );
        }
    }

    if( doc.details )
    {
        words = doc.details.toLowerCase().replace(/[^a-z]+/g, ' ').split(' ');
        for( word in words )
        {
            emit( [words[ word ], doc._id, doc.title], null );
        }
    }
}
