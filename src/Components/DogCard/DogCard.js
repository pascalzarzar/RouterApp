import dogsData from '../../Assets/Data/Dogs';
import { Link, useParams } from 'react-router-dom';
import './DogCard.css';

const DogCard = () => {
	
	const params = useParams();

	const data = dogsData.filter( dog => dog.name === params.dogName);
	const dogData = data[0];

	return (
		<div className='d-flex justify-content-center mt-5'>
			<div className='dogCard card shadow w-25 h-50'>
				<img className='card-img-top' src={dogData.src} alt='Card cap' />
				<div className='card-body'>
					<h5 className='card-title'>{dogData.name}</h5>
					<p className='text-muted'>{dogData.age} age old</p>
				</div>
				<ul className='list-group list-group-flush'>
					{dogData.facts.map((fact) => {
						return <li className='list-group-item'>{fact}</li>;
					})}
				</ul>
				<div className='card-body'>
					<Link to='/'>
						<button href='#' type='button' className='btn btn-primary'>
							Go Back
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default DogCard;
