import { useState } from 'react';
import './App.css';
import { motion, stagger } from 'framer-motion';

function App() {
	const [animate, setAnimate] = useState(true);

	const boxVariant = {
		initial: {
			x: -100,
			opacity: 0,
		},
		final: {
			x: 0,
			opacity: 1,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.2,
			},
		},
	};

	const childVariant = {
		initial: {
			y: 100,
			opacity: 0,
		},
		final: {
			y: 0,
			opacity: 1,
		},
	};

	return (
		<div className='app'>
			{/*  // ! Box 1  */}
			<motion.div
				className='box box-1'
				initial={{ opacity: animate ? 0.1 : 1 }}
				animate={{
					x: animate ? 'calc(100vw - 25rem)' : 0,
					rotate: animate ? 360 : 0,
					opacity: 1,
				}}
				transition={{ type: 'spring', stiffness: 50 }}
				onClick={() => setAnimate(!animate)}>
				Box 1
			</motion.div>

			{/*  // ! Box 2  */}
			<motion.div
				className='box box-2'
				whileTap={{
					scale: 0.9,
					borderRadius: '1rem',
					backgroundColor: 'cyan',
				}}
				whileHover={{ scale: 1.1 }}
				transition={{ type: 'spring', stiffness: 190 }}>
				Box 2
			</motion.div>

			{/*  // ! Box 3  */}
			<motion.div
				className='box box-3'
				variants={boxVariant}
				initial='initial'
				animate='final'>
				{[1, 2, 3].map((box) => (
					<motion.div
						key={box}
						className='child-box'
						variants={childVariant}></motion.div>
				))}
			</motion.div>
		</div>
	);
}

export default App;
