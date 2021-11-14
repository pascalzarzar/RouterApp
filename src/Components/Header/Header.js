import dogsData  from '../../Assets/Data/Dogs'
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
				<div class='container'>
					<Link className='navbar-brand' to='/'>DogRouter</Link>
					<button
						class='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span class='navbar-toggler-icon'></span>
					</button>
					<div
						class='collapse navbar-collapse'
						id='navbarSupportedContent'
					>
						<ul class='navbar-nav me-auto mb-2 mb-lg-0'>
							{ dogsData.map((dog) => {
								return(
									<li class='nav-item'>
										<Link className='nav-link' to={`/${dog.name}`}>{dog.name}</Link>
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
