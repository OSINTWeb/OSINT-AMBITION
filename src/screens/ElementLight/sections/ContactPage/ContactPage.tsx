import { Header } from "../../../Header";
import { MobileHeader } from "../../../../components/mobile/MobileHeader";
import { MainContentSection } from "../MainContentSection/MainContentSection";
import SEO from "../../../../components/SEO";

export const ContactPage = (): JSX.Element => {
  const navItems = [
    { label: "Products", href: "#products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Forum", href: "#forum" },
  ];

  return (
    <div className="w-full min-h-screen bg-black flex flex-col max-[480px]:overflow-x-hidden max-[480px]:mt-[-120px]">
      <SEO
        title="Contact"
        description="Contact OSINT Ambition for collaborations, partnerships, and inquiries about OSINT solutions."
        canonical="https://osintambition.org/contact"
        imageUrl="https://osintambition.org/logo/osint_logo.png"
      />
      <div className="w-full bg-black overflow-hidden flex-1">
        {/* Desktop Header (hidden on mobile) */}
        <div className="hidden min-[760px]:block">
          <Header items={navItems} />
        </div>

        {/* Mobile Header (visible below 760px) */}
        <div className="min-[760px]:hidden">
          <MobileHeader items={navItems} />
        </div>

        {/* Contact Content */}
        <section className="w-full relative pt-60 pb-16 flex items-center">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
              
              {/* Left Side - Contact Heading */}
              <div className="flex-1 lg:max-w-md">
                <h1 className="[font-family:'Inter',Helvetica] font-normal text-white text-5xl lg:text-6xl leading-tight mb-8">
                  Contact
                </h1>
                <p className="[font-family:'Inter',Helvetica] font-normal text-zinc-300 text-lg leading-relaxed">
                  Get in touch with us for collaborations, partnerships, or any inquiries about our OSINT solutions.
                </p>
              </div>

              {/* Right Side - Contact Details */}
              <div className="flex-1 lg:flex-none lg:min-w-[400px]">
                <div className="space-y-12">
                  
                  {/* WhatsApp Section */}
                  <div className="space-y-3">
                    <h3 className="[font-family:'Inter',Helvetica] font-medium text-white text-xl">
                      WhatsApp
                    </h3>
                    <a href="https://wa.me/919991256829" className="[font-family:'Inter',Helvetica] font-normal text-zinc-200 text-lg hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                      +91 99912 56829
                    </a>
                  </div>

                  {/* Book Appointment Section */}
                  <div className="space-y-3">
                    <h3 className="[font-family:'Inter',Helvetica] font-medium text-white text-xl">
                      Book Appointment
                    </h3>
                    <a href="http://cal.com/@dheerajydv19" className="[font-family:'Inter',Helvetica] font-normal text-zinc-200 text-lg hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                      Click here
                    </a>
                  </div>

                  {/* Email Section */}
                  <div className="space-y-3">
                    <h3 className="[font-family:'Inter',Helvetica] font-medium text-white text-xl">
                      Email
                    </h3>
                    <a href="mailto:hi@osintambition.org" className="[font-family:'Inter',Helvetica] font-normal text-zinc-200 text-lg hover:text-white transition-colors">
                      hi@osintambition.org
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
      <div className="w-full bg-black">
        <MainContentSection />
      </div>
    </div>
  );
};
