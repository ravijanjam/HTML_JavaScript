var data = d3.range(10);
var svg = d3.select("body").append("svg");

var shapes = svg.selectAll(".shapes")
    .data(data).enter();

shapes.append("circle")
    .filter(function(d){ return d < 5; })
    .attr("cx", function(d, i){ return (i+1) * 15; })
    .attr("cy", 10)
    .attr("r", 10);

shapes.append("rect")
    .filter(function(d){ return d >= 5; })
    .attr("x", function(d, i){ return (i+1) * 25; })
    .attr("y", 25)
    .attr("width", 10)
    .attr("height", 10);
