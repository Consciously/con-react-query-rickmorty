import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Characters from './components/characters/characters.component';
import './App.css';

const queryClient = new QueryClient();

function App() {
	return (
		<div className='App'>
			<div className='container'>
				<h1>Rick and Morty</h1>
				<QueryClientProvider client={queryClient}>
					<Characters />
				</QueryClientProvider>
			</div>
		</div>
	);
}

export default App;
