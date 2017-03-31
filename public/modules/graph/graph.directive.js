'use strict';

angular.module('consoleApp')
    .directive('bpmChart', function ($parse, $http) {
    var directiveDefinitionObject = {
        restrict: 'E',
        replace: false,
        scope: {data: '=chartData'},
        link: function (scope, element, attrs) {
            //console.log(scope);'
            var margin = {top: 30, right: 20, bottom: 30, left: 50},
                width = 600 - margin.left - margin.right,
                height = 270 - margin.top - margin.bottom;

            // Parse the date / time
            var parseDate = d3.time.format("%d-%b-%y").parse;

            // Set the ranges
            var x = d3.time.scale().range([0, width]);
            var y = d3.scale.linear().range([height, 0]);

            // Define the axes
            var xAxis = d3.svg.axis()
                .scale(x)
                .orient("bottom")
                .innerTickSize(-height)
                .outerTickSize(0)
                .tickPadding(10);

            var yAxis = d3.svg.axis()
                .scale(y)
                .orient("left")
                .innerTickSize(-width)
                .outerTickSize(0)
                .tickPadding(10);

            // Define the line
            var valueline = d3.svg.line()
                .interpolate("cardinal")
                .x(function(d) { return x(d.date); })
                .y(function(d) { return y(d.BPM); });

            // Adds the svg canvas
            var svg = d3.select("#line")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("id", "gcontainer")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            var ctr = 1;

            var data =  data = [{date: 1413154800000, BPM : 123}, {date: 1413158400000, BPM: 90},
                {date: 1413158800000, BPM : 100}, {date: 1413159800000, BPM: 80}];

            plotData(data);
            // the interval is used to update data in graph
            // in data url you can show data of latest 20 minutes. with 1 min interval
            var inter = setInterval(function() {
                // do same here, data = getDataFromUrl();
                updateData(data);
            }, 5000);


            function plotData(data){
                // Get the data
                // Scale the range of the data
                x.domain(d3.extent(data, function(d) { return d.date; }));
                y.domain([0, d3.max(data, function(d) { return d.BPM; })]);

                // Add the valueline path.
                var path = svg.append("path")
                    .attr("class", "line")
                    .attr("d", valueline(data));
                // Add the scatterplot
                var div = d3.select("body").append("div")
                    .attr("class", "tooltip")
                    .style("opacity", 0);

                svg.selectAll("dot")
                    .data(data)
                    .enter()
                    .append("circle")
                    .attr("id", "valuepoints")
                    .attr("r", 5)
                    .attr("cx", function(d) { return x(d.date); })
                    .attr("cy", function(d) { return y(d.BPM); })
                    .on("mouseover", function(d) {
                        div.transition()
                            .duration(200)
                            .style("opacity", .9);
                        div .html("Time: " + d.date + "<br/>BPM: "  + d.BPM)
                            .style("left", (d3.event.pageX) + "px")
                            .style("top", (d3.event.pageY - 28) + "px");
                    })
                    .on("mouseout", function(d) {
                        div.transition()
                            .duration(1000)
                            .style("opacity", 0);
                    });


                // Add the X Axis
                svg.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis);

                // Add the Y Axis
                svg.append("g")
                    .attr("class", "y axis")
                    .call(yAxis);
                var color = ["#1792e4", "#ff4248", "#51b23b", "#ff6e00", "#9574D4", "#008751", "#ac51ad", "#044187", "#ff3467"];
                var colorLight = ["#97d2ff", "#ff9298", "#a1f27b", "#ffae50", "#9574D4", "#008751", "#ac51ad", "#044187", "#ff3467"];
            }

            // ** Update data section (Called from the onclick)
            function updateData(data) {
                //svg.selectAll("circle").remove();
                // Scale the range of the data again
                x.domain(d3.extent(data, function(d) { return d.date; }));
                y.domain([0, d3.max(data, function(d) { return d.BPM; })]);

                // Add the valueline path.
                var gcontainer = d3.select("#gcontainer")
                gcontainer.selectAll("circle").remove();
                gcontainer.selectAll("path").remove();
                var path = gcontainer.append("path")
                    .attr("class", "line2")
                    .attr("d", valueline(data));

                var div = d3.select("body").append("div")
                    .attr("class", "tooltip")
                    .style("opacity", 0);
                gcontainer.selectAll("dot")
                    .data(data)
                    .enter()
                    .append("circle")
                    .attr("id", "valuepoints2")
                    .attr("r", 5)
                    .attr("cx", function(d) { return x(d.date); })
                    .attr("cy", function(d) { return y(d.BPM); })
                    .on("mouseover", function(d) {
                        div.transition()
                            .duration(200)
                            .style("opacity", .9);
                        div .html("check" + "<br/>"  + d.BPM)
                            .style("left", (d3.event.pageX) + "px")
                            .style("top", (d3.event.pageY - 28) + "px");
                    })
                    .on("mouseout", function(d) {
                        div.transition()
                            .duration(1000)
                            .style("opacity", 0);
                    });

                // Select the section we want to apply our changes to
                var svg = d3.select("#line").transition();

                // Make the changes
                svg.select(".line")   // change the line
                    .duration(750)
                    .attr("d", valueline(data));
                svg.select(".x.axis") // change the x axis
                    .duration(750)
                    .call(xAxis);
                svg.select(".y.axis") // change the y axis
                    .duration(750)
                    .call(yAxis);
            }

            function getDataFromUrl(){
                var data = "";
                $http.get("").then(function(response) {

                    data = [{date: 1413154800000, BPM : 93}, {date: 1413158400000, BPM: 90},
                        {date: 1413158800000, BPM : 103}, {date: 1413159800000, BPM: 80}];
                });

                return data;
            }


        }
    };
    return directiveDefinitionObject;
});

function Ctrl($scope, $http) {
    //$scope.myData = [10,20,30,40,60];
}
