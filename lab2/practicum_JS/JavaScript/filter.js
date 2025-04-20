// устанавливаем соответствие между полями формы и столбцами таблицы
let correspond = {
   "Название": "structure",
   "Тип": "category",
   "Страна": "country",
   "Город": "city",
   "Год": ["yearFrom", "yearTo"],
   "Высота": ["heightFrom", "heightTo"]
}

let dataFilter = (dataForm) => {
    
   let dictFilter = {};

   // перебираем все элементы формы с фильтрами 
   for(let j = 0; j < dataForm.elements.length; j++) {

       // выделяем очередной элемент формы
       let item = dataForm.elements[j];
       
       // получаем значение элемента
       let valInput = item.value;

       // если поле типа text - приводим его значение к нижнему регистру
       if (item.type == "text") {
           valInput = valInput.toLowerCase();
       } else if (item.type == "number") {
         if (valInput !== '') {
            valInput = Number(valInput);
            if (isNaN(valInput)) valInput = 0;
         } else {
            if (item.id.includes("From")) valInput = -Infinity;
            else if (item.id.includes('To')) valInput = Infinity;
         }
       }
       /* САМОСТОЯТЕЛЬНО обработать значения числовых полей:
       - если в поле занесено значение - преобразовать valInput к числу;
       - если поле пусто и его id включает From  - занести в valInput 
          -бесконечность
       - если поле пусто и его id включает To  - занести в valInput 
          +бесконечность
       */

        // формируем очередной элемент ассоциативного массива
       dictFilter[item.id] = valInput;
   }       
   return dictFilter;
}

// фильтрация таблицы
let filterTable = (data, idTable, dataForm) =>{
   // получаем данные из полей формы
   let datafilter = dataFilter(dataForm);
   
   // выбираем данные соответствующие фильтру и формируем таблицу из них
   let tableFilter = data.filter(item => {

       /* в этой переменной будут "накапливаться" результаты сравнения данных
          с параметрами фильтра */
         console.log(datafilter);
       let result = true;
       
       // строка соответствует фильтру, если сравнение всех значения из input 
       // со значением ячейки очередной строки - истина
       for(let key in item) {
           
           let val = item[key];
           
           // текстовые поля проверяем на вхождение
           if (typeof val == 'string') {
               val = item[key].toLowerCase() 
               result &&= val.indexOf(datafilter[correspond[key]]) !== -1 
           } 
           // САМОСТОЯТЕЛЬНО проверить числовые поля на принадлежность интервалу
           else if (typeof val == 'number') {
              let filterKey = correspond[key];
            	let [fromKey, toKey] = filterKey;
            	let fromValue = datafilter[fromKey] ?? -Infinity;
            	let toValue = datafilter[toKey] ?? Infinity;
                
            result = result && (val >= fromValue && val <= toValue);
            }
        }
        return result;
   });     
    
    clearTable(idTable);
    createTable(tableFilter, idTable);
}

document.addEventListener("DOMContentLoaded", function() {
   const buttonSearch = document.getElementById('buttonSearch');
   const buttonClear = document.getElementById('buttonClear');
   const form = document.getElementById('filter');
   const idTable = 'list';

   buttonSearch.addEventListener('click', (event) => {
       filterTable(buildings, idTable, form);
			 resetSort();
   });

   buttonClear.addEventListener('click', (event) => {
       form.reset();
			 resetSort();
   });
});