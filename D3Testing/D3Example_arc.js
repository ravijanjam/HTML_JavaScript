		var vis = d3.select("body").append("div").append("svg");
		var pi = Math.PI;

		var arc = d3.svg.arc()
			.innerRadius(50)
			.outerRadius(100)
			.startAngle(45 * (pi/180))
			.endAngle(3)

		vis.attr("width", "400").attr("height", "400")
			.append("path")
			.attr("d", arc)
			.attr("fill", "green")
			
