"use client"
import { sendGAEvent } from "@next/third-parties/google"
import Link from "next/link"
export default function Nav() {
	return (
		<nav className="bg-white shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center">
						<div className="flex-shrink-0 flex items-center">
							<svg
								className="h-8 w-8 text-blue-500"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"></path>
								<path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
							</svg>
							<span className="ml-2 text-xl font-bold text-gray-800">
								Jobpilot
							</span>
						</div>
						<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
							<Link href="/">
								<div className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
									Home
								</div>
							</Link>
							<Link href="/find-job">
								<div className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
									Find Job
								</div>
							</Link>
							<Link href="/find-employers">
								<div className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
									Find Employers
								</div>
							</Link>
							<Link href="/dashboard">
								<div className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
									Dashboard
								</div>
							</Link>
						</div>
					</div>
					<div className="flex items-center">
						<div className="flex-shrink-0">
							<button
								onClick={() =>
									sendGAEvent("event", "buttonClicked", { value: "xyz" })
								}
								className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
							>
								Job Alerts
							</button>
						</div>
						<div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
							<button
								type="button"
								className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
							>
								<span className="sr-only">View notifications</span>
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
									></path>
								</svg>
							</button>
							<div className="ml-3 relative">
								<div>
									<button
										type="button"
										className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
										id="user-menu"
										aria-expanded="false"
										aria-haspopup="true"
									>
										<span className="sr-only">Open user menu</span>
										<img
											className="h-8 w-8 rounded-full"
											src="/api/placeholder/32/32"
											alt="User profile"
										/>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}
