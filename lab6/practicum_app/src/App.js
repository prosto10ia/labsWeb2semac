import React, { useState, useMemo } from 'react';
import data from './data';
import Chart from './Chart';
import './App.css';

const pageSize = 10;
const sortOptions = [
  { value: 'time', label: 'Время (мин)' },
  { value: 'calories', label: 'Калории' },
  { value: 'pulse', label: 'Пульс' }
];

function App() {
  const [filterInput, setFilterInput] = useState({ workout: '', timeFrom:'', timeTo:'', caloriesFrom:'', caloriesTo:'', pulseFrom:'', pulseTo:'' });
  const [filterApplied, setFilterApplied] = useState(filterInput);
  const [sortInput, setSortInput] = useState([{field:'',desc:false},{field:'',desc:false},{field:'',desc:false}]);
  const [sortApplied, setSortApplied] = useState(sortInput);
  const [page, setPage] = useState(1);

  // Filter handlers
  const handleFilterChange = e => setFilterInput({ ...filterInput, [e.target.name]: e.target.value });
  const applyFilter = () => { setFilterApplied(filterInput); setPage(1); };
  const resetFilter = () => {
    const empty = { workout:'', timeFrom:'', timeTo:'', caloriesFrom:'', caloriesTo:'', pulseFrom:'', pulseTo:'' };
    setFilterInput(empty); setFilterApplied(empty); setPage(1);
  };

  const filtered = useMemo(() => data.filter(item => {
    if(filterApplied.workout && !item.workout.toLowerCase().includes(filterApplied.workout.toLowerCase())) return false;
    const check = (v, f, t) => { if(f && v<+f) return false; if(t && v>+t) return false; return true; };
    if(!check(item.time, filterApplied.timeFrom, filterApplied.timeTo)) return false;
    if(!check(item.calories, filterApplied.caloriesFrom, filterApplied.caloriesTo)) return false;
    if(!check(item.pulse, filterApplied.pulseFrom, filterApplied.pulseTo)) return false;
    return true;
  }), [filterApplied]);

  // Sort handlers
  const handleSortField = (idx, field) => {
    const si=[...sortInput]; si[idx].field=field;
    if(!field) for(let j=idx+1;j<3;j++) si[j]={field:'',desc:false};
    setSortInput(si);
  };
  const handleSortDesc = (idx, desc) => { const si=[...sortInput]; si[idx].desc=desc; setSortInput(si); };
  const applySort = () => { setSortApplied(sortInput); setPage(1); };
  const resetSort = () => {
    const empty=[{field:'',desc:false},{field:'',desc:false},{field:'',desc:false}];
    setSortInput(empty); setSortApplied(empty); setPage(1);
  };

  const sorted = useMemo(() => {
    let arr=[...filtered];
    const cmp=(a,b,f,d)=>{ if(a[f]<b[f]) return d?1:-1; if(a[f]>b[f]) return d?-1:1; return 0; };
    sortApplied.slice().reverse().forEach(s=>{ if(s.field) arr.sort((a,b)=>cmp(a,b,s.field,s.desc)); });
    return arr;
  }, [filtered, sortApplied]);

  const totalPages = Math.max(1, Math.ceil(sorted.length/pageSize));
  const pageData = sorted.slice((page-1)*pageSize, page*pageSize);

  return (
    <div>      
      <div className="panel">
        <h3>Фильтр</h3>
        <div><label>Тренировка: <input name="workout" value={filterInput.workout} onChange={handleFilterChange}/></label></div>
        <div><label>Время от: <input name="timeFrom" value={filterInput.timeFrom} onChange={handleFilterChange} style={{width:60}}/></label> до: <input name="timeTo" value={filterInput.timeTo} onChange={handleFilterChange} style={{width:60}}/></div>
        <div><label>Калории от: <input name="caloriesFrom" value={filterInput.caloriesFrom} onChange={handleFilterChange} style={{width:60}}/></label> до: <input name="caloriesTo" value={filterInput.caloriesTo} onChange={handleFilterChange} style={{width:60}}/></div>
        <div><label>Пульс от: <input name="pulseFrom" value={filterInput.pulseFrom} onChange={handleFilterChange} style={{width:60}}/></label> до: <input name="pulseTo" value={filterInput.pulseTo} onChange={handleFilterChange} style={{width:60}}/></div>
        <div style={{marginTop:10}}><button onClick={applyFilter}>Найти</button> <button onClick={resetFilter}>Сброс фильтра</button></div>
      </div>

      <div className="panel">
        <h3>Сортировка</h3>
        {sortInput.map((lvl,i)=><div key={i} style={{marginBottom:6}}>
          <label>{['Первый','Второй','Третий'][i]} уровень:
            <select value={lvl.field} onChange={e=>handleSortField(i,e.target.value)}>
              <option value="">Нет</option>
              {sortOptions.map(o=> <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </label>
          <label><input type="checkbox" checked={lvl.desc} disabled={!lvl.field} onChange={e=>handleSortDesc(i,e.target.checked)}/> по убыванию</label>
        </div>)}
        <div><button onClick={applySort}>Сортировать</button> <button onClick={resetSort}>Сброс сортировки</button></div>
      </div>

      <Chart data={sorted}/>


      <table><thead><tr><th>№</th><th>Дата</th><th>Тренировка</th><th>Время</th><th>Калории</th><th>Пульс</th></tr></thead>
        <tbody>{pageData.map(r=> <tr key={r.id}><td>{r.id}</td><td>{r.date}</td><td>{r.workout}</td><td>{r.time}</td><td>{r.calories}</td><td>{r.pulse}</td></tr>)}</tbody>
      </table>

      <div className="controls">
        <button onClick={()=>setPage(p=>Math.max(p-1,1))} disabled={page===1}>Prev</button> Стр. {page}/{totalPages} <button onClick={()=>setPage(p=>Math.min(p+1,totalPages))} disabled={page===totalPages}>Next</button>
      </div>
    </div>
  );
}

export default App;
