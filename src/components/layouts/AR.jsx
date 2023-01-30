export default function AR({ product }) {
	return (
		<div className="w-full min-h-[60vh] flex justify-center border-2 border-black rounded-xl">
			<img src={`${product.image}` || '/images/shoe.svg'} alt="Buy" className="w-11/12 lg:w-4/5" />
		</div>
	);
}
