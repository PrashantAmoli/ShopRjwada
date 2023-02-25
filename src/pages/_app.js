import '@/styles/globals.css';
import Link from 'next/link';
import { useState } from 'react';

const MODELS = [
	{
		name: 'Shoe0',
		src: '/models/ShoeBlueAndWhite.glb',
		link: '/shoe0',
	},
	{
		name: 'shoe1',
		src: '/models/shoe1.glb',
		link: '/shoe1',
	},
	{
		name: 'shoe2',
		src: '/models/shoe2.glb',
		link: '/shoe2',
	},
	{
		name: 'shoe3',
		src: '/models/shoe3.glb',
		link: '/shoe3',
	},
	{
		name: 'shoe4',
		src: '/models/shoe4.glb',
		link: '/shoe4',
	},
	{
		name: 'shoe5',
		src: '/models/shoe5.glb',
		link: '/shoe5',
	},
	{
		name: 'sofa',
		src: '/models/leather_sofa.glb',
		link: '/sofa',
	},
	{
		name: 'bag',
		src: '/models/rothys_travel_bag.glb',
		link: '/bag',
	},
];

export default function App({ Component, pageProps }) {
	const [ModelSrc, setModelSrc] = useState(MODELS[0].src);

	return (
		<>
			<Component {...pageProps} />

			<div class="w-full max-w-2xl mx-auto absolute bottom-0 left-0 right-0 overflow-hidden scrollbar-hide grid justify-items-center grid-cols-2 sm:grid-cols-5 gap-x-4 gap-y-2 px-4 justify-center pb-2">
				{MODELS.map((model, index) => (
					<Link
						key={index}
						href={`/${index}`}
						className="select-none w-32 h-9 px-4 uppercase py-4 bg-blue-500 text-white cursor-pointer rounded-lg font-semibold flex justify-center items-center hover:scale-x-110 hover:bg-blue-600"
						onClick={() => setModelSrc(model.src)}
					>
						{model.name}
					</Link>
				))}
			</div>
		</>
	);
}
