import { useState } from 'react';
/*
   компонент, для фильтрации таблицы
   пропсы:
      fullData - полные данные, по которым формировалась таблица при загрузке страницы
      data - данные для фильтрации
	  filtering - функция обновления данных для фильтрации
*/

const Filter = (props) => {

    const [minYear, setMinYear] = useState('');
    const [maxYear, setMaxYear] = useState('');
    const [minHeight, setMinHeight] = useState('');
    const [maxHeight, setMaxHeight] = useState('');

    const handleSubmit= (event) => {        
        event.preventDefault();		

        const formData = new FormData(event.target);
		// создаем словарь со значениями полей формы
		const filterField = {
			"Название": formData.get("structure").toLowerCase().trim(),
            "Тип": formData.get("type").toLowerCase().trim(),
            "Страна": formData.get("country").toLowerCase().trim(),
            "Город": formData.get("city").toLowerCase().trim(),
            "Год": [minYear ? parseInt(minYear) : -Infinity, maxYear ? parseInt(maxYear) : Infinity],
            "Высота": [minHeight ? parseInt(minHeight) : -Infinity, maxHeight ? parseInt(maxHeight) : Infinity]
        };
			
        //фильтруем данные по значениям всех полей формы
        let arr = props.fullData;
        for(const key in filterField) {
            if (Array.isArray(filterField[key])) {
                // Фильтрация по диапазону для числовых полей
                const [min, max] = filterField[key];
                arr = arr.filter(item => {
                    const value = parseInt(item[key]);
                    return value >= min && value <= max;
                });
            } else {
                // Фильтрация по текстовым полям
                if (filterField[key]) {
                    arr = arr.filter(item => 
                        item[key].toLowerCase().includes(filterField[key]));
                }
            }
        } 
                
        //передаем родительскому компоненту новое состояние - отфильтрованный массив
        props.filtering(arr);
	}

    const handleReset = () => {
        setMinYear('');
        setMaxYear('');
        setMinHeight('');
        setMaxHeight('');
        props.filtering(props.fullData);
        // Сброс формы
        document.getElementById("filter-form").reset();
    }

    return (
        <form id="filter-form" onSubmit={handleSubmit} onReset={handleReset}>
            <fieldset className="filter">
                <legend>Фильтр</legend>
                <div className="filter-grid">
                    <div>
                        <label>Название:</label>
                        <input name="structure" type="text" placeholder="Название"/>
                    </div>
                    <div>
                        <label>Тип:</label>
                        <input name="type" type="text" placeholder="Тип"/>
                    </div>
                    <div>
                        <label>Страна:</label>
                        <input name="country" type="text" placeholder="Страна"/>
                    </div>
                    <div>
                        <label>Город:</label>
                        <input name="city" type="text" placeholder="Город"/>
                    </div>
                    <div>
                        <label>Год:</label>
                        <div>
                            <input 
                                type="number" 
                                placeholder="От" 
                                value={minYear}
                                onChange={(e) => setMinYear(e.target.value)}
                            />
                            <input 
                                type="number" 
                                placeholder="До" 
                                value={maxYear}
                                onChange={(e) => setMaxYear(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label>Высота:</label>
                        <div>
                            <input 
                                type="number" 
                                placeholder="От" 
                                value={minHeight}
                                onChange={(e) => setMinHeight(e.target.value)}
                            />
                            <input 
                                type="number" 
                                placeholder="До" 
                                value={maxHeight}
                                onChange={(e) => setMaxHeight(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <button type="submit">Фильтровать</button>
                    <button type="reset">Очистить фильтр</button>
                </div>
            </fieldset>
        </form>
    )
}

export default Filter;