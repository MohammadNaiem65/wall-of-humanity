import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
	const [showDiv, setShowDiv] = useState(true);

	const containerVarian = {
		initial: {
			opacity: 0,
			y: 50,
		},
		final: {
			opacity: 1,
			y: 0,
		},
		exit: {
			opacity: 0,
			y: 50,
		},
		hover: {
			scale: 1.25,
			transition: {
				duration: 0.5,
			},
		},
	};

	const childVariant = {
		initial: {
			opacity: 0,
			y: 30,
		},
		final: {
			opacity: 1,
			y: 0,
		},
	};

	const parentVariants = {
		hover: {
			scale: 1.2,
		},
	};

	const childVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	};

	return (
		<div>
			<Helmet>
				<title>Home | WOH - Wall Of Humanity</title>
			</Helmet>
			{/* Number one, Sakib Khan */}
			<div className='h-56 flex justify-center items-center'>
				<AnimatePresence>
					{showDiv && (
						<motion.div
							className='h-28 aspect-square bg-blue-300'
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0.5, transition: { delay: 0 } }}
							whileHover={{ scale: 1.2 }}
							onHoverStart={() => {
								console.log('started');
								setShowDiv(!showDiv);
							}}
							onHoverEnd={() => {
								console.log('ended');
								setShowDiv(!showDiv);
								console.log(showDiv);
							}}
							transition={{
								type: 'spring',
								duration: 2,
								bounce: 0.6,
								// delay: 3,
							}}></motion.div>
					)}
				</AnimatePresence>
			</div>

			{/* Number 2 */}
			{/* <div className='h-56 flex justify-center items-center'>
				<AnimatePresence>
					<motion.div
						className='bg-teal-300 p-10'
						variants={containerVarian}
						initial='initial'
						animate='final'
						exit='exit'
						whileHover='hover'
						transition={{
							type: 'tween',
							duration: 1,
							delayChildren: 1,
							staggerChildren: 1,
							yoyo: 5,
						}}>
						<motion.li variants={childVariant}>child-1</motion.li>
						<motion.li variants={childVariant}>child-2</motion.li>
						<motion.li variants={childVariant}>child-3</motion.li>
					</motion.div>
				</AnimatePresence>
			</div> */}

			{/* Number 3 */}
			{/* <div className='h-56 flex justify-center items-center'>
				<motion.div
					className='bg-blue-300'
					variants={parentVariants}
					whileHover='hover'
					onHoverStart={() => console.log('hovered')}
					onHoverEnd={() => console.log('dishovered')}>
					<motion.div
						variants={childVariants}
						initial='hidden'
						animate='visible'>
						Child Component
					</motion.div>
				</motion.div>
			</div> */}

			{/* <motion.button
				className='text-white'
				onTap={(e, i) => console.log(e, i, 'clicked')}
				onTapStart={(e, i) => console.log(e, i, 'clicking')}
				onPan={(e, i) =>
					console.log(`x: ${i.velocity.x} and y: ${i.velocity.y}`)
				}
				onPanStart={(e, i) =>
					console.log(
						`x: ${i.velocity.x} and y: ${i.velocity.y} started`
					)
				}>
				Tap
			</motion.button> */}
		</div>
	);
}
