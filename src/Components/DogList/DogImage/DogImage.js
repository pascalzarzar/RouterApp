import './DogImage.css';

const DogImage = (props) => {
	return (
		<div className='w-25 d-flex flex-column justify-content-center align-items-center'>
			<img
				className='rounded-circle shadow w-100 mb-3'
				src={props.image}
				alt='a dog'
			/>
			<p className='text-uppercase fs-5 fw-bold'>{props.dogName}</p>
		</div>
	);
};

export default DogImage;
