import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
	return (
		<div className='bg-black w-full h-screen text-white'>
			<Navbar />
			<Outlet />
		</div>
	);
}

export default App;
