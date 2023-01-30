import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className="w-full min-h-screen overflow-x-hidden">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}