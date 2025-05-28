/*
      fullData - исходные данные
      filtering - функция обновления данных таблицы
      resetPage - функция сброса текущей страницы к первой
*/
const Filter = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        // формируем критерии
        const filterField = {
            "Название": form["structure"].value.toLowerCase(),
            "Тип": form["type"].value.toLowerCase(),
            "Страна": form["country"].value.toLowerCase(),
            "Город": form["city"].value.toLowerCase(),
            "Год": [form["yearMin"].value, form["yearMax"].value],
            "Высота": [form["heightMin"].value, form["heightMax"].value]
        };

        let arr = props.fullData;

        // строковые поля
        ["Название","Тип","Страна","Город"].forEach(key=>{
            if(filterField[key]) {
               arr = arr.filter(item=> item[key].toString().toLowerCase().includes(filterField[key]));
            }
        });

        // числовые интервалы
        [["Год","year"],["Высота","height"]].forEach(([key,label])=>{
            const [min,max]=filterField[key];
            if(min !== "" || max !== "") {
               arr = arr.filter(item=>{
                   const val = Number(item[key]);
                   const minOk = (min === "") ? true : val >= Number(min);
                   const maxOk = (max === "") ? true : val <= Number(max);
                   return minOk && maxOk;
               });
            }
        });

        props.filtering(arr);
        props.resetPage();
    };

    const handleReset = () => {
        props.filtering(props.fullData);
        props.resetPage();
    };

    return (
        <form className="filter-container" onSubmit={handleSubmit} onReset={handleReset}>
            <p>
                <label>Название:</label>
                <input name="structure" type="text" />
            </p>
            <p>
                <label>Тип:</label>
                <input name="type" type="text" />
            </p>
            <p>
                <label>Страна:</label>
                <input name="country" type="text" />
            </p>
            <p>
                <label>Город:</label>
                <input name="city" type="text" />
            </p>
            <p>
                <label>Год (от/до):</label>
                <input name="yearMin" type="number" style={{width:'80px'}} /> –
                <input name="yearMax" type="number" style={{width:'80px'}} />
            </p>
            <p>
                <label>Высота (от/до):</label>
                <input name="heightMin" type="number" style={{width:'80px'}} /> –
                <input name="heightMax" type="number" style={{width:'80px'}} />
            </p>
            <p>
                <button type="submit">Фильтровать</button>
                <button type="reset">Очистить</button>
            </p>
        </form>
    );
};

export default Filter;
