import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	const handleCounter = () => {
		setCount((count) => count + 1);
	};

	return (
		<>
			<div>
				<img src={viteLogo} className="logo" alt="Vite logo" />
				<img src={reactLogo} className="logo react" alt="React logo" />
			</div>
			<h2>MeteoSynop App using Vite + React</h2>
			<div className="card">
				<button onClick={handleCounter}>
					Count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
		</>
	);
}

export default App;