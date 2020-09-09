// pages/index.jsx
import Head from 'next/head';
import Link from 'next/link';

const Home = () => (
	<div>
		<Head>
			<title>So.Fa.Dog</title>
			<link rel="icon" href="/color-logo.ico" />
			<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
		</Head>

		<div className="main-body">
			<div className="relative h-screen overflow-hidden">
				<div className="relative pt-6">
					<div className="max-w-screen-xl mx-auto px-4 sm:px-6">
						<nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
							<div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
								<div className="flex items-center justify-between w-full md:w-auto">
									<a href="#" aria-label="Home">
										<img className="h-8 w-auto sm:h-10" src="white-logo.svg" alt="Logo" />
									</a>
									<div className="-mr-2 hidden flex items-center md:hidden">
										<button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
											<svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
											</svg>
										</button>
									</div>
								</div>
							</div>
						</nav>
					</div>

					<main className="mx-auto max-w-screen-xl h-screen flex items-center justify-center px-4 sm:px-6">
						<div className="text-center">
							<div className="flex items-center justify-center">
								<h2 className="text-xl -mt-1/3 sm:-mt-28 font-comfortaa-bold grid tracking-tight leading-10 font-thin text-gray-200 sm:text-4xl md:leading-none lg:text-6xl">
									<span className="text-lg font-comfortaa-bold tracking-wide text-gray-100 sm:text-2xl lg:text-base xl:text-4xl md:pb-8">NEW WEBSITE COMING SOON</span>
									<span className="grid">
										<label className="mb-8">News.Is.Dead</label>
										<label>Long.Live.Video.News</label>
									</span>
								</h2>
							</div>
							<div className="mt-10 flex items-center justify-center">
								<Link href="/ios">
									<img className="w-32 mr-2 cursor-pointer" src="/apple.svg"></img>
								</Link>
								<Link href="/android">
									<img className="w-32 ml-2 cursor-pointer" src="/android.svg"></img>
								</Link>
							</div>
						</div>

					</main>
				</div>
			</div>
		</div>
	</div >
)

export default Home
