function randomHexDigit() {
    var digits = '0123456789abcdef';
    return digits.charAt(Math.floor(Math.random() * 15));
}

function randomColor() {
    return `#${randomHexDigit()}${randomHexDigit()}${randomHexDigit()}${randomHexDigit()}${randomHexDigit()}${randomHexDigit()}`
}

function scatter(circles) {
    circles.transition().duration(1000).style("fill", () => { return randomColor() }).attr("cx", () => { return Math.random() * 200 + 20 });
}

function join(circles) {
    circles.transition().duration(1000).style("fill", "white").attr("cx", 120);
}

var circles = d3.selectAll("circle");
circles.attr("opacity", 0.5);

var colors = [];

var descriptions = d3.selectAll(".description");
var h2s = d3.selectAll("h2");

for (var i = 0; i < descriptions.size(); i++) {
    colors.push(randomColor());
}

descriptions.data(colors);
h2s.data(colors);

descriptions.style("border-color", (d) => { return d; })
h2s.style("color", (d) => { return d; });

var bottom_border = d3.selectAll("#introduction p:last-child");

var scatter_interval = setInterval(() => { scatter(circles) }, 1000);

setInterval(() => { bottom_border.transition().duration(1000).style("border-color", randomColor()); }, 1000);
