/**
 * External dependencies
 */
import { useEffect, useContext, useRef } from 'react';
import Head from 'next/head';
import { CheckIcon } from '@heroicons/react/outline';

/**
 * Internal dependencies
 */
import Footer from '@/components/Footer';
import { Context } from '@/context/index.js';

const PLUGIN_ID = '9858';
const PLAN_ID = '18452';
const PUBLIC_KEY = 'pk_50be058a9f3a7baf8d8f74269d6dc';
const LOGO = 'https://usewritersblocks.com/static/img/logo.png';
const tiers = [
	{
		id: '18452',
		key: 'single',
		name: 'Single Site',
		licenses: '1',
		description: 'Enjoy one year of updates and support for a single website.',
		price: 49,
		href: 'https://usewritersblocks.lemonsqueezy.com/checkout/buy/cabb5505-23e7-4a58-8231-5e27bc1e6f5e?media=0&embed=1',
		features: [
			'14-Day money back guarantee',
			'Billed annually',
			'1 year of updates and support',
			'Cancel at any time',
		],
	},
	{
		id: '18452',
		key: 'unlimited',
		name: 'Unlimited Sites',
		licenses: 'unlimited',
		description:
			'Enjoy one year of updates and support for an unlimited number of your websites.',
		href: 'https://usewritersblocks.lemonsqueezy.com/checkout/buy/5b192dd2-ecfc-4510-bb8e-27b680722df3?media=0&embed=1',
		price: 99,
		features: [
			'Unlimited sites',
			'14-Day money back guarantee',
			'Billed annually',
			'1 year of updates and support',
			'Cancel at any time',
		],
	},
	{
		id: '18452',
		key: 'lifetime',
		name: 'Lifetime Access',
		licenses: 'unlimited',
		description:
			"Enjoy updates and support for an unlimited number of sites, for the lifetime of Writer's Blocks.",
		href: 'https://usewritersblocks.lemonsqueezy.com/checkout/buy/c179a779-4251-47b2-8aae-98fa49b05673?media=0&embed=1',
		price: 199,
		features: [
			'Unlimited sites',
			'14-Day money back guarantee',
			'One-time purchase, no renewals',
			'Lifetime of updates and support',
		],
	},
];

export default function Pricing() {
	const { state, dispatch } = useContext(Context);
	const handler = useRef(null);

	const lifetimeTier = tiers.find((tier) => tier.key === 'lifetime');

	useEffect(() => {
		if (state.demo.isActive) {
			dispatch({
				type: 'IS_DEMO_ACTIVE',
				payload: false,
			});
		}
	}, []);

	const handleButtonClick = (event) => {
		event.preventDefault();

		const { target } = event;

		if (!window.jQuery || !window.FS) {
			return;
		}

		if (!handler.current) {
			handler.current = window.FS.Checkout.configure({
				plugin_id: PLUGIN_ID,
				plan_id: PLAN_ID,
				public_key: PUBLIC_KEY,
				image: LOGO,
			});
		}

		handler.current.open({
			name: "Writer's Blocks",
			licenses: target.getAttribute('data-licenses'),
		});
	};

	return (
		<>
			<Head>
				<title>Pricing</title>
				<meta name="description" content="" />
				<script src="https://code.jquery.com/jquery-1.12.4.min.js" defer />
				<script src="https://checkout.freemius.com/checkout.min.js" defer />
			</Head>

			<div className="bg:gray-100 dark:bg-gray-900">
				<div className="pt-12 sm:pt-16 lg:pt-24">
					<div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
						<div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
							<p className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
								Simple no-tricks pricing
							</p>
							<p className="text-xl text-gray-500 dark:text-gray-300">
								If you're not satisfied, contact us within the first 14 days and
								we'll send you a full refund.
							</p>
						</div>
					</div>
				</div>
				<div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
					<div className="relative">
						<div className="absolute inset-0 h-3/4 bg-gray-100 dark:bg-gray-900" />
						<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
								{tiers
									.filter((tier) => tier.key !== 'lifetime')
									.map((tier) => (
										<div
											key={tier.name}
											className="flex flex-col rounded-lg shadow-lg overflow-hidden"
										>
											<div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
												<div>
													<h3
														className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600"
														id={tier.key}
													>
														{tier.name}
													</h3>
												</div>
												<div className="mt-4 flex items-baseline text-6xl font-extrabold text-gray-900">
													${tier.price}
												</div>
												<p className="mt-5 text-lg text-gray-500">
													{tier.description}
												</p>
											</div>
											<div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
												<ul className="space-y-4">
													{tier.features.map((feature) => (
														<li
															key={feature}
															className="flex items-start"
														>
															<div className="flex-shrink-0">
																<CheckIcon
																	className="h-6 w-6 text-green-500"
																	aria-hidden="true"
																/>
															</div>
															<p className="ml-3 text-base text-gray-700">
																{feature}
															</p>
														</li>
													))}
												</ul>
												<div className="rounded-md shadow">
													<button
														onClick={handleButtonClick}
														data-plan={tier.id}
														data-licenses={tier.licenses}
														className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
														aria-describedby={tier.key}
													>
														Get started
													</button>
												</div>
											</div>
										</div>
									))}
							</div>
						</div>
					</div>
					<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="max-w-md mx-auto space-y-4 lg:space-y-0 lg:max-w-5xl lg:flex mt-8 sm:mt-12 lg:mt-16">
							<div className="flex-1 px-6 py-8 lg:p-12">
								<h3
									className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight"
									id={lifetimeTier.key}
								>
									{lifetimeTier.name}
								</h3>
								<p className="mt-6 text-base text-gray-500">
									{lifetimeTier.description}
								</p>
								<div className="mt-8">
									<div className="flex items-center">
										<div className="flex-1 border-t-2 border-gray-200" />
									</div>
									<ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
										{lifetimeTier.features.map((feature) => (
											<li
												key={feature}
												className="flex items-start lg:col-span-1"
											>
												<div className="flex-shrink-0">
													<CheckIcon
														className="h-5 w-5 text-green-400"
														aria-hidden="true"
													/>
												</div>
												<p className="ml-3 text-sm text-gray-700">
													{feature}
												</p>
											</li>
										))}
									</ul>
								</div>
							</div>
							<div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
								<p className="text-lg leading-6 font-medium text-gray-900">
									Pay once, own it forever
								</p>
								<div className="mt-4 flex items-center justify-center text-5xl tracking-tight font-bold text-gray-900">
									<span>${lifetimeTier.price}</span>
									<span className="ml-3 text-xl font-medium text-gray-500 tracking-normal">
										USD
									</span>
								</div>
								<div className="mt-6">
									<div className="rounded-md shadow">
										<button
											onClick={handleButtonClick}
											data-plan={lifetimeTier.id}
											data-licenses={lifetimeTier.licenses}
											className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
											aria-describedby={lifetimeTier.key}
										>
											Get Access
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer background="light" />
		</>
	);
}
