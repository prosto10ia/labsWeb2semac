let createSortArr = (data) => {
   let sortArr = [];
   
   let sortSelects = data.getElementsByTagName('select');
   
   for (let i = 0; i < sortSelects.length; i++) {   
      // получаем номер выбранной опции
       let keySort = sortSelects[i].value;
       // в случае, если выбрана опция Нет, заканчиваем формировать массив
       if (keySort == 0) {
           break;
       }
       // получаем номер значение флажка для порядка сортировки
       // имя флажка сформировано как имя поля SELECT и слова Desc
       let desc = document.getElementById(sortSelects[i].id + 'Desc').checked;
       sortArr.push(
         {column: keySort - 1, 
          order: desc}
       ); 
   }
   return sortArr; 
};



let sortTable = (idTable, data, fDir, sDir) => {
    
   // формируем управляющий массив для сортировки
   let sortArr = createSortArr(data);
   
   // сортировать таблицу не нужно, во всех полях выбрана опция Нет
   if (sortArr.length === 0) {
       return false;
   }
   //находим нужную таблицу
   let table = document.getElementById(idTable);

   // преобразуем строки таблицы в массив 
   let rowData = Array.from(table.rows);
   
   // удаляем элемент с заголовками таблицы
   rowData.shift();
   
   //сортируем данные по возрастанию по всем уровням сортировки
   // используется массив sortArr
   rowData.sort((first, second) => {
      for (let i = 0; i < sortArr.length; i++) {
          let key = sortArr[i].column;
          let desc = sortArr[i].order;
  
          let a = first.cells[key].innerHTML;
          let b = second.cells[key].innerHTML;
  
          if (a > b) return desc ? -1 : 1;
          if (a < b) return desc ? 1 : -1;
      }
      return 0;
  });
  
   
   // обновить таблицу на страницу
   // очищаем таблицу кроме заголовка
   // Сохраняем первую строку таблицы (заголовки)
let header = table.rows[0]; 

// Очищаем таблицу, удаляя все строки, кроме заголовка
table.innerHTML = ''; 

// Вставляем обратно заголовки
table.appendChild(header); 

// Добавляем отсортированные строки
rowData.forEach(row => table.appendChild(row));


}


document.addEventListener("DOMContentLoaded", function() {
   const buttonSort = document.getElementById('buttonSort');
   const form = document.getElementById('sort');
   const reset = document.getElementById('buttonReset');


   buttonSort.addEventListener('click', (event) => {
      const firstDir = document.getElementById('fieldsFirstDesc').checked;
      const secondDir = document.getElementById('fieldsSecondDesc').checked;
      sortTable('list', form, firstDir, secondDir);
   });

   reset.addEventListener('click', (event) => {
      resetSort();
   })
});


let resetSort = () => {
   const form = document.getElementById('sort');
   const selects = form.getElementsByTagName('select');

   for (let i = 0; i < selects.length; i++) {
      selects[i].value = "0"; // сброс в "Нет"
      selects[i].disabled = i !== 0; // только первый активен

      const checkbox = document.getElementById(selects[i].id + 'Desc');
      if (checkbox) checkbox.checked = false;
   }

   const formFilt = document.getElementById('filter');
   filterTable(buildings, 'list', formFilt);
}


