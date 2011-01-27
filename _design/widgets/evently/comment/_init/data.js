function(resp) {
   return{
     comments : resp[0].rows,
	 display_add_comment : resp[1],
	 display_comments : resp[2]
   };
};
