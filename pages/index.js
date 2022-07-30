/**
 * External dependencies
 */
import React, { useState, useRef, useEffect } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import cx from 'classnames';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import { throttle } from 'lodash';
import { useTheme } from 'next-themes';

export default function Home() {
	const [isIframeActive, setIsIframeActive] = useState(false);
	const [isAnnotationActive, setIsAnnotationActive] = useState(true);
	const [didConfettiExplode, setDidConfettiExplode] = useState(false);
	const [clickCount, setClickCount] = useState(0);
	const buttonRef = useRef(null);
	const iframeRef = useRef(null);
	const iframeTop = useRef(0);
	const iframeScale = useRef(0);
	const { theme, setTheme } = useTheme();

	const handleLiveDemoClick = () => {
		iframeRef.current.style.transform = `translateY(0px) scale(0.75)`;

		setTimeout(() => {
			iframeRef.current.style.transform = `translateY(0px) scale(1)`;
		}, 100);

		setIsIframeActive(true);
	};

	const handleAnnotationClick = (e) => {
		setIsAnnotationActive(false);

		if (isAnnotationActive) {
			setClickCount((prevCount) => prevCount + 1);
		}

		setTimeout(() => {
			setDidConfettiExplode(true);
		}, 1000);
	};

	const getEasterEggMessage = (count) => {
		if (count >= 2) {
			return "Oh, you think you've found something?";
		}

		if (count >= 4) {
			return 'Certainly not an easter egg';
		}

		if (count >= 6) {
			return "You're definitely not getting any closer";
		}

		if (count >= 10) {
			return "You're persistent, aren't you? Fine, take it.";
		}
	};

	const getEasterEggDiscountCode = (count) => {
		if (count >= 10) {
			return 'EGG10';
		}
	};

	useEffect(() => {
		if (iframeRef.current) {
			const { transform: currentIframeTransform } = window.getComputedStyle(
				iframeRef.current
			);
			/* eslint-disable-next-line no-undef */
			const { m42: currentIframeTop, m22: currentIframeScale } = new WebKitCSSMatrix(
				currentIframeTransform
			);

			iframeTop.current = currentIframeTop;
			iframeScale.current = currentIframeScale;
		}
	}, []);

	useEffect(() => {
		const handleScroll = throttle(({ deltaY }) => {
			const initialTop = iframeTop.current;
			const initialScale = iframeScale.current;
			const { transform: currentIframeTransform } = window.getComputedStyle(
				iframeRef.current
			);
			/* eslint-disable-next-line no-undef */
			const { m42: currentIframeTop, m22: currentIframeScale } = new WebKitCSSMatrix(
				currentIframeTransform
			);

			let newTop = currentIframeTop;
			let newScale = currentIframeScale;

			if (deltaY > 0) {
				// Going up!
				if (currentIframeTop > 0) {
					newTop = Math.max(0, currentIframeTop - deltaY * 3);
				} else {
					if (currentIframeScale < 1) {
						newScale = Math.min(1, currentIframeScale + deltaY / 2 / 100);
					}
				}

				if (currentIframeScale === 1 && currentIframeTop === 0) {
					setIsIframeActive(true);
					setIsAnnotationActive(true);
					setDidConfettiExplode(false);
				}
			} else {
				// Going back down
				if (currentIframeScale > initialScale) {
					newScale = Math.max(initialScale, currentIframeScale - (-1 * deltaY) / 2 / 100);
				} else if (currentIframeTop < initialTop) {
					newTop = Math.min(initialTop, currentIframeTop + deltaY * -3);
				}

				if (currentIframeScale === initialScale && currentIframeTop === initialTop) {
					setIsIframeActive(false);
				}
			}

			iframeRef.current.style.transform = `translateY(${newTop}px) scale(${newScale})`;
		}, 100);

		const handleWindowResize = throttle(() => {
			iframeRef.current.style.transform = `translateY(${iframeTop.current}px) scale(${iframeScale.current})`;
		}, 100);

		window.addEventListener('wheel', handleScroll, { passive: true });
		window.addEventListener('resize', handleWindowResize);
		window.addEventListener('orientationchange', handleWindowResize);

		return () => {
			window.removeEventListener('wheel', handleScroll);
			window.removeEventListener('resize', handleWindowResize);
			window.removeEventListener('orientationchange', handleWindowResize);
		};
	}, []);

	return (
		<>
			<Head>
				<title>Writer's Blocks</title>
				<meta name="description" content="" />
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<Script src="https://app.lemonsqueezy.com/js/checkout.js" />

			<div>
				<div className="relative overflow-hidden h-screen">
					<div className="absolute inset-y-0 h-full w-full z-0" aria-hidden="true">
						<div className="relative h-full">
							<svg
								className="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
								width={404}
								height={784}
								fill="none"
								viewBox="0 0 404 784"
							>
								<defs>
									<pattern
										id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
										x={0}
										y={0}
										width={20}
										height={20}
										patternUnits="userSpaceOnUse"
									>
										<rect
											x={0}
											y={0}
											width={4}
											height={4}
											className="text-gray-200 dark:text-gray-800"
											fill="currentColor"
										/>
									</pattern>
								</defs>
								<rect
									width={404}
									height={784}
									fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)"
								/>
							</svg>
							<svg
								className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
								width={404}
								height={784}
								fill="none"
								viewBox="0 0 404 784"
							>
								<defs>
									<pattern
										id="d2a68204-c383-44b1-b99f-42ccff4e5365"
										x={0}
										y={0}
										width={20}
										height={20}
										patternUnits="userSpaceOnUse"
									>
										<rect
											x={0}
											y={0}
											width={4}
											height={4}
											className="text-gray-200 dark:text-gray-800"
											fill="currentColor"
										/>
									</pattern>
								</defs>
								<rect
									width={404}
									height={784}
									fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)"
								/>
							</svg>
						</div>
					</div>

					<div className="max-w-7xl mx-auto mt-12 px-4 sm:px-6">
						<nav
							className="relative flex items-center justify-between sm:h-10 md:justify-center"
							aria-label="Global"
						>
							<div className="flex items-center flex-1 absolute inset-y-0 left-0">
								<div className="flex items-center justify-between w-full w-auto">
									<Link href="/" passHref>
										<a>
											<span className="sr-only">Writer's Blocks</span>
											<svg
												width="51"
												height="25"
												viewBox="0 0 51 25"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M28.1197 25L8.56035 0H0L19.5593 25H28.1197Z"
													fill="currentColor"
												/>
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
								</div>
							</div>
							<div className="flex space-x-10">
								<div className="inline-flex space-x-4">
									<span className="inline-flex items-center text-sm font-medium text-gray-500 space-x-1">
										<span>{getEasterEggMessage(clickCount)}</span>
									</span>
									<span className="rounded bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-800 tracking-wide uppercase">
										{clickCount >= 10 ? (
											<a
												href="https://usewritersblocks.lemonsqueezy.com/checkout/buy/5b192dd2-ecfc-4510-bb8e-27b680722df3?logo=0dark=1&embed=1"
												className="lemonsqueezy-button"
											>
												{getEasterEggDiscountCode(clickCount)}
											</a>
										) : null}
									</span>
								</div>
							</div>
							<div className="absolute flex items-center justify-end inset-y-0 right-0">
								<span className="inline-flex rounded-md shadow">
									<button
										className="px-4 py-2 text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md"
										onClick={() => {
											setTheme(theme === 'light' ? 'dark' : 'light')
										}}
									>
										Change Theme
									</button>
								</span>
							</div>
						</nav>
					</div>

					<div className="relative h-[calc(100vh-3rem)] top-12">
						<div className="absolute top-1/3 left-1/2 translate-y-[-50%] translate-x-[-50%] mx-auto w-full max-w-7xl px-4 sm:px-6">
							<div className="text-center">
								<h1 className="text-6xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-7xl md:text-9xl">
									The WordPress editor{' '}
									<button
										ref={buttonRef}
										className={cx(
											'relative',
											isAnnotationActive
												? 'before:absolute before:z-[-1] before:bg-yellow-200 before:h-4/6 before:w-full before:bottom-[-5px] before:left-[-5px] before:rotate-2'
												: 'font-extrabold'
										)}
										onClick={handleAnnotationClick}
										{...{
											disabled: !isAnnotationActive,
										}}
									>
										{isAnnotationActive ? "youv'e" : "you've"}
										{!isAnnotationActive && !didConfettiExplode ? (
											<span className="absolute left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%]">
												<ConfettiExplosion
													force={0.4}
													duration={3000}
													particleCount={60}
													floorHeight={1000}
													floorWidth={1000}
												/>
											</span>
										) : null}
									</button>{' '}
									been waiting for.
								</h1>
								<p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
									Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
									fugiat veniam occaecat fugiat aliqua.
								</p>
								<div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
									<div className="rounded-md shadow">
										<a
											href="https://usewritersblocks.lemonsqueezy.com/checkout/buy/5b192dd2-ecfc-4510-bb8e-27b680722df3?logo=0dark=1&embed=1"
											className="lemonsqueezy-button w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black md:py-4 md:text-lg md:px-10"
										>
											Get started
										</a>
									</div>

									<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
										<button
											onClick={handleLiveDemoClick}
											className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
										>
											Live demo
										</button>
									</div>
								</div>
							</div>
						</div>

						<iframe
							ref={iframeRef}
							className={cx(
								'absolute top-0 h-[calc(100vh-8.5rem) sm:h-[calc(100vh-6.5rem)] w-screen will-change-transform transition-transform',
								'rounded-lg shadow-xl',
								!isIframeActive ? 'pointer-events-none' : ''
							)}
							id="block-editor"
							title="Block Editor"
							src="https://demo.usewritersblocks.com"
							frameBorder={0}
							width="100%"
							height="100%"
							style={{ transform: 'translateY(70%) scale(0.75)' }}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
