import Head from 'next/head';
import { Buy, AR, QRModal } from '../components';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const PRODUCT = {
	brand: 'Bacca Bucci',
	name: "Bacca Bucci Men's OffBeat Mid-Top Urban Streetwear Sneakers Socks Shoes | Chunky outsole",
	price: 'Rs. 1,999.00',
	mrp: 'Rs. 4,999.00',
	discount: '60% off',
	image: '/images/shoe.svg',
	link: 'https://www.amazon.in/Bacca-Bucci-OffBeat-Urban-Streetwear/dp/B08JZQZQZK/ref=sr_1_1?dchild=1&keywords=Bacca+Bucci+Men%27s+OffBeat+Mid-Top+Urban+Streetwear+Sneakers+Socks+Shoes+%7C+Chunky+outsole&qid=1619620003&sr=8-1',
};

const MODELS = [
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
	// {
	// 	name: 'shoe2',
	// 	src: '/models/shoe2.glb',
	// 	link: '/shoe2',
	// },
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
	// {
	// 	name: 'shoe5',
	// 	src: '/models/shoe5.glb',
	// 	link: '/shoe5',
	// },
];

export async function getServerSideProps(context) {
	const { id } = context.query;

	const src = MODELS[id].src || '/models/leather_sofa.glb';
	console.log(src[0]);

	console.log(id);
	return {
		props: {
			ModelSrc: src,
		},
	};
}

export default function Product({ ModelSrc = '/models/leather_sofa.glb' }) {
	const [modalOpen, setModalOpen] = useState(false);
	// const [ModelSrc, setModelSrc] = useState(MODELS[0].src);

	const router = useRouter();

	useEffect(() => {
		router.prefetch('/');
		router.prefetch('/0');
		router.prefetch('/1');
		router.prefetch('/2');
		router.prefetch('/3');
		router.prefetch('/4');
		router.prefetch('/5');
		router.prefetch('/6');
		router.prefetch('/7');
	}, []);

	const handleShare = () => {
		navigator.clipboard
			.writeText(`Hey, checkout Rjwada's cool 3D models with AR view at ${window.location.href}`)
			.then(() => {
				toast('Link copied to clipboard');
			})
			.catch(err => {
				toast.error('Something wrong with share! Please try again later', err);
			});
	};

	return (
		<>
			<Head>
				<title>Shop @Rjwada</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className=" select-text overflow-x-hidden bg-black">
				<div className="w-full relative md:w-8/12 xl:w-7/12 mx-auto flex flex-col justify-center items-center min-h-screen overflow-x-hidden">
					{/* Top bar */}
					<div className="absolute md:fixed top-1 px-3 md:px-5 lg:px-8 py-2 w-full flex justify-between items-center">
						<Image
							src="/images/white-arrow.svg"
							alt="Back"
							width={33}
							height={33}
							className="bg-black p-1 rounded-md h-8 cursor-pointer hover:scale-105"
						/>

						<div className="flex items-center gap-x-3">
							<Image src="/icons/android-chrome-192x192.png" alt="Brand Logo" width={150} height={44} className="cursor-pointer h-11 w-12" />

							<p className="font-Montserrat font-bold text-2xl sm:text-3xl text-white">rjwada</p>
						</div>

						<Image
							src="/images/share.svg"
							alt="Share"
							width={33}
							height={33}
							className="bg-black p-1 rounded-md cursor-pointer hover:scale-105"
							onClick={handleShare}
						/>
					</div>

					{/* <div className="hidden lg:flex w-full min-h-fit absolute top-14 p-1 justify-center">
						<button className="relative left-4 w-52 py-3 px-8 mx-1 text-black rounded-full bg-orange-400 hover:bg-orange-500 font-semibold ">
							360 View
						</button>

						<button
							className="relative right-4 w-52 py-3 px-8 mx-1 text-white font-semibold rounded-full bg-black hover:bg-gray-900"
							onClick={() => setModalOpen(true)}
						>
							View in your room
						</button>
					</div> */}

					<AR src={ModelSrc} />

					{/* <Buy product={PRODUCT} /> */}

					<QRModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
				</div>

				{/* <div className="w-full max-w-2xl mx-auto absolute bottom-0 left-0 right-0 overflow-hidden scrollbar-hide grid justify-items-center grid-cols-2 sm:grid-cols-5 gap-x-4 gap-y-2 px-4 justify-center pb-2">
					{MODELS.map((model, index) => (
						<button
							key={index}
							className="select-none w-32 h-9 px-4 uppercase py-4 bg-blue-500 text-white cursor-pointer rounded-lg font-semibold flex justify-center items-center hover:scale-x-110 hover:bg-blue-600"
							onClick={() => setModelSrc(model.src)}
						>
							{model.name}
						</button>
					))}
				</div> */}
			</main>
		</>
	);
}
