import { useState } from "react";
import TableHead from './TableHead';
import TableBody from './TableBody';
import Filter from './Filter';

/*
   компонент, выводящий на страницу таблицу (с пагинацией и фильтром)
   пропсы:
      data - данные для таблицы в виде массива объектов
      amountRows - количество строк, видимых на странице
      pagination - true/false, использовать ли пагинацию
*/
const Table = (props) => {

    const [dataTable, setDataTable] = useState(props.data);
    const updateDataTable = (value) => setDataTable(value);

    const [activePage, setActivePage] = useState(1);

    const resetPage = () => setActivePage(1);

    // количество страниц
    const pagesCount = Math.ceil(dataTable.length / props.amountRows);

    const changeActive = (event) => {
        const num = Number(event.target.innerHTML);
        setActivePage(num);
    };

    // генерируем номера страниц
    const pages = Array.from({length: pagesCount}, (_,i)=>i+1).map((num)=>(
        <span key={num}
              className={num===activePage ? "active" : ""}
              onClick={changeActive}>{num}</span>
    ));

    return (
      <>
        <h4>Фильтры</h4>
        <Filter filtering={updateDataTable}
                fullData={props.data}
                resetPage={resetPage}/>
        <table>
            <TableHead head={Object.keys(props.data[0])}/>
            <TableBody body={dataTable}
                       amountRows={props.amountRows}
                       numPage={props.pagination ? activePage : 1}/>
        </table>
        { props.pagination &&
        <div className="pagination">
            {pages}
        </div>}
      </>
    );
};

export default Table;
