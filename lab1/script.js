document.addEventListener('DOMContentLoaded', function() {
   const inputTypeRadios = document.querySelectorAll('input[name="inputType"]');
   const showButton = document.getElementById('showButton');
   const diagonalsInput = document.getElementById('diagonalsInput');
   const sideAndAngleInput = document.getElementById('sideAndAngleInput');
   const calculateButton = document.getElementById('calculateButton');
   const clearButton = document.getElementById('clearButton');
   const perimeterCheckbox = document.getElementById('perimeterCheckbox');
   const areaCheckbox = document.getElementById('areaCheckbox');
   const heightCheckbox = document.getElementById('heightCheckbox');
   const perimeterResult = document.getElementById('perimeterResult');
   const areaResult = document.getElementById('areaResult');
   const heightResult = document.getElementById('heightResult');

   showButton.addEventListener('click', function() {
       const selectedInputType = document.querySelector('input[name="inputType"]:checked').value;
       if (selectedInputType === 'diagonals') {
           diagonalsInput.style.display = 'block';
           sideAndAngleInput.style.display = 'none';
       } else {
           diagonalsInput.style.display = 'none';
           sideAndAngleInput.style.display = 'block';
       }
   });

   calculateButton.addEventListener('click', function() {
       const selectedInputType = document.querySelector('input[name="inputType"]:checked').value;
       let d1, d2, side, angle;

       if (selectedInputType === 'diagonals') {
           d1 = parseFloat(document.getElementById('d1').value);
           d2 = parseFloat(document.getElementById('d2').value);
           if (isNaN(d1) || isNaN(d2) || d1 <= 0 || d2 <= 0) {
               showError('Введите корректные значения диагоналей.');
               return;
           }
       } else {
           side = parseFloat(document.getElementById('side').value);
           angle = parseFloat(document.getElementById('angle').value);
           if (isNaN(side) || isNaN(angle) || side <= 0 || angle <= 0 || angle >= 180) {
               showError('Введите корректные значения стороны и угла.');
               return;
           }
       }

       let perimeter, area, height;

       if (selectedInputType === 'diagonals') {
           perimeter = 2 * Math.sqrt(d1 * d1 + d2 * d2);
           area = (d1 * d2) / 2;
           height = area / (Math.sqrt(d1 * d1 + d2 * d2) / 2);
       } else {
           perimeter = 4 * side;
           area = side * side * Math.sin(angle * Math.PI / 180);
           height = area / side;
       }

       if (perimeterCheckbox.checked) {
           perimeterResult.textContent = `Периметр: ${perimeter.toFixed(2)}`;
       } else {
           perimeterResult.textContent = '';
       }

       if (areaCheckbox.checked) {
           areaResult.textContent = `Площадь: ${area.toFixed(2)}`;
       } else {
           areaResult.textContent = '';
       }

       if (heightCheckbox.checked) {
           heightResult.textContent = `Высота: ${height.toFixed(2)}`;
       } else {
           heightResult.textContent = '';
       }

       const errorElement = document.getElementById('errorContainer');
       errorElement.innerText = '';
   });

   clearButton.addEventListener('click', function() {
       document.getElementById('d1').value = '';
       document.getElementById('d2').value = '';
       document.getElementById('side').value = '';
       document.getElementById('angle').value = '';
       perimeterResult.textContent = '';
       areaResult.textContent = '';
       heightResult.textContent = '';

       const errorElement = document.getElementById('errorContainer');
       errorElement.innerText = "";
   });

   function showError(message) {
       const errorElement = document.getElementById('errorContainer');
       errorElement.innerText = message;

       perimeterResult.textContent = '';
       areaResult.textContent = '';
       heightResult.textContent = '';
   }
});