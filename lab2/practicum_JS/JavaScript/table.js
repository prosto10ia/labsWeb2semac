//выводим таблицу на страницу
let createTable = (data, idTable) => {
	// находим таблицу
	let table = document.getElementById(idTable);
	
	// формируем заголовочную строку из ключей нулевого элемента массива
	let tr = document.createElement('tr');

	for(key in data[0]) {
		let th = document.createElement('th');
		th.innerHTML = key;
		tr.append(th);
	}

	table.append(tr);	
	
	// самостоятельно сформировать строки таблицы на основе массива data
	data.forEach((item) => {
      let tr = document.createElement('tr'); // создать новую строку таблицы tr
      Object.entries(item).forEach(([key, value]) => {
         let td = document.createElement('td'); // создать элемент td
         td.innerHTML = value; // занести в него соответствующее значение из массива 
         tr.append(td); // добавить элемент td к строке
      });
      table.append(tr);	// строку добавить в таблицу
	});	
}

let clearTable = (idTable) => {
   const rows = document.getElementById(idTable).querySelectorAll('tr');
   rows.forEach(row => row.remove());
  }

