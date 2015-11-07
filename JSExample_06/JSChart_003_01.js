	//JavaScript tag refresh the page
	setInterval(function() {
		                  window.location.reload();
				                  }, 3000000); 

	// load the data 
	var cigarData = $.ajax({
			    data: {cigar: sCigar, calc: "cigar"},
			    type: "POST",
			    url: "testJSON.txt",
			    dataType:"json",
			    async: false,
			    success:function(data) {
			    // This outputs the result of the ajax request
			    //    console.log(data);
			    //
			     }
			    //
			    //
			    
			     }).responseText; 
	// line chart data
	var buyerData = {
		labels : ["January","February","March","April","May","Dinosaur"],
		datasets : [
		{
				fillColor : "rgba(172,194,132,0.4)",
				strokeColor : "#ACC26D",
				pointColor : "#fff",
				pointStrokeColor : "#9DB86D",
				// Place where I need to pass the data 
				data : [203,156,99,251,305,247]
			}
		]
	}
	
	// get line chart canvas
	var buyers = document.getElementById('buyers').getContext('2d');

	// draw line chart
	new Chart(buyers).Line(buyerData); 

