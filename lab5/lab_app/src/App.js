import './CSS/App.css';
import buildings from './data';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <h3>Самые высокие здания и сооружения</h3>
      <Table data={buildings} amountRows={10} pagination={true} />
    </div>
  );
}

export default App;
