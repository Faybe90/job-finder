"use client"
import HeroCard from "@/components/HeroCard"
import { sendGAEvent } from "@next/third-parties/google"
import { BriefcaseBusiness, Building, Users } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Home() {
	const contentCard = [
		{
			icon: <BriefcaseBusiness />,
			title: "live jobs",
			number: 34434343,
		},
		{ icon: <Building />, title: "companies", number: 23324232 },
		{ icon: <Users />, title: "candidates", number: 3443 },
		{ icon: <BriefcaseBusiness />, title: "live jobs", number: 3232 },
	]
	const router = useRouter()
	function handleClick() {
		alert("clicked")
		router.push("/jobs")
	}

	return (
		<main className="flex font-sans min-h-screen flex-col items-center justify-between p-24">
			<div className="flex items-center">
				<div>
					<h1 className="text-5xl font-sans">
						Find a job that suits your interest & skills.
					</h1>
					<button onClick={() => handleClick()}>Get Started</button>

					<p className="font-sans">
						Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
						in scelerisque leo, eget sollicitudin velit bestibulum.
					</p>
					<input type="text" />
				</div>
				<Image src="/idea.png" alt="idea" width={500} height={500} />
			</div>
			<div className="flex gap-10">
				{contentCard.map((card) => (
					<HeroCard key={Math.random()} card={card} />
				))}
			</div>
			<button
				onClick={() => sendGAEvent("event", "buttonClicked", { value: "" })}
			>
				test event
			</button>
		</main>
	)
}
