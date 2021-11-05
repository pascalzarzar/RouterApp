import './App.css';
import DogList from './Components/DogList/DogList';
import Header from './Components/Header/Header';

function App() {
	return (
		<div className='vh-100'>
			<Header />
			<DogList />
		</div>
	);
}

export default App;
