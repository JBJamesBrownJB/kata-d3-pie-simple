function renderViz() {
    var colorRamp = d3.scaleOrdinal().domain([0, 1, 2, 3, 4]).range(d3.schemeTableau10)
    var rand = d3.randomUniform(5, 20)
    var data = d3.range(5).map(i => rand())

    var pie = d3.pie()
    var myPie = pie(data)

    var arcGen = d3.arc().innerRadius(0).outerRadius(100)

    var chart = d3.select("svg")
        .append("g")
        .attr("id", "chart")
        .attr("transform", "translate(250,250)")

    chart.selectAll(".slice")
        .data(myPie)
        .enter()
        .append("path").attr("class", "slice").attr("id", (d, i) => "slice" + i)
        .attr("d", d => arcGen(d))
        .style("fill", (d, i) => colorRamp(i))
        .on("click", (d, i) => takeSlice("slice" + i))
}