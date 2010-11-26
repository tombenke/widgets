function(doc) {
  if (doc.type && doc.type == 'country') {
    emit( doc._id, doc.name );
  }
};