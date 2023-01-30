import Image from 'next/image';

export default function QR() {
	return (
		<div className="QR fixed z-10 inset-0  bg-white px-2">
			<div className="w-fit h-screen mx-auto flex flex-col justify-evenly items-center">
				<button className="btn-green w-full mx-4">View in room</button>

				<div>
					<Image src="/images/qr.svg" alt="QR" width={300} height={300} className="mx-auto" />
					<h2 className="text-center text-lg font-semibold py-4 break-before-page">
						Scan <span className="text-orange-500">QR</span> code and see it in your mobile
					</h2>
				</div>

				<button className="btn-green w-full mx-4">Add to cart</button>
			</div>
		</div>
	);
}
