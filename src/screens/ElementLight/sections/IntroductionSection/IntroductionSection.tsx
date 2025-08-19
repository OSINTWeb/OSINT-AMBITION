import React, { useEffect, useState } from 'react';
import { useInView } from '../../../../hooks/useInView';

interface TextEncryptedProps {
  text: string;
  interval?: number;
}

const chars = "-_~`!@#$%^&*()+=[]{}|;:,.<>?";

export const TextEncrypted: React.FC<TextEncryptedProps> = ({ text, interval = 50 }) => {
  const [outputText, setOutputText] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.2, once: true });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!inView) return;
    let timer: ReturnType<typeof setInterval>;
    if (outputText !== text) {
      timer = setInterval(() => {
        if (outputText.length < text.length) {
          setOutputText((prev) => prev + text[prev.length]);
        } else {
          clearInterval(timer);
        }
      }, interval);
    }
    return () => clearInterval(timer);
  }, [text, interval, outputText, inView]);

  const remainder =
    outputText.length < text.length
      ? text
          .slice(outputText.length)
          .split("")
          .map(() => chars[Math.floor(Math.random() * chars.length)])
          .join("")
      : "";

  if (!isMounted) {
    return <span ref={ref as any}> </span>;
  }

  return (
    <span ref={ref as any} className="text-white">
      {outputText}
      {remainder}
    </span>
  );
};

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
            <TextEncrypted text="At OSINT Ambition, we are driven by our passion and mission of making OSINT accessible for everyone" interval={45} />
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
            <TextEncrypted text="and expanding the use of OSINT in industries worldwide." interval={45} />
          </p>
        </div>
      </div>
    </section>
  );
};
