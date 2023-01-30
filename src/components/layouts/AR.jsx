export default function AR({ product }) {
	return (
		<div className="absolute top-20 sm:top-28 w-full min-h-[68vh] flex justify-center border-2 border-black rounded-xl">
			<img src={`${product.image}` || '/images/shoe.svg'} alt="Buy" className="w-11/12 lg:w-4/5" />
		</div>
	);
}
