
// Sending a request to server to pull the text file, this line should be added on top of all plots, because the data should be loaded before the values are passed into the arrays
	var client = new XMLHttpRequest();
	client.open('GET', 'foo.txt');
	client.onreadystatechange = function() {
//		  alert(client.responseText);
	}
	client.send();

// Reading a text file from the server/ from the same directory
/*
	var reader = new FileReader();
	reader.onload = function(e);
		var text = reader.result;
	}
	
	reader.readAsText("foo.txt", UTF-8);
*/

	//JavaScript tag refresh the page
	setInterval(function() {
		                  window.location.reload();
				                  }, 300000); 
	// line chart data
	var buyerData = {
		labels : ["January","February","March","April","May","Dinosaur"],
		datasets : [
		{
				fillColor : "rgba(172,194,132,0.4)",
				strokeColor : "#ACC26D",
				pointColor : "#fff",
				pointStrokeColor : "#9DB86D",
				data : [203,156,99,251,305,247]
			}
		]
	}
	
	// get line chart canvas
	var buyers = document.getElementById('buyers').getContext('2d');

	// draw line chart
	new Chart(buyers).Line(buyerData); 
	// pie chart data
	var pieData = [
		{
			value: 20,
			color:"#878BB6"
		},
		{
			value : 40,
			color : "#4ACAB4"
		},
		{
			value : 10,
			color : "#FF8153"
		},
		{
			value : 30,
			color : "#FFEA88"
		}
	];

	// pie chart options
	var pieOptions = {
		segmentShowStroke : false,
		animateScale : true
	}
	
	// get pie chart canvas
	var countries= document.getElementById("countries").getContext("2d");
	
	// draw pie chart
	new Chart(countries).Pie(pieData, pieOptions);
	
	// bar chart data
	var barData = {
	labels : ["January","February","March","April","May","June"],
	datasets : [
		{
			fillColor : "#48A497",
			strokeColor : "#48A4D1",
			data : [456,479,324,569,702,600]
		},
		{
			fillColor : "rgba(73,188,170,0.4)",
			strokeColor : "rgba(72,174,209,0.4)",
			data : [364,504,605,400,345,320]
		}
		]
	}
	
	// get bar chart canvas
	var income = document.getElementById("income").getContext("2d");
	
	// draw bar chart
	new Chart(income).Bar(barData);

	// radar chart data
		var radar_data = [
	    	{
		value: 300,
		color:"#F7464A",
		highlight: "#FF5A5E",
		label: "Red"
    		},
    		{
		value: 50,
		color: "#46BFBD",
		highlight: "#5AD3D1",
		label: "Green"
    		},
    		{
		value: 100,
		color: "#FDB45C",
		highlight: "#FFC870",
		label: "Yellow"
    		},
    		{
		value: 40,
		color: "#949FB1",
		highlight: "#A8B3C5",
		label: "Grey"
    		},
    		{
		value: 120,
		color: "#4D5360",
		highlight: "#616774",
		label: "Dark Grey"
		}

];


	// get radar chart canvas
	var ctx = document.getElementById("radar").getContext("2d");

	// draw radar chart 
	new Chart(ctx).PolarArea(radar_data);
