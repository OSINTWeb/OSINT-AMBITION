import { Button } from "../components/ui/button";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type NavItem = { label: string; href: string };

export function Header({ items }: { items: NavItem[] }) {
	const direction = useScrollDirection({ threshold: 12, initial: "up" });
	const isCompact = direction === "down";
	const navigate = useNavigate();

	const [isProductsOpen, setIsProductsOpen] = useState(false);
	let closeTimerRef: number | null = null;

	function handleNavigation(item: NavItem) {
		if (item.label === "About") {
			navigate("/about");
		} else if (item.label === "Contact") {
			navigate("/contact");
		} else if (item.label === "Products") {
			if (window.location.pathname !== "/") {
				navigate("/");
			}
			setTimeout(() => {
				const target = document.querySelector("#products");
				if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
			}, 100);
		} else if (item.label === "Forum") {
			if (window.location.pathname !== "/") {
				navigate("/");
			}
			setTimeout(() => {
				const target = document.querySelector("#forum");
				if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
			}, 100);
		} else {
			const target = document.querySelector(item.href);
			if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}

	const containerClass = `mx-auto transition-all duration-300 ease-out pointer-events-auto ${
		isCompact
			? "mt-3 w-[30rem] rounded-[27px] bg-[#000000cc] backdrop-blur px-[1.5625rem] py-[0.9375rem] border border-[#ffffff66]"
			: "mt-0 w-full rounded-none px-8 py-3"
	}`;
	const navClass = `flex items-center ${
		isCompact ? "justify-center" : "justify-between max-w-[90rem] mx-auto px-6 py-5"
	}`;

	return (
		<>
			<header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
				<div className={containerClass}>
					<nav className={navClass}>
					<div className="flex items-center space-x-0 cursor-pointer" onClick={() => navigate("/")}> 
						<div className="[font-family:'Inter',Helvetica] font-normal text-white text-xl leading-6 whitespace-nowrap">OSINT</div>
						<div className="[font-family:'Inter',Helvetica] font-normal text-white text-xl leading-6 whitespace-nowrap">Ambition</div>
					</div>

					{isCompact && (
						<div className="w-px h-6 bg-[#ffffff66] ml-[1.5625rem]" />
					)}

					<div className={`flex items-center ${isCompact ? "ml-[1.9375rem]" : ""} space-x-[1.25rem]`}>
						{items.map((item, index) => (
							<Button
								key={index}
								variant="ghost"
								onClick={() => handleNavigation(item)}
								onMouseEnter={() => {
									if (item.label === "Products") {
										if (closeTimerRef) {
											window.clearTimeout(closeTimerRef);
											closeTimerRef = null;
										}
										setIsProductsOpen(true);
									}
								}}
								onMouseLeave={() => {
									if (item.label === "Products") {
										closeTimerRef = window.setTimeout(() => setIsProductsOpen(false), 250);
									}
								}}
								className="relative h-auto p-0 [font-family:'Inter',Helvetica] font-medium text-white text-[13.3px] leading-[16.8px] whitespace-nowrap hover:text-zinc-300 hover:bg-transparent transition-colors duration-200 after:content-[''] after:absolute after:right-[-0.625rem] after:top-1/2 after:-translate-y-1/2 after:h-4 after:w-px after:bg-white/20 last:after:hidden"
							>
								{item.label}
							</Button>
						))}
					</div>
					</nav>
				</div>
			</header>
			{isProductsOpen && (
				<div className="fixed inset-x-0 top-[70px] z-40 pointer-events-auto" onMouseEnter={() => {
					if (closeTimerRef) {
						window.clearTimeout(closeTimerRef);
						closeTimerRef = null;
					}
					setIsProductsOpen(true);
				}} onMouseLeave={() => {
					closeTimerRef = window.setTimeout(() => setIsProductsOpen(false), 250);
				}}>
					<div className="mx-auto w-full max-w-[90rem] bg-[#0b0b0beb] backdrop-blur text-white px-6 py-8 transition-all duration-300 ease-out">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
							<div className="space-y-6">
							<div className="pt-2" onMouseEnter={() => {
									const el = document.getElementById('mega-image');
									if (el) el.style.backgroundImage = "url(/project/conf.png)";
								}}>
									<div className="flex items-center gap-2">
										<img src="/project/conf.png" alt="OSINTCon" className="w-10 h-10" />
										<a href="https://osintconference.com" target="_blank" rel="noopener noreferrer" className="[font-family:'Inter',Helvetica] text-white text-[18px] leading-6 mb-1 hover:text-zinc-300 cursor-pointer">OSINTCon</a>
									</div>
									<div className="[font-family:'Inter',Helvetica] text-zinc-300 text-[14px] leading-6">Free global online conference connecting 4000+ OSINT professionals.</div>
								</div>
								<div className="pt-2" onMouseEnter={() => {
									const el = document.getElementById('mega-image');
									if (el) el.style.backgroundImage = "url(/project/profiler.me.jpg)";
								}}>
									<a href="https://profiler.me/" target="_blank" rel="noopener noreferrer" className="[font-family:'Inter',Helvetica] text-white text-[18px] leading-6 mb-1 hover:text-zinc-300 cursor-pointer">Profiler.me</a>
									<div className="[font-family:'Inter',Helvetica] text-zinc-300 text-[14px] leading-6">Helps you generate detailed online profiles from public data.</div>
								</div>
								<div className="pt-2" onMouseEnter={() => {
									const el = document.getElementById('mega-image');
									if (el) el.style.backgroundImage = "url(/project/news.png)";
								}}>
									<a href="https://osintupdates.com" target="_blank" rel="noopener noreferrer" className="[font-family:'Inter',Helvetica] text-white text-[18px] leading-6 mb-1 hover:text-zinc-300 cursor-pointer">OSINT Updates</a>
									<div className="[font-family:'Inter',Helvetica] text-zinc-300 text-[14px] leading-6">Real-time signal detection and OSINT news aggregation.</div>
								</div>
								<div className="pt-2" onMouseEnter={() => {
									const el = document.getElementById('mega-image');
									if (el) el.style.backgroundImage = "url(/project/blogs.png)";
								}}>
									<a href="https://osintindia.com" target="_blank" rel="noopener noreferrer" className="[font-family:'Inter',Helvetica] text-white text-[18px] leading-6 mb-1 hover:text-zinc-300 cursor-pointer">OSINT India (Blogs)</a>
									<div className="[font-family:'Inter',Helvetica] text-zinc-300 text-[14px] leading-6">Guides, research and field notes from our team.</div>
								</div>
								<div className="pt-2" onMouseEnter={() => {
									const el = document.getElementById('mega-image');
									if (el) el.style.backgroundImage = "url(/project/fourm.png)";
								}}>
									<a href="https://forum.osintambition.org" target="_blank" rel="noopener noreferrer" className="[font-family:'Inter',Helvetica] text-white text-[18px] leading-6 mb-1 hover:text-zinc-300 cursor-pointer">Community Forum</a>
									<div className="[font-family:'Inter',Helvetica] text-zinc-300 text-[14px] leading-6">Discuss, ask and collaborate with fellow OSINT practitioners.</div>
								</div>
								
							</div>
							<div className="hidden md:block">
								<div id="mega-image" className="w-full h-full min-h-[320px] rounded-md bg-cover bg-center" style={{ backgroundImage: "url(/project/conf.png)" }} />
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
