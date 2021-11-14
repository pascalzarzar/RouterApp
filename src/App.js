import DogList from './Components/DogList/DogList';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import DogCard from './Components/DogCard/DogCard';

function App() {
	return (
		<div className='vh-100'>
			<Header />
			<Routes>
				<Route exact path='/' element={<DogList />} />
				<Route exact path='/:dogName' element= {<DogCard/>}/>
			</Routes>
		</div>
	);
}

export default App;
