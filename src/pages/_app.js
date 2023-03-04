import '@/styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const MODELS = [
	{
		name: 'sofa',
		src: '/models/leather_sofa.glb',
		link: '/sofa',
		image: '/models/sofa.png',
	},
	{
		name: 'bag',
		src: '/models/rothys_travel_bag.glb',
		link: '/bag',
		image: '/models/bag.png',
	},
	{
		name: 'Crystal',
		src: '/models/ShoeBlueAndWhite.glb',
		link: '/shoe0',
		image: '/models/shoe0.png',
	},
	{
		name: 'Cushion',
		src: '/models/shoe1.glb',
		link: '/shoe1',
		image: '/models/shoe1.png',
	},
	// {
	// 	name: 'shoe2',
	// 	src: '/models/shoe2.glb',
	// 	link: '/shoe2',
	// 	image: '/models/shoe2.png',
	// },
	{
		name: 'Innova',
		src: '/models/shoe3.glb',
		link: '/shoe3',
		image: '/models/shoe3.png',
	},
	{
		name: 'Creta',
		src: '/models/shoe4.glb',
		link: '/shoe4',
		image: '/models/shoe4.png',
	},
	// {
	// 	name: 'shoe5',
	// 	src: '/models/shoe5.glb',
	// 	link: '/shoe5',
	// 	image: '/models/shoe5.png',
	// },
];

export default function App({ Component, pageProps }) {
	const [ModelSrc, setModelSrc] = useState(MODELS[0].src);

	return (
		<>
			<Component {...pageProps} />

			{/* <div className="w-full max-w-2xl mx-auto absolute bottom-0 left-0 right-0 overflow-hidden scrollbar-hide grid justify-items-center grid-cols-3 sm:grid-cols-4 gap-x-2 sm:gap-x-4 gap-y-2 px-4 justify-center pb-2">
				{MODELS.map((model, index) => (
					<Link
						key={index}
						href={`/${index}`}
						className="select-none w-24 sm:w-32 h-9 px-4 uppercase py-4 bg-blue-500 text-white cursor-pointer rounded-lg font-semibold flex justify-center items-center hover:scale-x-110 hover:bg-blue-600 transition-all"
						onClick={() => setModelSrc(model.src)}
					>
						{model.name}
					</Link>
				))}
			</div> */}

			<div className="absolute z-20 bottom-2 left-0 right-0 scrollbar-hide flex w-full max-w-2xl mx-auto overflow-x-auto space-x-8 sm:space-x-12 px-4 py-1.5 snap-x snap-proximity">
				{MODELS.map((item, index) => (
					<Link
						href={`/${index}`}
						className="flex-shrink-0 rounded-full rounded-br-md rounded-bl-md backdrop-blur select-text snap-center hover:scale-105 focus:-translate-y-1 transition-all duration-300 ease-in-out transform hover:shadow-2xl"
						key={index}
					>
						<Image
							src={item.image}
							height={80}
							width={80}
							className="bg-purple-900 h-14 w-14 rounded-full border-2 border-purple-900 hover:border-purple-700 select-text"
							alt={item.name}
						/>
						<p className="uppercase text-xs text-center w-full text-white font-semibold font-Montserrat">{item.name}</p>
					</Link>
				))}
			</div>
		</>
	);
}
