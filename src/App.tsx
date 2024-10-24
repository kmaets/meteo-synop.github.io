import { useState } from 'react';
import { Suspense } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Synops } from './views/synops/Synops';

import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';

// WebGL components
import { HeaderText } from './components/HeaderText';
import { PolandMapModel } from './components/PolandMap';
import { TreesModels } from './components/Trees';

function App() {
	const [count, setCount] = useState(0);
	const [synops, showSynops] = useState(false);
	const handleCounter = () => {
		setCount(count => count + 1);
	};

	const handleShowSynops = () => {
		showSynops(synops => synops ? false : true);
	};

	return (
		<>
			<div className='header'>
				<div>
					<img src={viteLogo} className='logo' alt='Vite logo' />
					<img src={reactLogo} className='logo react' alt='React logo' />
				</div>
				<h2>MeteoSynop App using Vite + React</h2>
				<div className='card'>
					<button onClick={handleCounter}>
						Show 3d model {count}
					</button>
					<button onClick={handleShowSynops}>
						{
							synops
								? <span>Click to hide synops</span>
								: <span>Click to show synops</span>
						}
					</button>
					{synops && (
						<Synops />
					)}
				</div>
			</div>
			<div className='webgl'>
				<Canvas camera={{ position: [0, 0, 3], fov: 42 }}>
					<color attach='background' args={['#171720']} />
					<Suspense fallback={null}>
						<HeaderText />
						<PolandMapModel />
						<TreesModels />
						<OrbitControls />
						<Environment preset='park' background />
					</Suspense>
				</Canvas>
			</div>
			<div>
				{ synops }
				{synops}
			</div>
		</>
	);
}

export default App;
