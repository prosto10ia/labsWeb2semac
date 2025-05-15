document.addEventListener("DOMContentLoaded", function() {
   const width = 600;
   const height = 600;

   const svg = d3.select("svg")
      .attr("width", width)
      .attr("height", height);

  });


  let runAnimation = (dataForm) => {
   //d3.select("svg").selectAll('*').remove();
   const svg = d3.select("svg");
   let pict = drawSmile(svg);
   let path = drawPath();


   const easeSel = {
      linear:  d3.easeLinear,
      elastic: d3.easeElastic,
      bounce:  d3.easeBounce,
   }[document.getElementById('selectAnimation').value] ?? d3.easeLinear;

   let translate = translateAlong(path.node());

   pict.transition()
      .ease(easeSel)
      .duration(+dataForm.time.value)
      .attrTween('transform', translateAlong(path.node()));
};


function createPath() {
   const svg = d3.select("svg")
   const width = svg.attr("width")
   const height = svg.attr("height")
   let data = [];
   const padding = 100;

   let posX = 500;
   let posY = 100;
   const h = 5;

   while (posY < 500) {
   data.push( {x: posX, y: posY});
   posY += 3*h;
   posX -= h;
   }

   while (posY > 100) {
   data.push( {x: posX, y: posY});
   posY -= 3*h;
   posX -= h;
   }
   return data
  }
let drawPath =() => {

   const dataPoints = createPath();
   const line = d3.line()
      .x((d) => d.x)
      .y((d) => d.y);

   const path = d3.select('svg').append('path')
      .attr('d', line(dataPoints))
      .attr('stroke', 'none')
      .attr('fill', 'none');
  
   return path;
  }

function translateAlong(path) {
      const dataForm = document.getElementById("setting");
      const length = path.getTotalLength();
      return function() {
         return function(t) {
            const {x, y} = path.getPointAtLength(t * length);
            return `translate(${x},${y}) rotate(${180 + +dataForm.r.value + (+dataForm.r_finish.value - +dataForm.r.value) * t}) scale(${+dataForm.sx.value + (+dataForm.sx_finish.value - +dataForm.sx.value) * t}, ${+dataForm.sy.value + (+dataForm.sy_finish.value - +dataForm.sy.value) * t})`;
         }
      }
  }






document.getElementById('startButton').addEventListener('click', () => runAnimation(document.getElementById('setting')));
document.getElementById('cleanButton').addEventListener('click', function() {
   d3.select("svg").selectAll('*').remove();
});