function(doc)
{
    if(doc.type == "note")
    {
        emit(doc.title, doc);
    }
}
