import { motion } from 'framer-motion';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {
	const parentVariant = {
		initial: {
			opacity: 0,
		},
		final: {
			opacity: 1,
			transition: {
				duration: 0.5,
				when: 'beforeChildren',
				staggerChildren: 0.5,
			},
		},
	};

	const childVariant = {
		initial: {
			y: -100,
			opacity: 0,
		},
		final: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
			},
		},
	};

	return (
		<motion.div
			className='h-24 border-b-2 flex justify-between items-center font-signika'
			variants={parentVariant}
			initial='initial'
			animate='final'>
			<motion.div
				className='ml-16 font-bold text-2xl5 flex items-center gap-x-4'
				variants={childVariant}>
				<img src={logo} alt='logo' className='w-12 ' />
				<h1 className='text-2xl mt-2'>Wall Of Humanity</h1>
			</motion.div>

			<div className='mr-16 text-xl flex items-center gap-x-5'>
				<motion.li className='list-none' variants={childVariant}>
					<Link>Home</Link>
				</motion.li>
				<motion.li className='list-none' variants={childVariant}>
					<Link>Gallery</Link>
				</motion.li>
				<motion.li className='list-none' variants={childVariant}>
					<Link>My Gallery</Link>
				</motion.li>
			</div>
		</motion.div>
	);
}
