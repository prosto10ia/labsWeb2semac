import './CSS/App.css';
import buildings from './data.js';
import Table from './components/Table.js';
import Chart from './components/Chart.js';
import Slider from './components/ImageSlider.js';
import { useState } from 'react';

import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';
import img5 from './images/5.png';
import img6 from './images/6.png';

function App() {
  const [filteredData, setFilteredData] = useState(buildings);

  const pics = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="App">
      <h3 className="title">Самые высокие здания и сооружения</h3>
      <Chart data={filteredData} />
      <Table 
        data={buildings} 
        amountRows="15" 
        onFilter={setFilteredData}
      />
      <Slider images={pics} visibleCount={3} />
    </div>
  );
}

export default App;
