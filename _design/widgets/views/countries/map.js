function(doc) {
  if (doc.type && doc.type == 'country') {
    emit( doc.name, doc._id );
  }
};