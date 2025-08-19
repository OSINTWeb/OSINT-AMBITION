import React from 'react';

export const IntroductionSection = (): JSX.Element => {
  return (
    <section className="w-full h-[100vh] flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p
            style={{
              fontFamily: '"Sentient", "Sentient Placeholder", serif',
              fontSize: 'calc(var(--framer-root-font-size, 1rem) * 1.75)',
              fontStyle: 'normal',
              fontWeight: 400,
              letterSpacing: '0em',
              lineHeight: '1.2em',
              color: '#e0f1f2',
              textDecoration: 'none',
                textTransform: 'none',
            }}
          >
            At OSINT Ambition, we are driven by our passion and mission of making OSINT accessible for everyone
          </p>
          <p
            style={{
              fontFamily: '"Sentient", "Sentient Placeholder", serif',
              fontSize: 'calc(var(--framer-root-font-size, 1rem) * 1.75)',
              fontStyle: 'normal',
              fontWeight: 400,
              letterSpacing: '0em',
              lineHeight: '1.2em',
              color: '#e0f1f2',
              textDecoration: 'none',
              textTransform: 'none',
            }}
          >
            and expanding the use of OSINT in industries worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};
