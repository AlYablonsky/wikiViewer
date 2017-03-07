// Comments
// Run JQuery
$(document).ready(function () {
    
    // When search is clicked run code 
    $('#search').click(function () {
    
        // Gets search input 
        var searchTerm = $('#searchTerm').val();    
        // API url with searchTerm
var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
        
        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function(data){
                
                // Deleting the previous output
               $('#output').html('');
                
                // Prepending each element from the array to html. First anchortag #3, then heading #1 and then description #2 
                for (var i=0; i<data[1].length; i++ ) {   
                    $('#output').prepend("<li><a href=" + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
                } 
                // Deletes the search term in the form upon initiating the search
                $('#searchTerm').val('');
            },
            error: function(errorMessage){
                alert("Error");
            }
            
        });  
    
       
    });  
    
    
     $("#searchTerm").keypress(function(e) {
            if(e.which===13){
                $("#search").click();
            }    
        })   
});  
    