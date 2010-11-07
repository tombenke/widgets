function( doc )
{
    var foundWords = {};

    if( doc.title )
    {
        var words = doc.title.toLowerCase().replace(/[\s]+/g, ' ').split(' ');
//        var words = doc.title.toLowerCase().split(' ');
        for( word in words )
        {
            foundWords[ words[ word ] ] = true;
        }
    }

    if( doc.details )
    {
        words = doc.details.toLowerCase().replace(/[\s]+/g, ' ').split(' ');
        words = doc.details.toLowerCase().split(' ');
        for( word in words )
        {
            foundWords[ words[ word ] ] = true;
        }
    }

    for( word in foundWords )
    {
        emit( word, doc );
    }
}
