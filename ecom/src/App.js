import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Nav from './components/Nav';

function App() {
  return (
	<div className='myHtml'>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/shop' element={<Shop />} />
			</Routes>
		</BrowserRouter>
	</div>	
  );
}

export default App;
