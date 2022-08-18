/**
 * Internal dependencies
 */
import Footer from '@/components/Footer';

export default function Privacy() {
	return (
		<>
			<div className="relative py-16 overflow-hidden">
				<div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
					<div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
						<svg
							className="absolute top-12 left-full transform translate-x-32"
							width={404}
							height={384}
							fill="none"
							viewBox="0 0 404 384"
						>
							<defs>
								<pattern
									id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
										className="text-gray-200"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								width={404}
								height={384}
								fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
							/>
						</svg>
						<svg
							className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
							width={404}
							height={384}
							fill="none"
							viewBox="0 0 404 384"
						>
							<defs>
								<pattern
									id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
										className="text-gray-200"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								width={404}
								height={384}
								fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
							/>
						</svg>
						<svg
							className="absolute bottom-12 left-full transform translate-x-32"
							width={404}
							height={384}
							fill="none"
							viewBox="0 0 404 384"
						>
							<defs>
								<pattern
									id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
										className="text-gray-200"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								width={404}
								height={384}
								fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
							/>
						</svg>
					</div>
				</div>
				<div className="relative px-4 sm:px-6 lg:px-8">
					<div className="text-lg max-w-prose mx-auto">
						<h1>
							<span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl sm:tracking-tight">
								Support Policy
							</span>
						</h1>
					</div>
					<div className="mt-16 prose prose-indigo prose-lg text-gray-500 mx-auto">
						<p>
							This Support Policy describes what support you can expect from us in
							regards to Writer's Blocks support.
						</p>
						<p>
							If you have questions about this Support Policy or do not agree with it,
							please contact us at hey@usewritersblocks.com before using the Website.
							We may amend this Support Policy from time to time, so check this page
							to ensure that you are aware of any changes. This Support Policy is
							effective from 1 April 2020.
						</p>
						<p>
							By using any part of the Website or providing personal information to
							us, you consent to us processing it as set out in this Support Policy.
						</p>

						<h2 className="dark:text-white text-gray-900">
							What Our Support Service Covers
						</h2>
						<p>
							We only support our Products, sold on usewritersblocks.com. Our Support
							Service includes assistance with Product installations, configuration
							and use.
						</p>

						<h2 className="dark:text-white text-gray-900">Bug Fixing</h2>
						<p>
							We will fix any defects in our Products as quickly as possible after
							they are brought to our attention. We will also try to provide a
							solution via our Helpdesk for smaller defects or errors as a precursor
							to a more substantial update to the particular Product as part of our
							scheduled Product updates.
						</p>
						<p>If you think you have found a bug, please let us know.</p>

						<h2 className="dark:text-white text-gray-900">
							What Our Support Service Does Not Cover
						</h2>
						<p>
							Our Support Service does not cover our Products supplied by Third
							Parties. We may require you to disable Third Party products that are
							installed alongside our Products before we are able to assist you.
						</p>
						<p>
							We do not give general <a href="https://wordpress.org">WordPress</a>{' '}
							support. You can find resources and answers around WordPress in the{' '}
							<a href="https://wordpress.org/support">WordPress.org forums</a>.
						</p>

						<h2 className="dark:text-white text-gray-900">Product Support Channels</h2>
						<p>
							We provide Support Services through our Helpdesk. We do not provide our
							Support Service through any other channel (including, but not limited to
							direct e-mail, Facebook, Twitter or over the phone) at this time.
						</p>
						<p>
							You need to submit a ticket using the Helpdesk to take advantage of our
							Support Service. We may ask you to send us your login details if we need
							them to assist you. Our Helpdesk tickets, and information you share with
							us through these Helpdesk tickets, are confidential. Only you and our
							support team will see your ticket.
						</p>

						<h2 className="dark:text-white text-gray-900">General Information</h2>
						<p>
							Our general support hours are Monday to Friday, 08:00 to 17:00 (Pacific
							Standard Time, or GMT+7). Although we strive to respond to all queries
							within 24 hours, our actual response times may vary and we may take
							longer to respond to more advanced or technical queries.
						</p>

						<p>Last updated: August 16, 2022</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
