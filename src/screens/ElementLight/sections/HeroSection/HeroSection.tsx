import { Button } from "../../../../components/ui/button";
import { FadeInUp } from "../../../../components/FadeInUp";

export const HeroSection = (): JSX.Element => {
  const missionStatement = "We democratize Open Source Intelligence by making powerful tools and practical education accessible to everyone — from professionals to everyday internet users.";

  const workingOnItems = [
    "Educating people about OSINT through comprehensive training programs",
    "Building affordable and user-friendly OSINT tools", 
    "Keeping communities updated with industry changes and trends",
    "Providing opportunities for emerging OSINT talent",
    "Bringing like-minded professionals together to collaborate"
  ];

  const workingOnIcons = [
    // Education (book)
    (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
        <path d="M4 6.5C4 5.12 5.12 4 6.5 4H20v14H7a3 3 0 0 0-3 3V6.5Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 17V6.5C7 5.67 7.67 5 8.5 5H20" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    // Tools (wrench)
    (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
        <path d="M14 7a4.5 4.5 0 0 1-5.66 5.66l-4.1 4.1a2 2 0 1 0 2.83 2.83l4.1-4.1A4.5 4.5 0 1 1 14 7Z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    // Updates (signal)
    (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
        <path d="M4 12a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 12a5 5 0 0 1 10 0" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
      </svg>
    ),
    // Opportunities (star)
    (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
        <path d="M12 3l2.47 5.01 5.53.8-4 3.9.94 5.49L12 16.9 7.06 18.2 8 12.7l-4-3.9 5.53-.8L12 3Z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    // Collaboration (users)
    (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M15 11a3 3 0 1 0 0-6" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 19a5 5 0 0 1 10 0" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 19a5 5 0 0 1 6-4.8" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  ];

  return (
    <section className="w-full relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <FadeInUp delayMs={50}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="[font-family:'Inter',Helvetica] text-xs font-medium tracking-wide text-zinc-200">OSINT Ambition</span>
              </div>
            </FadeInUp>

            <FadeInUp delayMs={120}>
              <h1 className="[font-family:'JetBrains_Mono',Helvetica] font-bold text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
                Making OSINT usable for everyone
              </h1>
            </FadeInUp>

            <FadeInUp delayMs={200}>
              <p className="[font-family:'Poppins',Helvetica] font-medium text-zinc-200 text-lg lg:text-xl leading-relaxed">
                {missionStatement}
              </p>
            </FadeInUp>

            <FadeInUp delayMs={300}>
              <div className="space-y-6">
                <p className="[font-family:'Poppins',Helvetica] font-normal text-zinc-300 text-base leading-relaxed">
                  What began as a small community of curious OSINT learners has grown into a revolutionary movement. 
                  We envision a world where OSINT is as ubiquitous as AI - transforming how we verify information, 
                  conduct background checks, and make informed decisions in our daily lives.
                </p>
                
                <p className="[font-family:'Poppins',Helvetica] font-normal text-zinc-300 text-base leading-relaxed">
                  While traditional OSINT companies focus solely on B2B solutions for large corporations, 
                  we're breaking barriers to make these powerful tools accessible to individuals, small businesses, 
                  and communities who need them for legitimate purposes.
                </p>
              </div>
            </FadeInUp>
          </div>

          {/* Right Column - Working On (no image) */}
          <div className="space-y-8">
            <FadeInUp delayMs={250}>
              <div className="space-y-6">
                <h3 className="[font-family:'JetBrains_Mono',Helvetica] font-semibold text-white text-lg">
                  What we're building
                </h3>

                {/* Image area – set your image via backgroundImage below */}
                <div className="w-full overflow-hidden rounded-lg border border-white/10 bg-white/5">
                  <div
                    id="building-image"
                    className="w-full h-48 sm:h-64 lg:h-72 bg-center bg-cover"
                    style={{ backgroundImage: "url(/project/profiler.me.jpg)" }}
                  />
                </div>

                <div className="space-y-3">
                  {workingOnItems.map((item, index) => (
                    <FadeInUp key={index} delayMs={300 + index * 100}>
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 h-6 w-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-blue-800">
                          {workingOnIcons[index] ?? (
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                              <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                          )}
                        </div>
                        <p className="[font-family:'Poppins',Helvetica] font-normal text-zinc-200 text-sm leading-relaxed">{item}</p>
                      </div>
                    </FadeInUp>
                  ))}
                </div>

                <FadeInUp delayMs={800}>
                  <div className="pt-4">
                    <Button
                      variant="ghost"
                      className="[font-family:'Inter',Helvetica] font-medium text-white text-sm h-auto px-3 py-2 rounded-full border border-white/10 hover:bg-white/5"
                    >
                      View roadmap
                    </Button>
                  </div>
                </FadeInUp>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
};
