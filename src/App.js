// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Orders from './components/Orders/Orders';
import Products from './components/Shop/Shop';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Products></Products>}></Route>
        <Route path='/home' element={<Products></Products>}></Route>
        <Route path='/shop' element={<Products></Products>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
      </Routes>
    </div>
  );
}

export default App;
