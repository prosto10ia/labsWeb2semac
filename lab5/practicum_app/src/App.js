import React, { useState, useMemo } from 'react';
import data from './data';
import './App.css';

const pageSize = 10;
const sortOptions = [
  { value: 'time', label: 'Время' },
  { value: 'calories', label: 'Калории' },
  { value: 'pulse', label: 'Пульс' },
];

function App() {
  // Вводимые значения фильтров
  const [filtersInput, setFiltersInput] = useState({
    workout: '',
    timeFrom: '',
    timeTo: '',
    caloriesFrom: '',
    caloriesTo: '',
    pulseFrom: '',
    pulseTo: '',
  });
  // Применённые при клике «Найти»
  const [filtersApplied, setFiltersApplied] = useState(filtersInput);

  // Вводимые значения сортировки (3 уровня)
  const [sortInput, setSortInput] = useState([
    { field: '', desc: false },
    { field: '', desc: false },
    { field: '', desc: false },
  ]);
  // Применённые при клике «Сортировать»
  const [sortApplied, setSortApplied] = useState(sortInput);

  const [page, setPage] = useState(1);

  // Обработчик изменения любого инпута фильтра
  const handleFilterChange = (e) => {
    setFiltersInput({
      ...filtersInput,
      [e.target.name]: e.target.value,
    });
  };

  // Сброс вводимых и применённых фильтров
  const handleClearFilters = () => {
    const empty = {
      workout: '',
      timeFrom: '',
      timeTo: '',
      caloriesFrom: '',
      caloriesTo: '',
      pulseFrom: '',
      pulseTo: '',
    };
    setFiltersInput(empty);
    setFiltersApplied(empty);
    setPage(1);
  };

  // Применить вводимые фильтры
  const applyFilters = () => {
    setFiltersApplied(filtersInput);
    setPage(1);
  };

  // Фильтрация по filtersApplied
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const f = filtersApplied;
      if (f.workout && !item.workout.toLowerCase().includes(f.workout.toLowerCase())) return false;
      const numCheck = (val, from, to) => {
        if (from && val < +from) return false;
        if (to && val > +to) return false;
        return true;
      };
      if (!numCheck(item.time, f.timeFrom, f.timeTo)) return false;
      if (!numCheck(item.calories, f.caloriesFrom, f.caloriesTo)) return false;
      if (!numCheck(item.pulse, f.pulseFrom, f.pulseTo)) return false;
      return true;
    });
  }, [filtersApplied]);

  // Обработчики сортировки ввода
  const handleSortFieldChange = (idx, field) => {
    const si = [...sortInput];
    si[idx].field = field;
    // если сбросили уровень, сбрасываем все ниже
    if (!field) {
      for (let j = idx + 1; j < 3; j++) {
        si[j] = { field: '', desc: false };
      }
    }
    setSortInput(si);
  };
  const handleSortDescChange = (idx, desc) => {
    const si = [...sortInput];
    si[idx].desc = desc;
    setSortInput(si);
  };
  const applySort = () => {
    setSortApplied(sortInput);
    setPage(1);
  };
  const resetSort = () => {
    const empty = [
      { field: '', desc: false },
      { field: '', desc: false },
      { field: '', desc: false },
    ];
    setSortInput(empty);
    setSortApplied(empty);
    setPage(1);
  };

  // Сортировка по sortApplied (3 уровня, применяем с конца)
  const sortedData = useMemo(() => {
    let arr = [...filteredData];
    const cmp = (a, b, field, desc) => {
      if (a[field] < b[field]) return desc ? 1 : -1;
      if (a[field] > b[field]) return desc ? -1 : 1;
      return 0;
    };
    // применяем третий → второй → первый
    for (let i = sortApplied.length - 1; i >= 0; i--) {
      const { field, desc } = sortApplied[i];
      if (field) {
        arr.sort((a, b) => cmp(a, b, field, desc));
      }
    }
    return arr;
  }, [filteredData, sortApplied]);

  // Пагинация
  const totalPages = Math.max(1, Math.ceil(sortedData.length / pageSize));
  const pageData = sortedData.slice((page - 1) * pageSize, page * pageSize);
  const prevPage = () => setPage((p) => Math.max(1, p - 1));
  const nextPage = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <div>
      {/* ПАНЕЛЬ ФИЛЬТРОВ */}
      <div className="panel">
        <h3>Фильтр</h3>
        <div>
          <label>
            Тренировка:{' '}
            <input
              name="workout"
              value={filtersInput.workout}
              onChange={handleFilterChange}
            />
          </label>
        </div>
        <div>
          <label>
            Время от:{' '}
            <input
              name="timeFrom"
              value={filtersInput.timeFrom}
              onChange={handleFilterChange}
              style={{ width: '60px' }}
            />
          </label>{' '}
          до:{' '}
          <input
            name="timeTo"
            value={filtersInput.timeTo}
            onChange={handleFilterChange}
            style={{ width: '60px' }}
          />
        </div>
        <div>
          <label>
            Калории от:{' '}
            <input
              name="caloriesFrom"
              value={filtersInput.caloriesFrom}
              onChange={handleFilterChange}
              style={{ width: '60px' }}
            />
          </label>{' '}
          до:{' '}
          <input
            name="caloriesTo"
            value={filtersInput.caloriesTo}
            onChange={handleFilterChange}
            style={{ width: '60px' }}
          />
        </div>
        <div>
          <label>
            Пульс от:{' '}
            <input
              name="pulseFrom"
              value={filtersInput.pulseFrom}
              onChange={handleFilterChange}
              style={{ width: '60px' }}
            />
          </label>{' '}
          до:{' '}
          <input
            name="pulseTo"
            value={filtersInput.pulseTo}
            onChange={handleFilterChange}
            style={{ width: '60px' }}
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <button onClick={applyFilters}>Найти</button>{' '}
          <button onClick={handleClearFilters}>Сброс фильтра</button>
        </div>
      </div>

      {/* ПАНЕЛЬ СОРТИРОВКИ */}
      <div className="panel">
        <h3>Сортировка</h3>
        {sortInput.map((lvl, i) => (
          <div key={i} style={{ marginBottom: '8px' }}>
            <label>
              {['Первый', 'Второй', 'Третий'][i]} уровень:{' '}
              <select
                value={lvl.field}
                onChange={(e) => handleSortFieldChange(i, e.target.value)}
              >
                <option value="">Нет</option>
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>{' '}
            <label>
              <input
                type="checkbox"
                checked={lvl.desc}
                disabled={!lvl.field}
                onChange={(e) => handleSortDescChange(i, e.target.checked)}
              />{' '}
              по убыванию?
            </label>
          </div>
        ))}
        <div>
          <button onClick={applySort}>Сортировать</button>{' '}
          <button onClick={resetSort}>Сброс сортировки</button>
        </div>
      </div>

      {/* ТАБЛИЦА */}
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Дата</th>
            <th>Тренировка</th>
            <th>Время (мин)</th>
            <th>Калории</th>
            <th>Пульс (ср.)</th>
          </tr>
        </thead>
        <tbody>
          {pageData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.date}</td>
              <td>{row.workout}</td>
              <td>{row.time}</td>
              <td>{row.calories}</td>
              <td>{row.pulse}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="controls">
        <button onClick={prevPage} disabled={page === 1}>
          Prev
        </button>{' '}
        Стр. {page} / {totalPages}{' '}
        <button onClick={nextPage} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
