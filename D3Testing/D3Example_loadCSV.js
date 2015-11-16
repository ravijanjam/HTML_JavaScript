
		d3.csv("D3Example_v3.csv", function(d){
			return {
				year: new Date(+d.Year, 0, 1), // convert Year column to date
				make: d.Make, 
				model: d.Model,
				length: +d.Length // convert "Length" column to number
			};
			}, function(error, rows){
				console.log(rows);
			});

		console.log("Test D3 program")

		 //Another sample
		 var p = d3.select("body").selectAll("p")
		 	.data([1, 2, 3, 4, 5, 6])
			.enter()
			.append("p")
			.text("meow meow");
