$(document).ready(function() {

	$("button").on("click", function(){

		var searchTerm = $("input:text").val();
		var url = "https://www.crossorigin.me/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&prop=extracts&exsentences=1&search="+searchTerm+"&limit=5&callback=?";

	    $.ajax({
        url: url, 
        success: function(result){
	    
        var data = JSON.parse(result.substring(5,result.length-1));
                 
        var output = "";
        
        for (i = 0; i <= 4; i++){
          output += '<li><h3> <a href="' + data[3][i] + '">'+ data[1][i] + '</h3></a><p>' + data[2][i] + '</p></li>'
          
          }
          
          $("#output").html(output)  
	      },
        error: function(errorMessage){
          alert("error");
        }
     }); 
	});
});
