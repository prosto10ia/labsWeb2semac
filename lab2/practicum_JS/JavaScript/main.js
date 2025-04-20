document.addEventListener("DOMContentLoaded", function() {
   createTable(buildings, 'list');
   setSortSelects(buildings[0], document.getElementById('sort'));

   document.querySelector('#fieldsFirst').addEventListener('change', function() {
      changeNextSelect('fieldsSecond', 'fieldsFirst');
   });

   })


// формирование полей элемента списка с заданным текстом и значением

let createOption = (str, val) => {
   let item = document.createElement('option');
   item.text = str;
   item.value = val;
   return item;
}

// формирование поля со списком 
// параметры – массив со значениями элементов списка и элемент select

let setSortSelect = (arr, sortSelect) => {
   
   // создаем OPTION Нет и добавляем ее в SELECT
   sortSelect.append(createOption('Нет', 0));
   
   // перебираем все ключи переданного элемента массива данных
   for (let i in arr) {
      // создаем OPTION из очередного ключа и добавляем в SELECT
      // значение атрибута VAL увеличиваем на 1, так как значение 0 имеет опция Нет
       sortSelect.append(createOption(arr[i], Number(i) + 1));
   }
}

//  формируем поля со списком для многоуровневой сортировки
let setSortSelects = (data, dataForm) => { 

   // выделяем ключи словаря в массив
   let head = Object.keys(data);

   // находим все SELECT в форме
   let allSelect = dataForm.getElementsByTagName('select');
   
   for(let j = 0; j < allSelect.length; j++) {
       //формируем очередной SELECT
       setSortSelect(head, allSelect[j]);
       //САМОСТОЯТЕЛЬНО все SELECT, кроме первого, сделать неизменяемым
       if (j !== 0) {
         allSelect[j].disabled = true;
     }
   }
}



// настраиваем поле для следующего уровня сортировки
let changeNextSelect = (nextSelectId, select) => {
    let nextSelect = document.getElementById(nextSelectId);
    let curSelect = document.getElementById(select);

    nextSelect.disabled = false;
    
    // в следующем SELECT выводим те же option, что и в текущем
    nextSelect.innerHTML = curSelect.innerHTML;
    
    // удаляем в следующем SELECT уже выбранную в текущем опцию
    // если это не первая опция - отсутствие сортировки
    if (curSelect.value != 0) {
       nextSelect.remove(curSelect.value);
    } else {
        nextSelect.disabled = true;
    }
}