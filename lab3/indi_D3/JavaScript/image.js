function drawSmile(svg) {
   let flag = svg.append("g")
       .attr("transform", "scale(1.5)")
       .style("stroke", "black")
       .style("stroke-width", 2);

   // Череп
   flag.append("circle")
       .attr("cx", 0)
       .attr("cy", 0)
       .attr("r", 30)
       .style("fill", "white");

   // Глаза
   flag.append("ellipse")
       .attr("cx", -10)
       .attr("cy", 10)
       .attr("rx", 5)
       .attr("ry", 8)
       .style("fill", "black");

   flag.append("ellipse")
       .attr("cx", 10)
       .attr("cy", 10)
       .attr("rx", 5)
       .attr("ry", 8)
       .style("fill", "black");

   // Нос 
   flag.append("line")
       .attr("x1", 0)
       .attr("y1", -3)
       .attr("x2", 0)
       .attr("y2", 8)
       .style("stroke", "black");

   // Рот 
   flag.append("polyline")
    .attr("points", "20,-10 10,-15 -10,-15 -20,-10")
    .style("fill", "none")
    .style("stroke", "black")
    .style("stroke-width", 2);

   // Кости — перекрестные
   flag.append("line")
       .attr("x1", -40)
       .attr("y1", -60)
       .attr("x2", 40)
       .attr("y2", -10);

   flag.append("line")
       .attr("x1", -40)
       .attr("y1", -10)
       .attr("x2", 40)
       .attr("y2", -60);

   // вверх шляпы
   flag.append("ellipse")
      .attr("cx", 0)
      .attr("cy", 40)
      .attr("rx", 20)
      .attr("ry", 20)
      .style("fill", "tan")
      .style("stroke", "black");
   // низ шляпы
   flag.append("ellipse")
       .attr("cx", 0)
       .attr("cy", 30)
       .attr("rx", 35)
       .attr("ry", 10)
       .style("fill", "tan")
       .style("stroke", "black");

   // Лента
   flag.append("rect")
       .attr("x", -20)
       .attr("y", 35)
       .attr("width", 40)
       .attr("height", 5)
       .style("fill", "red")
       .style("stroke", "black");

   return flag;
}
