import hazel from '../../Assets/Images/hazel.jpg';
import tubby from '../../Assets/Images/tubby.jpg';
import whiskey from '../../Assets/Images/whiskey.jpg';
import DogImage from './DogImage/DogImage';

const DogList = () => {
	return (
		<main className='container h-100 d-flex flex-column align-items-center'>
			<h1 className='display-1 mt-5'>Click a Dog!</h1>
			<div className='d-flex justify-content-between mt-5'>
				<DogImage image={whiskey} dogName='Whiskey' />
				<DogImage image={hazel} dogName='Hazel' />
				<DogImage image={tubby} dogName='Tubby' />
			</div>
		</main>
	);
};

export default DogList;
