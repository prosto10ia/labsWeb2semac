// filter.js — визуализация по отфильтрованной таблице (используя D3.js)

// Объект для хранения параметров отрисовки
const attr_area = {
   marginX: 50,
   marginY: 50,
   width: 3200,
   height: 1600
};

// Получить данные из видимых строк таблицы
function getFilteredDataFromTable() {
   const rows = Array.from(document.querySelectorAll('#Table tbody tr'))
       .filter(row => row.style.display !== 'none');

   return rows.map(row => {
       const cells = row.cells;
       return {
           date: cells[1].textContent.trim(),
           training: cells[2].textContent.trim(),
           time: +cells[3].textContent,
           calories: +cells[4].textContent,
           pulse: +cells[5].textContent
       };
   });
}

// Агрегация данных по дате с выбором min/max значений по yParam
function aggregateDataByDate(data, yParam, mode) {
   const grouped = d3.group(data, d => d.date);
   const result = [];

   for (const [date, entries] of grouped) {
       let value;
       if (mode === 'min') {
           value = d3.min(entries, d => d[yParam]);
       } else {
           value = d3.max(entries, d => d[yParam]);
       }
       result.push({ date, [yParam]: value, mode });
   }
   return result;
}

// Построить график
function drawGraph(data, xParam, yParam, type) {
   const svg = d3.select("svg");
   svg.selectAll("*").remove();

   attr_area.width = parseFloat(svg.style("width")) || 1600;
   attr_area.height = parseFloat(svg.style("height")) || 800;

   const scaleX = d3.scaleBand()
       .domain([...new Set(data.map(d => d[xParam]))])
       .range([0, attr_area.width - 2 * attr_area.marginX])
       .padding(0.3);

   const maxY = d3.max(data, d => d[yParam]);

   const scaleY = d3.scaleLinear()
       .domain([0, maxY * 1.1])
       .range([attr_area.height - 2 * attr_area.marginY, 0]);

   const gX = svg.append("g")
       .attr("transform", `translate(${attr_area.marginX}, ${attr_area.height - attr_area.marginY})`)
       .call(d3.axisBottom(scaleX))
       .selectAll("text")
       .style("text-anchor", "end")
       .attr("dx", "-.8em")
       .attr("dy", ".15em")
       .attr("transform", "rotate(-45)");

   svg.append("g")
       .attr("transform", `translate(${attr_area.marginX}, ${attr_area.marginY})`)
       .call(d3.axisLeft(scaleY));

   const colors = {
       min: 'blue',
       max: 'red'
   };

   const modes = [...new Set(data.map(d => d.mode))];

   modes.forEach(mode => {
       const subset = data.filter(d => d.mode === mode);

       if (type === 'bar') {
           svg.selectAll(`.bar-${mode}`)
               .data(subset)
               .enter()
               .append("rect")
               .attr("class", `bar bar-${mode}`)
               .attr("x", d => scaleX(d[xParam]))
               .attr("y", d => scaleY(d[yParam]))
               .attr("width", scaleX.bandwidth() / modes.length)
               .attr("height", d => scaleY(0) - scaleY(d[yParam]))
               .attr("transform", d => `translate(${attr_area.marginX + (mode === 'min' ? 0 : scaleX.bandwidth() / 2)}, ${attr_area.marginY})`)
               .attr("fill", colors[mode]);
       } else if (type === 'dot') {
           svg.selectAll(`.dot-${mode}`)
               .data(subset)
               .enter()
               .append("circle")
               .attr("class", `dot dot-${mode}`)
               .attr("r", 4)
               .attr("cx", d => scaleX(d[xParam]) + scaleX.bandwidth() / 2)
               .attr("cy", d => scaleY(d[yParam]))
               .attr("transform", `translate(${attr_area.marginX}, ${attr_area.marginY})`)
               .attr("fill", colors[mode]);
       } else if (type === 'line') {
           const line = d3.line()
               .x(d => scaleX(d[xParam]) + scaleX.bandwidth() / 2)
               .y(d => scaleY(d[yParam]));

           svg.append("path")
               .datum(subset)
               .attr("fill", "none")
               .attr("stroke", colors[mode])
               .attr("stroke-width", 2)
               .attr("d", line)
               .attr("transform", `translate(${attr_area.marginX}, ${attr_area.marginY})`);
       }
   });
}

function buildChart() {
   const rawData = getFilteredDataFromTable();
   const xParam = 'date';
   const yParam = document.querySelector('input[name="OX"]:checked').value;
   const chartType = document.getElementById('selectDiogram').value;

   const modes = Array.from(document.querySelectorAll('input[name="dat"]:checked')).map(cb => cb.value);

   let finalData = [];
   for (const mode of modes) {
       finalData = finalData.concat(aggregateDataByDate(rawData, yParam, mode));
   }

   drawGraph(finalData, xParam, yParam, chartType);
}

// Пример подключения к кнопке или действию
document.getElementById("filterButton").addEventListener("click", buildChart);
// buildChart(); // Можно вызывать сразу после фильтрации