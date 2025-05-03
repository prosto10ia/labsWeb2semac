document.addEventListener("DOMContentLoaded", function() {
   showTable('build', buildings);
});

document.getElementById('buildButton').addEventListener('click', function() {
   drawGraph(buildings, document.querySelector('input[name="OX"]:checked').value)
});


document.getElementById('showHideButton').addEventListener('click', function() {
   if (this.value == "Скрыть таблицу") {
      d3.select('#build').attr('class', 'hidden');
      this.value = "Показать таблицу";
   } else {
      d3.select('#build').attr('class', ' ');
      this.value = "Скрыть таблицу";
   }
});