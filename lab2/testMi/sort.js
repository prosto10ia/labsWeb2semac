function sortTable() {
   const table = document.getElementById('Table');
   const tbody = table.querySelector('tbody');
   const rows = Array.from(tbody.querySelectorAll('tr'));


   const fsel = document.getElementById('first_level');
   const ssel = document.getElementById('second_level');
   const tsel = document.getElementById('third_level');

   const firstLevel = parseInt(fsel.value);
   const firstDesc = document.getElementById('firstt_desc').checked;
   const secondLevel = parseInt(ssel.value);
   const secondDesc = document.getElementById('second_desc').checked;
   const thirdLevel = parseInt(tsel.value);
   const thirdDesc = document.getElementById('third_desc').checked;



   const sortLevels = [
      { level: firstLevel, desc: firstDesc },
      { level: secondLevel, desc: secondDesc },
      { level: thirdLevel, desc: thirdDesc }
   ].filter(sort => sort.level !== -1);

   rows.sort((a, b) => {
      for (const sort of sortLevels) {
         const cellA = a.cells[sort.level];
         const cellB = b.cells[sort.level];
         const type = table.rows[0].cells[sort.level].getAttribute('data-type');

         let valueA = type === 'number' ? parseFloat(cellA.textContent) : cellA.textContent.trim();
         let valueB = type === 'number' ? parseFloat(cellB.textContent) : cellB.textContent.trim();

         if (valueA < valueB) return sort.desc ? 1 : -1;
         if (valueA > valueB) return sort.desc ? -1 : 1;
      }
      return 0;
   });

   rows.forEach(row => tbody.appendChild(row));
}

function filterTable() {
   const rows = Array.from(document.querySelectorAll('#Table tbody tr'));

   const name = document.getElementById('name').value.toLowerCase();
   const likesFrom = parseFloat(document.getElementById('likes_from').value) || 0;
   const likesTo = parseFloat(document.getElementById('likes_to').value) || Infinity;
   const repostsFrom = parseFloat(document.getElementById('reposts_from').value) || 0;
   const repostsTo = parseFloat(document.getElementById('reposts_to').value) || Infinity;
   const ratingFrom = parseFloat(document.getElementById('rating_from').value) || 0;
   const ratingTo = parseFloat(document.getElementById('rating_to').value) || Infinity;
   const viewsFrom = parseFloat(document.getElementById('views_from').value) || 0;
   const viewsTo = parseFloat(document.getElementById('views_to').value) || Infinity;

   rows.forEach(row => {
      const cells = row.cells;
      const exercise = cells[2].textContent.toLowerCase();
      const time = parseFloat(cells[3].textContent);
      const calories = parseFloat(cells[4].textContent);
      const pulse = parseFloat(cells[5].textContent);

      const show = exercise.includes(name)
         && time >= likesFrom && time <= likesTo
         && calories >= repostsFrom && calories <= repostsTo
         && ratingFrom <= 10 && ratingTo >= 0
         && pulse >= viewsFrom && pulse <= viewsTo;

      row.style.display = show ? '' : 'none';
   });
}


document.addEventListener("DOMContentLoaded", function () {

   const fsel = document.getElementById('first_level');
   const ssel = document.getElementById('second_level');
   const tsel = document.getElementById('third_level');


   fsel.addEventListener('change', function () {

      if (fsel.value != -1) {
         ssel.disabled = false;

         let chs = [...fsel.children];

         ssel.innerHTML = "";

         chs.forEach(item => {
            if (item.value != fsel.value) {
               ssel.innerHTML += item.outerHTML;
            }})

      }
      else {
         ssel.disabled = true;
         ssel.value = -1;
         tsel.disabled = true;
         tsel.value = -1;
      }
   })

   ssel.addEventListener('change', function () {
      if (ssel.value != -1) {
         tsel.disabled = false;

         let chs = [...ssel.children];

         tsel.innerHTML = "";

         chs.forEach(item => {
            if (item.value != ssel.value) {
               tsel.innerHTML += item.outerHTML;
            }
         })
      }
      else {
         tsel.disabled = true;
         tsel.value = -1;
      }
   })


   document.getElementById('sortForm').addEventListener('submit', function (event) {
      event.preventDefault();
      sortTable();
   });

   document.getElementById('searchButt').addEventListener('click', function () {
      filterTable();
   });

   document.getElementById('resetFilter').addEventListener('click', function () {
      document.getElementById('filterForm').reset();
      filterTable();
   });
});



// Проверочное

let Expression = (...strs) => {
   return strs.flatMap(str => str.split(' '))
   .filter(item => !isNaN(parseFloat(item)) && isFinite(item))
   .map(Number)
   .filter((num, index, arr) => arr.indexOf(num) === index)
   .reduce((product, num) => product * num, 1);
}


alert(Expression("  52 --52 ",
               ));