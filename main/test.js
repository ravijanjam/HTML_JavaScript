var margin = {top:100, right: 100, bottom:100, left: 200}

var data = [
	{date:"1-May-12",close:"58.13"},
	{date:"25-Apr-12",close:"99.00"}
	    ];

d3.csv("sample1.csv", function(error, data){
	data.forEach(function(d) {
		 d.date = parseDate(d.date);
		 d.close = +d.close;
		})	
		});
