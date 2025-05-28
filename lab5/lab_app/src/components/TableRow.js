/*
   компонент, для вывода строки таблицы
   пропсы:
      row - данные для формирования ячеек строки таблицы в виде массива
      isHead - 0 - если td, 1 - если th
*/
const TableRow = (props) => {
    const cells = (props.isHead === "1")
        ? props.row.map((item, index) => <th key={index}>{item}</th>)
        : props.row.map((item, index) => <td key={index}>{item}</td>);
    return <> {cells} </>;
};
export default TableRow;
