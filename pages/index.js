/**
 * External dependencies
 */
import { useState, useRef, useEffect, useContext } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import cx from 'classnames';
import Head from 'next/head';
import Link from 'next/link';
import { throttle } from 'lodash';

/**
 * Internal dependencies
 */
import { Context } from '@/context/index.js';

export default function Home() {
	// @ts-ignore
	const { state, dispatch } = useContext(Context);
	const [isAnnotationActive, setIsAnnotationActive] = useState(true);
	const [didConfettiExplode, setDidConfettiExplode] = useState(false);
	const buttonRef = useRef(null);
	const iframeRef = useRef(null);
	const iframeTop = useRef(0);
	const iframeScale = useRef(0);

	const handleLiveDemoClick = () => {
		iframeRef.current.style.transform = `translateY(0px) scale(0.75)`;

		setTimeout(() => {
			iframeRef.current.style.transform = `translateY(0px) scale(1)`;
		}, 100);

		dispatch({
			type: 'IS_DEMO_ACTIVE',
			payload: true,
		});
	};

	const handleAnnotationClick = (e) => {
		setIsAnnotationActive(false);

		// if (isAnnotationActive) {
		// 	setClickCount((prevCount) => prevCount + 1);
		// }

		setTimeout(() => {
			setDidConfettiExplode(true);
		}, 1000);
	};

	useEffect(() => {
		if (iframeRef.current) {
			const loadIframe = () => {
				iframeRef.current.src = iframeRef.current.getAttribute('data-src');
			};

			const { transform: currentIframeTransform } = window.getComputedStyle(
				iframeRef.current
			);
			/* eslint-disable-next-line no-undef */
			const { m42: currentIframeTop, m22: currentIframeScale } = new WebKitCSSMatrix(
				currentIframeTransform
			);

			iframeTop.current = currentIframeTop;
			iframeScale.current = currentIframeScale;

			document.body.classList.add('overflow-hidden');
			document.body.classList.add('h-screen');

			if (document.readyState === 'complete') {
				loadIframe();

				return () => {
					document.body.classList.remove('overflow-hidden');
					document.body.classList.remove('h-screen');
				};
			} else {
				window.addEventListener('load', loadIframe);

				return () => {
					window.removeEventListener('load', loadIframe);

					document.body.classList.remove('overflow-hidden');
					document.body.classList.remove('h-screen');
				};
			}
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
					dispatch({
						type: 'IS_DEMO_ACTIVE',
						payload: true,
					});
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
					dispatch({
						type: 'IS_DEMO_ACTIVE',
						payload: false,
					});
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
			<div className="overflow-hidden h-[calc(100vh-4.5rem)]">
				<div className="h-[calc(80vh-4.5rem)] flex flex-col justify-center mx-auto w-full max-w-7xl px-4 sm:px-6 text-center">
					<h1 className="tracking-tight font-extrabold text-gray-900 dark:text-gray-100 text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
						The WordPress editor{' '}
						<button
							ref={buttonRef}
							className={cx(
								'relative font-extrabold',
								isAnnotationActive
									? 'before:absolute before:z-[-1] before:bg-yellow-200 dark:before:bg-yellow-300 before:h-4/6 before:w-full before:bottom-[-5px] before:left-[-5px] before:rotate-2'
									: ''
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
						Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
						cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
					</p>
					<div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
						<div className="rounded-md shadow">
							<Link href="/pricing">
								<a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black md:py-4 md:text-lg md:px-10">
									Get started
								</a>
							</Link>
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

				<div className="h-[20vh]">
					<iframe
						ref={iframeRef}
						className={cx(
							'absolute top-[4.5rem] left-0 h-[calc(100vh-4.5rem)] w-screen will-change-transform transition-transform',
							'rounded-lg shadow-xl',
							!state.demo.isActive ? 'pointer-events-none' : ''
						)}
						id="block-editor"
						title="Block Editor"
						data-src="https://demo.usewritersblocks.com"
						frameBorder={0}
						width="100%"
						height="100%"
						style={{ transform: 'translateY(70%) scale(0.75)' }}
					/>
				</div>
			</div>
		</>
	);
}
