import { Button } from "../components/ui/button";
import { useScrollDirection } from "../hooks/useScrollDirection";

type NavItem = { label: string; href: string };

export function Header({ items }: { items: NavItem[] }) {
	const direction = useScrollDirection({ threshold: 12, initial: "up" });
	const isCompact = direction === "down";

	function scrollToHash(hash: string) {
		if (!hash) return;
		const target = document.querySelector(hash);
		if (target) {
			target.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}

	return (
		<header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
			<div
				className={`mx-auto transition-all duration-300 ease-out pointer-events-auto
					${isCompact
						? "mt-3 w-[27.9375rem] rounded-[27px] bg-[#000000cc] backdrop-blur px-[1.5625rem] py-[0.9375rem] border border-[#ffffff66]"
						: "mt-0 w-full rounded-none px-8 py-3"}`
				}
			>
				<nav className={`flex items-center ${isCompact ? "justify-center" : "justify-between max-w-[90rem] mx-auto px-6 py-5"}`}>
					<div className="flex items-center space-x-0">
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
								onClick={() => scrollToHash(item.href)}
								className="h-auto p-0 [font-family:'Inter',Helvetica] font-medium text-white text-[13.3px] leading-[16.8px] whitespace-nowrap hover:bg-transparent"
							>
								{item.label}
							</Button>
						))}
					</div>
				</nav>
			</div>
		</header>
	);
}
