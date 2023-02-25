import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="utf-8" />
				<meta name="author" content="Rjwada" />
				<meta name="description" content="Reinventing deep-tech | An IITD-based start-up" />
				<meta
					name="description"
					content="Rjwada is an e-commerce experience company which develops an augmented reality fitting model where a person can try on the clothes in his/her app directly by simulating their body and fitting the desired cloth on them. We are building a B2B2C company, providing end-to-end 3D, AR and Virtual Try-on solutions.
					We help online sellers in creating customer experiences to get better retention, improved conversation rates & reduction in returns.
					Today, Rjwada stands as the most known startup in IITD, curating fashion, values, and tech to beautify the lives of the targeted customer base."
				/>
				<meta name="generator" content="Hugo 0.80.0" />
				<meta name="mobile-web-app-capable" content="yes" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link rel="android-chrome-512x512" sizes="512x512" href="/icons/android-chrome-512x512.png" />
				<link rel="android-chrome-512x512" sizes="192x192" href="/icons/android-chrome-512x512.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
			</Head>
			<body className="w-full min-h-screen overflow-x-hidden">
				<Main />
				<NextScript />

				<Script
					strategy="beforeInteractive"
					type="module"
					src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
					onLoad={() => console.log('Model Viewer Loaded')}
					onReady={() => console.log('Model Viewer Ready')}
					onError={() => console.log('Model Viewer Error')}
				/>
			</body>
		</Html>
	);
}
