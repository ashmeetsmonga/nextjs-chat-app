import Link from "next/link";

export default function Home() {
	return (
		<main className='w-full h-full flex justify-between flex-col gap-8 bg-gradient-to-br from-purple-900 to-black text-white p-10'>
			<div>
				<h1 className='font-bold text-5xl text-center mb-7 uppercase'>Msgs</h1>
				<h2 className='text-7xl leading-tight'>
					Connect friends <span className='font-semibold'>easily and quickly</span>
				</h2>
				<p className='mt-10'>
					<span className='font-semibold text-xl'>Msgs</span> is the perfect way to stay connected
					with friends and family
				</p>
			</div>
			<div>
				<button className='w-full bg-white p-4 text-black rounded-3xl font-semibold'>
					Sign up with mail
				</button>
				<p className='mt-7 text-center text-gray-300'>
					Existing account?{" "}
					<Link href={"login"} className='font-semibold text-white'>
						Login
					</Link>
				</p>
			</div>
		</main>
	);
}
