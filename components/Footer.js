const navigation = {
	main: [
		{ name: 'Pricing', href: '/pricing' },
		{ name: 'Terms', href: '/terms' },
		{ name: 'Privacy', href: '/privacy' },
		{ name: 'Support Policy', href: '/support-policy' },
		{ name: 'hey@usewritersblocks.com', href: 'mailto:hey@usewritersblocks.com' },
	],
};

export default function Footer({ background = undefined }) {
	return (
		<footer className={background === 'light' ? 'bg-gray-50' : ''}>
			<div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
				<nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
					{navigation.main.map((item) => (
						<div key={item.name} className="px-5 py-2">
							<a
								href={item.href}
								className="text-base text-gray-300 hover:text-gray-700"
							>
								{item.name}
							</a>
						</div>
					))}
				</nav>
				<p className="mt-8 text-center text-base text-gray-300">
					&copy; {new Date().getFullYear()} Writer's Blocks
					{/* {' '}from{' '}
					<a
						className="underline text-gray-500 hover:text-gray-700"
						href="https://twitter.com/dimasc_io"
					>
						Ryan DiMascio
					</a> */}
				</p>
			</div>
		</footer>
	);
}
