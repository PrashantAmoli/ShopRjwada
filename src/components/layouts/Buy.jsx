export default function Buy({ product }) {
	return (
		<div className="flex flex-col justify-center items-center w-full absolute bottom-0 bg-gray-300/90 md:bg-transparent rounded-tl-3xl rounded-tr-3xl ">
			<div className="w-full px-3 pt-4">
				<p className="break-words">{product.name}</p>

				<span className="mr-2 lg:mr-4 text-lg font-semibold">{product.price}</span>
				<span className="mr-2 lg:mr-4 text-base line-through text-red-600">{product.mrp}</span>
				<span className="mr-2 lg:mr-4 text-xs sm:text-sm bg-[#0DBF1F] rounded-full px-3">-{product.discount}</span>
			</div>

			<div className="bg-[#E0A435] w-full md:bg-transparent flex justify-evenly p-1 md:gap-8 md:mb-3">
				<button className="bg-[#E0A435] text-black px-8 py-2 rounded-full w-7/12 sm:w-fit md:w-full">Add to cart</button>
				<button className="bg-black text-white px-8 py-2 rounded-lg md:rounded-full w-fit md:w-full">Buy Now</button>
			</div>
		</div>
	);
}
