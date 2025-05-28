import * as d3 from "d3";
import { useEffect, useMemo, useRef, useState } from "react"; // хуки

const ChartDraw = ({ data, oy, chartType }) => {
  // Получает props:
  // - data: массив данных для отображения
  // - oy: массив из двух boolean, какие метрики отображать (max/min)
  // - chartType: тип графика ('scatter' или 'bar')

  const chartRef = useRef(null);
  const [width, setWidth] = useState(800); // ширина
  const [height, setHeight] = useState(400); // высота

  // получаем фактические размеры
  useEffect(() => {
    const svg = d3.select(chartRef.current);
    setWidth(parseFloat(svg.style("width")) || 800); // реальная ширина
    setHeight(parseFloat(svg.style("height")) || 400); // реальная высота
  }, []);

  const margin = { top: 10, bottom: 90, left: 40, right: 120 }; // отступы
  const boundsWidth = width - margin.left - margin.right; // ширина
  const boundsHeight = height - margin.top - margin.bottom; // высота

  const allYValues = data.flatMap((d) => {
    const values = [];
    if (oy[0]) values.push(d.values[0]); // max высота
    if (oy[1]) values.push(d.values[1]); // min высота
    return values;
  });

  const [min, max] = d3.extent(allYValues); // min/max среди всех значений

  // формируем шкалы для осей
  const scaleX = useMemo(() => {
    return d3
      .scaleBand()
      .domain(data.map((d) => d.labelX))
      .range([0, boundsWidth])
      .padding(0.2);
  }, [data, boundsWidth]);

  const scaleY = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([min * 0.85, max * 1.1])
      .range([boundsHeight, 0]);
  }, [boundsHeight, min, max]);

  useEffect(() => {
    const svg = d3.select(chartRef.current);
    svg.selectAll("*").remove();

    // рисуем оси
    const xAxis = d3.axisBottom(scaleX);
    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${height - margin.bottom})`)
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", "rotate(-30)");

    const yAxis = d3.axisLeft(scaleY);
    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`)
      .call(yAxis);

    // легенда
    const legend = svg.append("g")
      .attr("transform", `translate(${width - margin.right + 20}, ${margin.top + 20})`);

    // если отображаем максимумы
    if (oy[0]) {
      legend.append("rect")
        .attr("width", 18)
        .attr("height", 18)
        .attr("fill", "red");
      legend.append("text")
        .attr("x", 24)
        .attr("y", 9)
        .attr("dy", ".35em")
        .text("Макс. высота");
    }

    if (oy[1]) {
      legend.append("rect")
        .attr("width", 18)
        .attr("height", 18)
        .attr("fill", "blue")
        .attr("y", oy[0] ? 25 : 0);
      legend.append("text")
        .attr("x", 24)
        .attr("y", oy[0] ? 34 : 9)
        .attr("dy", ".35em")
        .text("Мин. высота");
    }

    // точечная диаграмма
    if (chartType === "scatter") {
      data.forEach((d) => {
        const x = scaleX(d.labelX) + scaleX.bandwidth() / 2;
        if (oy[0]) {
          svg
            .append("circle")
            .attr("r", 5)
            .attr("cx", x)
            .attr("cy", scaleY(d.values[0]))
            .attr("transform", `translate(${margin.left}, ${margin.top})`)
            .style("fill", "red");
        }
        if (oy[1]) {
          svg
            .append("circle")
            .attr("r", 5)
            .attr("cx", x)
            .attr("cy", scaleY(d.values[1]))
            .attr("transform", `translate(${margin.left}, ${margin.top})`)
            .style("fill", "blue");
        }
      });
    } else if (chartType === "bar") { // гистограмма
      data.forEach((d) => {
        const x = scaleX(d.labelX);
        const barWidth = scaleX.bandwidth() / (oy[0] && oy[1] ? 2 : 1);

        if (oy[0]) {
          svg
            .append("rect")
            .attr("x", x)
            .attr("y", scaleY(d.values[0]))
            .attr("width", barWidth)
            .attr("height", boundsHeight - scaleY(d.values[0]))
            .attr("transform", `translate(${margin.left}, ${margin.top})`)
            .attr("fill", "red");
        }

        if (oy[1]) {
          svg
            .append("rect")
            .attr("x", x + (oy[0] ? barWidth : 0))
            .attr("y", scaleY(d.values[1]))
            .attr("width", barWidth)
            .attr("height", boundsHeight - scaleY(d.values[1]))
            .attr("transform", `translate(${margin.left}, ${margin.top})`)
            .attr("fill", "blue");
        }
      });
    }
  }, [scaleX, scaleY, data, oy, chartType, width, height]);

  return <svg ref={chartRef} width={800} height={400} />;
};

export default ChartDraw;