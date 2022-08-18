/**
 * External dependencies
 */
// import { ThemeProvider } from 'next-themes';
import { Provider as ContextProvider } from '@/context/index.js';

/**
 * Internal dependencies
 */
import '@/styles/global.css';
import Header from '@/components/Header';

export function reportWebVitals(metric) {
	console.log(metric);
}

export default function MyApp({ Component, pageProps }) {
	return (
		// <ThemeProvider attribute="class">
		<ContextProvider>
			<Header />
			<main>
				<Component {...pageProps} />
			</main>
		</ContextProvider>
		// </ThemeProvider>
	);
}
