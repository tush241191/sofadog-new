// pages/index.jsx
import Head from 'next/head'

const Home = () => (
	<div>
		<Head>
			<title>Next.js TailwindCSS</title>
			<link rel="icon" href="/favicon.ico" />
			<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
		</Head>

		<div className="container">
			<div className="relative bg-gray-50 overflow-hidden">
				<div className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
					<div className="max-w-screen-xl mx-auto px-4 sm:px-6">
						<nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
							<div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
								<div className="flex items-center justify-between w-full md:w-auto">
									<a href="#" aria-label="Home">
										<img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Logo" />
									</a>
									<div className="-mr-2 flex items-center md:hidden">
										<button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
											<svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
											</svg>
										</button>
									</div>
								</div>
							</div>
							<div className="hidden md:flex md:space-x-10">
								<a href="#" className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Product</a>
								<a href="#" className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Features</a>
								<a href="#" className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Marketplace</a>
								<a href="#" className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Company</a>
							</div>
							<div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
								<span className="inline-flex rounded-md shadow">
									<a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-gray-50 active:text-indigo-700 transition duration-150 ease-in-out">
										Log in
									</a>
								</span>
							</div>
						</nav>
					</div>

					<div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
						<div className="rounded-lg shadow-md">
							<div className="rounded-lg bg-white shadow-xs overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
								<div className="px-5 pt-4 flex items-center justify-between">
									<div>
										<img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="" />
									</div>
									<div className="-mr-2">
										<button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Close menu">
											<svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
											</svg>
										</button>
									</div>
								</div>
								<div className="px-2 pt-2 pb-3">
									<a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Product</a>
									<a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Features</a>
									<a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Marketplace</a>
									<a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Company</a>
								</div>
								<div>
									<a href="#" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out" role="menuitem">
										Log in
									</a>
								</div>
							</div>
						</div>
					</div>

					<main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
						<div className="text-center">
							<h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
								Data to enrich your
								<br className="xl:hidden" />
								<span className="text-indigo-600">online business</span>
							</h2>
						</div>
					</main>
				</div>
			</div>
		</div>
	</div >
)

export default Home
