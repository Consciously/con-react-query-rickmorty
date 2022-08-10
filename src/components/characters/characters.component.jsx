import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Character from '../character/character.component';
import './characters.styles.css';

const Characters = () => {
	const [page, setPage] = useState(1);

	const fetchCharacters = async ({ queryKey }) => {
		const { data } = await axios(
			`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
		);
		return data;
	};

	const { isLoading, isError, data, isPreviousData } = useQuery(
		['characters', page],
		fetchCharacters,
		{
			keepPreviousData: true
		}
	);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error</div>;
	}

	const incrementPageHandler = () => {
		setPage(prevState => prevState + 1);
	};

	const decrementPageHandler = () => {
		setPage(prevState => prevState - 1);
	};

	return (
		<div className='characters'>
			{data.results.map(character => (
				<Character key={character.id} character={character} />
			))}
			<div>
				<button
					type='button'
					disabled={page === 1}
					onClick={decrementPageHandler}
				>
					Previous
				</button>
				<button
					disabled={isPreviousData && !data.info.next}
					type='button'
					onClick={incrementPageHandler}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Characters;
