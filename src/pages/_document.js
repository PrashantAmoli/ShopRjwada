import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta name="author" content="Rjwada" />
				<meta name="description" content="Prototype of Rjwada web demo app for AR (3D/360) view and VR (Virtual try on)" />
				<meta name="keywords" content="Rjwada, web, demo, app" />
				<meta name="robots" content="index, follow" />
				<meta name="googlebot" content="index, follow" />

				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
			</Head>
			<body className="w-full min-h-screen overflow-x-hidden">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
