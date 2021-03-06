import hazel from '../Images/hazel.jpg'
import tubby from '../Images/tubby.jpg'
import whiskey from '../Images/whiskey.jpg'

const dogsData = [
	
	{
		name: 'Whiskey',
		age: 5,
		src:`${whiskey}`,
		facts: [
			'Whiskey loves eating popcorn.',
			'Whiskey is a terrible guard dog.',
			'Whiskey wants to cuddle with you!',
		],
	},
	{
		name: 'Hazel',
		age: 3,
		src: `${hazel}`,
		facts: [
			'Hazel has soooo much energy!',
			'Hazel is highly intelligent.',
			'Hazel loves people more than dogs.',
		],
	},
	{
		name: 'Tubby',
		age: 4,
		src: `${tubby}`,
		facts: [
			'Tubby is not the brightest dog',
			'Tubby does not like walks or exercise.',
			'Tubby loves eating food.',
		],
	},
];

export default dogsData;
