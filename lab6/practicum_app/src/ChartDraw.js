import * as d3 from 'd3';
import { useEffect, useMemo, useRef } from 'react';

const ChartDraw = ({ data, oy, chartType }) => {
  const svgRef = useRef(null);
  const margin = { top:20, right:30, bottom:90, left:40 };
  const width = 800, height = 400;
  const boundsW = width - margin.left - margin.right;
  const boundsH = height - margin.top - margin.bottom;

  const allY = data.flatMap(d => {
    const a = [];
    if (oy[0]) a.push(d.values[0]);
    if (oy[1]) a.push(d.values[1]);
    return a;
  });
  const [minY, maxY] = d3.extent(allY);

  const scaleX = useMemo(() => d3.scaleBand()
    .domain(data.map(d => d.labelX))
    .range([0, boundsW]).padding(0.2), [data]);
  const scaleY = useMemo(() => d3.scaleLinear()
    .domain([minY*0.85, maxY*1.1])
    .range([boundsH, 0]), [minY, maxY]);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    // draw axes
    svg.append('g')
      .attr('transform',`translate(${margin.left},${height - margin.bottom})`)
      .call(d3.axisBottom(scaleX)).selectAll('text')
      .attr('transform','rotate(-30)').style('text-anchor','end');
    svg.append('g')
      .attr('transform',`translate(${margin.left},${margin.top})`)
      .call(d3.axisLeft(scaleY));

    // legend
    const legend = svg.append('g').attr('transform',`translate(${width - margin.right + 10},${margin.top})`);
    if (oy[0]) {
      legend.append('rect').attr('width',18).attr('height',18).attr('fill','red');
      legend.append('text').attr('x',24).attr('y',9).attr('dy','.35em').text('Макс');
    }
    if (oy[1]) {
      legend.append('rect').attr('width',18).attr('height',18).attr('fill','blue').attr('y',oy[0]?25:0);
      legend.append('text').attr('x',24).attr('y',oy[0]?34:9).attr('dy','.35em').text('Мин');
    }

    // draw data
    if (chartType === 'scatter') {
      data.forEach(d => {
        const x = scaleX(d.labelX) + scaleX.bandwidth()/2;
        if (oy[0]) svg.append('circle')
          .attr('cx',x).attr('cy',scaleY(d.values[0]))
          .attr('r',5).attr('transform',`translate(${margin.left},${margin.top})`).style('fill','red');
        if (oy[1]) svg.append('circle')
          .attr('cx',x).attr('cy',scaleY(d.values[1]))
          .attr('r',5).attr('transform',`translate(${margin.left},${margin.top})`).style('fill','blue');
      });
    } else {
      data.forEach(d => {
        const x0 = scaleX(d.labelX);
        const bw = scaleX.bandwidth() / (oy[0]&&oy[1]?2:1);
        if (oy[0]) svg.append('rect')
          .attr('x',x0).attr('y',scaleY(d.values[0]))
          .attr('width',bw).attr('height',boundsH-scaleY(d.values[0]))
          .attr('transform',`translate(${margin.left},${margin.top})`).attr('fill','red');
        if (oy[1]) svg.append('rect')
          .attr('x',x0 + (oy[0]?bw:0)).attr('y',scaleY(d.values[1]))
          .attr('width',bw).attr('height',boundsH-scaleY(d.values[1]))
          .attr('transform',`translate(${margin.left},${margin.top})`).attr('fill','blue');
      });
    }
  }, [data, oy, chartType]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default ChartDraw;
