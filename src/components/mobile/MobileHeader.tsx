import { useEffect, useState } from "react";
import { Button } from "../ui/button";

type NavItem = { label: string; href: string };

interface MobileHeaderProps {
  items: NavItem[];
}

export function MobileHeader({ items }: MobileHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setAnimateIn(true));
    } else {
      setAnimateIn(false);
    }
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full">
        <nav className="hidden min-[760px]:flex w-full py-3">
          <div className="w-full mx-auto px-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-lg">
              OSINT Ambition
            </div>
            <div className="w-px h-6 bg-[#ffffff66]" />
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {items.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="h-auto p-0 text-white text-sm hover:bg-transparent"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile Header - Below 760px */}
        <nav className="min-[760px]:hidden w-full px-4 py-3">
          <div className="flex items-center justify-between w-full mx-auto px-0">
            <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-base">
              OSINT Ambition
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1 p-2"
              aria-label="Toggle menu"
            >
              <span className={`h-0.5 w-6 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`h-0.5 w-6 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-6 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>

          {/* Full-screen Mobile Menu Overlay */}
          {isOpen && (
            <div className={`fixed inset-0 z-[60] bg-black/95 transition-opacity duration-300 ${animateIn ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center justify-between px-4 py-3">
                <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-base">
                  OSINT Ambition
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex flex-col gap-1 p-2"
                  aria-label="Close menu"
                >
                  <span className="h-0.5 w-6 bg-white rotate-45 translate-y-1.5" />
                  <span className="h-0.5 w-6 bg-white opacity-0" />
                  <span className="h-0.5 w-6 bg-white -rotate-45 -translate-y-1.5" />
                </button>
              </div>
              <div className="h-[calc(100vh-56px)] overflow-y-auto">
                <ul className="w-full max-w-[600px] mx-auto px-6 py-6" role="menu">
                  {items.map((item, index) => (
                    <li key={index}>
                      <Button
                        variant="ghost"
                        className="w-full h-auto p-0 bg-transparent hover:bg-transparent"
                        onClick={() => setIsOpen(false)}
                      >
                        <div
                          className={`flex items-center justify-between w-full py-4 border-b border-white/20 transition-all duration-300 ${animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                          style={{ transitionDelay: `${index * 60}ms` }}
                        >
                          <span className="[font-family:'Inter',Helvetica] text-white text-[22px] leading-[28px]">
                            {item.label}
                          </span>
                          <span className="[font-family:'Inter',Helvetica] text-white text-[22px] leading-[28px]">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
