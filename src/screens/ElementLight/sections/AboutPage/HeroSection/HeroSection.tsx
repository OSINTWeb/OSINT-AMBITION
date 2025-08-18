export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full relative h-screen flex items-center justify-center">
      <div className="max-w-6xl text-center px-4">
        <h1 
          style={{
            fontFamily: '"Switzer", "Switzer Placeholder", sans-serif',
            fontSize: 'calc(var(--framer-root-font-size, 1rem) * 2.6)',
            fontStyle: 'normal',
            fontWeight: 400,
            letterSpacing: '0em',
            lineHeight: '1.2em',
            color: '#ffffff',
            textDecoration: 'none',
            textTransform: 'none',
            willChange: 'transform'
          }}
          className="mb-10"
        >
          What began as a small Telegram community of curious OSINT learners, quickly grew into a movement.
        </h1>
      </div>
    </section>
  );
};
