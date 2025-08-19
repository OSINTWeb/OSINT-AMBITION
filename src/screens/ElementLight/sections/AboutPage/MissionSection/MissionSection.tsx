export const MissionSection = (): JSX.Element => {
  return (
    <section className="w-full relative h-[50vh] flex items-center justify-center">
      <div className="max-w-5xl text-center px-8">
        <p 
          style={{
            fontFamily: '"Sentient", "Sentient Placeholder", serif',
            fontSize: 'calc(var(--framer-root-font-size, 1rem) * 1.75)',
            fontStyle: 'normal',
            fontWeight: 400,
            letterSpacing: '0em',
            lineHeight: '1.2em',
            color: '#ffffff',
            textDecoration: 'none',
            textTransform: 'none',
            textAlign: 'center'
          }}
        >
          We don&apos;t just teach OSINT, we spark a mindset. One that sees
          patterns in chaos, stories in data, and truth beneath the surface.
        </p>
      </div>
    </section>
  );
};
