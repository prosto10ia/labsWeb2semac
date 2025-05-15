document.addEventListener("DOMContentLoaded", function() {
   const width = 600;
   const height = 600;

   const svg = d3.select("svg")
      .attr("width", width)
      .attr("height", height);

   let pict = drawSmile(svg);
      pict.attr('transform', `translate(${width / 2}, ${height / 2})`)
      pict.attr("transform", `translate(${width / 2}, ${height / 2}) scale (1.5) rotate(180)`);
  });

  d3.selectAll('.do').attr('class', 'do hidden');
  d3.selectAll('.moveByPath').attr('class', 'moveByPath hidden');


let draw = (dataForm) => {
   const svg = d3.select("svg")
   let pict = drawSmile(svg)
   pict.attr("transform", `translate(${dataForm.cx.value}, ${dataForm.cy.value})  rotate(${dataForm.r.value}) scale (${dataForm.sx.value}, ${dataForm.sy.value})`);
}

let runAnimation = (dataForm) => {
   const svg = d3.select("svg")
   const pict = drawSmile(svg);

   const easeSel = {
      linear:  d3.easeLinear,
      elastic: d3.easeElastic,
      bounce:  d3.easeBounce,
   }[document.getElementById('selectAnimation').value] ?? d3.easeLinear;

   if (!document.getElementById('pathA').checked) {

      pict
         .attr("transform", `translate(${dataForm.cx.value}, ${dataForm.cy.value}) rotate(${dataForm.r.value}) scale (${dataForm.sx.value}, ${dataForm.sy.value})`)
         .transition(svg)
         .duration(6000)
         .ease(easeSel)
         .attr("transform", `translate(${dataForm.cx_finish.value}, ${dataForm.cy_finish.value}) rotate(${dataForm.r_finish.value}) scale (${dataForm.sx_finish.value}, ${dataForm.sy_finish.value})`);
   } else {
      let path = drawPath(document.getElementById('pathAni').selectedIndex);
      pict.transition()
      .ease(d3.easeLinear) // установить в зависимости от настроек
      .duration(6000)
      .ease(easeSel)
      .attrTween('transform', translateAlong(
         path.node(),
         +dataForm.r.value,       +dataForm.r_finish.value,
         [+dataForm.sx.value, +dataForm.sy.value],
         [+dataForm.sx_finish.value, +dataForm.sy_finish.value],
         path.node().getTotalLength()
      ));
      }
}

function createPathG() {
   const svg = d3.select("svg")
   const width = svg.attr("width")
   const height = svg.attr("height")
   let data = [];
   const padding = 100;
   //начальное положение рисунка
   let posX = padding;
   let posY = height - padding;
   const h = 5;
   // координаты y - уменьшаются, x - постоянны
   while (posY > padding) {
   data.push( {x: posX, y: posY});
   posY -= h;
   }
   // координаты y - постоянны, x - увеличиваются
   while (posX < width - padding) {
   data.push( {x: posX, y: posY});
   posX += h;
   }
   return data
  }
  // создаем массив точек, расположенных по кругу
  function createPathCircle() {
   const svg = d3.select("svg")
   const width = svg.attr("width")
   const height = svg.attr("height")
   let data = [];
   // используем параметрическую форму описания круга
   // центр асположен в центре svg-элемента, а радиус равен трети высоты/ширины
   for (let t = 0 ; t <= Math.PI * 2; t += 0.1) {
   data.push(
   {x: width / 2 + width / 3 * Math.sin(t),
   y: height / 2 + height / 3 * Math.cos(t)}
   );
   }
   return data
  }
  // создаем путь и отображаем его в svg-элементе
  let drawPath =(typePath) => {
   // создаем массив точек пути в зависимости от параметра
   const dataPoints = (typePath == 0)? createPathG() : createPathCircle();
   const line = d3.line()
   .x((d) => d.x)
   .y((d) => d.y);
   // создаем путь на основе массива точек
   const path = d3.select('svg').append('path')
   .attr('d', line(dataPoints))
   .attr('stroke', 'black')
   .attr('fill', 'none');
  
   return path;
  }
  function translateAlong(path, r0, r1, s0, s1, length) {
      const rot  = d3.interpolateNumber(r0,  r1);
      const sx   = d3.interpolateNumber(s0[0], s1[0]);
      const sy   = d3.interpolateNumber(s0[1], s1[1]);

      return () => t => {
         const p = path.getPointAtLength(t * length);
         return `translate(${p.x},${p.y}) rotate(${rot(t)}) scale(${sx(t)},${sy(t)})`;
      };
  }


document.getElementById('animation').addEventListener('change', function() {
   const isIt = document.getElementById('animation').checked;
   if (isIt){
      d3.select('#selectAnimation').attr('class', ' ');
      d3.select('#animationButton').attr('class', ' ');
      d3.select('#cleanButton').attr('class', 'hidden');
      d3.select('#drowButton').attr('class', 'hidden');
      d3.selectAll('.do').attr('class', 'do');
      d3.selectAll('.moveByPath').attr('class', 'moveByPath');


   } else {
      d3.select('#selectAnimation').attr('class', 'hidden');
      d3.select('#animationButton').attr('class', 'hidden');
      d3.select('#cleanButton').attr('class', ' ');
      d3.select('#drowButton').attr('class', '');
      d3.selectAll('.do').attr('class', 'do hidden');
      d3.selectAll('.moveByPath').attr('class', 'moveByPath hidden');


   }
});
document.getElementById('pathA').addEventListener('change', function() {
   const isIt = document.getElementById('pathA').checked;
   if (isIt){
      d3.select('#pathAn').attr('class', ' ');
      d3.select('#notPathAn').attr('class', 'hidden');
      //d3.select('#selectAnimation').attr('class', 'hidden');
      //d3.select('#scale').attr('class', 'hidden');
      //d3.select('#rotate').attr('class', 'hidden');

   } else {
      d3.select('#pathAn').attr('class', 'hidden');
      d3.select('#notPathAn').attr('class', ' ');
      //d3.select('#selectAnimation').attr('class', ' ');
      //d3.select('#scale').attr('class', '');
      //d3.select('#rotate').attr('class', '');

   }
});

document.getElementById('animationButton').addEventListener('click', () => runAnimation(document.getElementById('setting')));


document.getElementById('drowButton').addEventListener('click', () => draw(document.getElementById('setting')));
document.getElementById('cleanButton').addEventListener('click', function() {
   d3.select("svg").selectAll('*').remove();
});