import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div>
      <h1>상품목록 페이지</h1>
      <hr/>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
