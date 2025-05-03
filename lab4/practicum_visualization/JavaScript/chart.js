function createArrGraph(data, key) {
   groupObj = d3.group(data, d => d[key]);
   let arrGraph =[];

   for(let entry of groupObj) {
      let minMax = d3.extent(entry[1].map(d => d['Высота']));
      arrGraph.push({labelX : entry[0], values : minMax});
   }

   return arrGraph;
}

function drawGraph(data, ox) {
   // создаем массив для построения графика
   if (ox == "Год") data = data.sort((a, b) => -+b.Год + +a.Год);
   const arrGraph = createArrGraph(data, ox);

  
   let svg = d3.select("svg")
   svg.selectAll('*').remove();
   // создаем словарь с атрибутами области вывода графика
   attr_area = {
      width: parseFloat(svg.style('width')),
      height: parseFloat(svg.style('height')),
      marginX: 50,
      marginY: 50
   }
  
   // создаем шкалы преобразования и выводим оси
   const [scX, scY] = createAxis(svg, arrGraph, attr_area);
  
   // рисуем график
   const checkboxes = Array.from(document.querySelectorAll('input[name="OY"]:checked'));
   if (checkboxes.length == 2) {
      document.getElementById("selectDiogram").value == 'dots' ? createChartDots(svg, arrGraph, scX, scY, attr_area, 'red') : createChartGast(svg, arrGraph, scX, scY, attr_area, "red");
      document.getElementById("selectDiogram").value == 'dots' ? createChartDots(svg, arrGraph, scX, scY, attr_area, 'blue') : createChartGast(svg, arrGraph, scX, scY, attr_area, "blue");
   } else {
      document.getElementById("selectDiogram").value == 'dots' ? createChartDots(svg, arrGraph, scX, scY, attr_area, document.querySelector('input[name="OY"]:checked').value == 'max' ? "red": 'blue') : createChartGast(svg, arrGraph, scX, scY, attr_area, document.querySelector('input[name="OY"]:checked').value == 'max' ? "red": 'blue');

   }
}

function createAxis(svg, data, attr_area){
   // находим интервал значений, которые нужно отложить по оси OY
   // максимальное и минимальное значение и максимальных высот по каждой стране
   const [min, max] = d3.extent(data.map(d => d.values[1]));
   // функция интерполяции значений на оси
   // по оси ОХ текстовые значения
   let scaleX = d3.scaleBand()
      .domain(data.map(d => d.labelX))
      .range([0, attr_area.width - 2 * attr_area.marginX]);

  
   let scaleY = d3.scaleLinear()
      .domain([min * 0.85, max * 1.1 ])
      .range([attr_area.height - 2 * attr_area.marginY, 0]);
  
   // создание осей
   let axisX = d3.axisBottom(scaleX); // горизонтальная
   let axisY = d3.axisLeft(scaleY); // вертикальная
   // отрисовка осей в SVG-элементе
   svg.append("g")
      .attr("transform", `translate(${attr_area.marginX}, ${attr_area.height - attr_area.marginY})`)
      .call(axisX)
      .selectAll("text") // подписи на оси - наклонные
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", d => "rotate(-45)");

   svg.append("g")
      .attr("transform", `translate(${attr_area.marginX}, ${attr_area.marginY})`)
      .call(axisY);

 return [scaleX, scaleY]
}

function createChartGast(svg, data, scaleX, scaleY, attr_area, color) {
   svg.selectAll(".dot")
      .data(data)
      .enter()
      .append("line")
      .attr("x1", d => scaleX(d.labelX) + scaleX.bandwidth() / 2 + (color == 'red' ? +1: -1))
      .attr("x2", d => scaleX(d.labelX) + scaleX.bandwidth() / 2 + (color == 'red' ? +1: -1))
      .attr("y1", d => scaleY(color == 'red' ? d.values[1]: d.values[0]))
      .attr("y2", scaleY(300))
      .attr("transform", `translate(${attr_area.marginX}, ${attr_area.marginY})`)
      .attr("stroke-width", 3)
      .attr("stroke", color);
 
}

function createChartDots(svg, data, scaleX, scaleY, attr_area, color) {
   const r = 4;
   svg.selectAll(".dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("r", r)
      .attr("cx", d => scaleX(d.labelX) + scaleX.bandwidth() / 2)
      .attr("cy", d => scaleY(color == 'red' ? d.values[1]: d.values[0]))
      .attr("transform", `translate(${attr_area.marginX}, ${attr_area.marginY})`)
      .style("fill", color)
}

