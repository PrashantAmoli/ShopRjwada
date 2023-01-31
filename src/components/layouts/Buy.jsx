export default function Buy({ product }) {
	return (
		<div className="flex flex-col justify-center items-center w-full fixed sm:absolute bottom-0 bg-gray-300/90 sm:bg-transparent rounded-tl-3xl rounded-tr-3xl z-10">
			<div className="w-full px-3 pt-4 pb-2">
				<p className="break-words pb-1">{product.name}</p>

				<span className="mr-2 lg:mr-4 text-lg font-semibold">{product.price}</span>
				<span className="mr-2 lg:mr-4 text-base line-through text-red-600">{product.mrp}</span>
				<span className="mr-2 lg:mr-4 text-xs sm:text-sm bg-[#0DBF1F] rounded-full px-3 py-0.5">-{product.discount}</span>
			</div>

			<div className=" w-full relative sm:bg-transparent flex justify-evenly p-1 sm:gap-8 md:mb-3 min-h-[3.5rem] overflow-hidden">
				<button className="absolute inset-0 sm:relative bg-[#E0A435] hover:bg-orange-500 text-black font-semibold px-20 sm:px-8 py-3 sm:rounded-full w-full text-left sm:text-center">
					Add to cart
				</button>

				<button className="absolute right-5 sm:right-0 sm:relative z-10 bg-black hover:bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg sm:rounded-full sm:w-full">
					Buy Now
				</button>
			</div>
		</div>
	);
}
