import './DogImage.css';
import { Link } from 'react-router-dom';

const DogImage = (props) => {
	return (
		<div className='dogImage w-25 d-flex flex-column justify-content-center align-items-center'>
			<Link to={`/${props.dogName}`}>
				<img
					className='rounded-circle shadow w-100 mb-3'
					src={props.image}
					alt='a dog'
				>
				</img>
			</Link>
			<p className='text-uppercase fs-5 fw-bold'>{props.dogName}</p>
		</div>
	);
};

export default DogImage;
