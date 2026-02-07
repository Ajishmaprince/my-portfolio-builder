import { useEffect, useRef } from "react";

const BinaryRain = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const digitCount = 80;
    const digits: HTMLDivElement[] = [];

    for (let i = 0; i < digitCount; i++) {
      const digit = document.createElement("div");
      digit.textContent = Math.random() > 0.5 ? "1" : "0";
      digit.className = "absolute text-primary font-orbitron text-sm";
      digit.style.left = `${Math.random() * 100}%`;
      digit.style.top = `${Math.random() * -100}px`;
      digit.style.animation = `fall ${Math.random() * 10 + 5}s linear infinite`;
      digit.style.animationDelay = `${Math.random() * 5}s`;
      digit.style.opacity = `${Math.random() * 0.5 + 0.1}`;
      container.appendChild(digit);
      digits.push(digit);
    }

    return () => {
      digits.forEach((d) => d.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden opacity-15 pointer-events-none z-0"
    />
  );
};

export default BinaryRain;
