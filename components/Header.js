/**
 * External dependencies
 */
import { useContext } from 'react';
import cx from 'classnames';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Sun, Moon, ArrowRight } from 'react-feather';

/**
 * Internal dependencies
 */
import { Context } from '@/context/index.js';

export default function Header() {
	const { theme, setTheme } = useTheme();
	// @ts-ignore
	const { state } = useContext(Context);

	const isLightModeEnabled = theme === 'light';

	return (
		<header className="flex flex-row justify-between align-center p-4">
			<Link href="/" passHref>
				<a>
					<span className="sr-only">Writer's Blocks</span>
					<svg
						className="h-full"
						width="51"
						height="25"
						viewBox="0 0 51 25"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M28.1197 25L8.56035 0H0L19.5593 25H28.1197Z" fill="currentColor" />
						<path
							d="M46.0819 25L26.5217 0H17.9614L37.5216 25H46.0819Z"
							fill="currentColor"
						/>
						<path
							d="M43.5429 9.53137L51 0H36.0859L43.5429 9.53137Z"
							fill="currentColor"
						/>
					</svg>
				</a>
			</Link>
			<a
				href="https://usewritersblocks.lemonsqueezy.com/checkout/buy/5b192dd2-ecfc-4510-bb8e-27b680722df3?logo=0dark=1&embed=1"
				className={cx(
					'lemonsqueezy-button flex items-center text-base font-medium text-gray-900 dark:text-white transition-opacity duration-200 ease-in-out',
					state.demo.isActive
						? 'opacity-100'
						: 'opacity-0 select-none pointer-events-none'
				)}
				{...(!state.demo.isActive
					? {
							tabIndex: -1,
					  }
					: {})}
			>
				Get started
				<span className="ml-2">
					<ArrowRight className="w-4 h-4" />
				</span>
			</a>
			<button
				className="px-4 py-2 text-black dark:text-white font-semibold rounded-md"
				onClick={() => {
					setTheme(isLightModeEnabled ? 'dark' : 'light');
				}}
			>
				<span className="sr-only">
					Turn on {isLightModeEnabled ? 'dark' : 'light'} mode
				</span>
				{isLightModeEnabled ? <Moon /> : <Sun />}
			</button>
		</header>
	);
}
