import React, { useState } from 'react';
import * as d3 from 'd3';
import ChartDraw from './ChartDraw';

const Chart = ({ data }) => {
  const [ox, setOx] = useState('workout');
  const [oy, setOy] = useState([true, false]);
  const [chartType, setChartType] = useState('scatter');
  const [graphData, setGraphData] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const selOx = e.target['ox'].value;
    const selOy = [e.target['oy-max'].checked, e.target['oy-min'].checked];
    const selType = e.target['chartType'].value;
    if (!selOy[0] && !selOy[1]) {
      setError('Выберите минимум или максимум.');
      return;
    }
    setError('');
    setOx(selOx);
    setGraphData(createArrGraph(data, selOx));
    setOy(selOy);
    setChartType(selType);
  };

  const handleClear = () => { setError(''); setGraphData([]); };

  const createArrGraph = (data, key) => {
    const grouped = d3.group(data, d => d[key]);
    const arr = [];
    for (let [label, items] of grouped) {
      const maxVal = d3.max(items, d => d.time);
      const minVal = d3.min(items, d => d.time);
      arr.push({ labelX: label, values: [maxVal, minVal] });
    }
    arr.sort((a,b)=> a.labelX.localeCompare(b.labelX));
    return arr;
  };

  return (
    <fieldset className="visualization">
      <legend>Диаграмма времени</legend>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <p>Группировать по:</p>
          <label><input type="radio" name="ox" value="workout" defaultChecked/> Тренировка</label>
          <label><input type="radio" name="ox" value="date"/> Дата</label>
        </div>
        <div className="form-group">
          <p>Показывать:</p>
          <label><input type="checkbox" name="oy-max" defaultChecked/> Максимум</label>
          <label><input type="checkbox" name="oy-min"/> Минимум</label>
        </div>
        <div className="form-group">
          <p>Тип диаграммы:</p>
          <select name="chartType">
            <option value="scatter">Точечная</option>
            <option value="bar">Столбчатая</option>
          </select>
        </div>
        <div>
          <button type="submit">Построить</button> <button type="button" onClick={handleClear}>Очистить</button>
        </div>
        {error && <p className="visualization-error">{error}</p>}
      </form>
      {graphData.length > 0 && <ChartDraw data={graphData} oy={oy} chartType={chartType}/>}
    </fieldset>
  );
};

export default Chart;
