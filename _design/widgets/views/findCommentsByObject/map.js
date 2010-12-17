function(doc) {
  if(doc.type == "comment"){
	emit(doc.target, doc);
  }
}
