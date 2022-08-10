import './character.styles.css';

const Character = ({ character }) => {
	const { image, name, status, species, location } = character;

	return (
		<div className='card'>
			<img src={image} alt={`${name}`} />
			<div className='text-container'>
				<h3>{name}</h3>
				<p className='status'>
					{status} - {species}
				</p>
				<p className='title'>Last seen on</p>
				<p>{location.name}</p>
			</div>
		</div>
	);
};

export default Character;
