function(resp) {
   return{
      numberOfVotes : resp[0].rating.numberOfVotes,
	  average : resp[0].rating.average,
	  display_vote : resp[1],
	  display_result : resp[2],
	  display_rating_selected : function(){
          return function(text, render) {
            if(Math.round(resp[0].rating.average) == text){ 
                return 'checked=checked'
            }else{
		        return ''
	        }
	      }
      }
   };
};
