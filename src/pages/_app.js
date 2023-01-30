import '@/styles/globals.css';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
	return (
		<>
			<nav className="bg-black/30 backdrop-blur-xl flex gap-6 fixed z-50 top-0 left-1/3 px-6 rounded-xl">
				<Link href="/">Home</Link>
				<Link href="/qr">QR</Link>
			</nav>
			<Component {...pageProps} />
		</>
	);
}
