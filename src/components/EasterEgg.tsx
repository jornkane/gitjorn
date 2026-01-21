
import { useEffect, useRef } from "react";

const confettiColors = ["#FFD600", "#FF4081", "#00E676", "#2979FF", "#FF9100", "#FFF" ];

function launchConfetti(canvas: HTMLCanvasElement | null) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const W = canvas.width = window.innerWidth;
  const H = canvas.height = window.innerHeight;
  const confettiCount = 120;
  const confetti = Array.from({ length: confettiCount }, () => ({
    x: Math.random() * W,
    y: Math.random() * -H,
    r: 6 + Math.random() * 8,
    d: 2 + Math.random() * 4,
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    tilt: Math.random() * 10 - 5,
    tiltAngle: 0,
    tiltAngleIncremental: (Math.random() * 0.07) + 0.05
  }));
  let angle = 0;
  let animationFrame: number;
  function draw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, W, H);
    angle += 0.01;
    for (let i = 0; i < confettiCount; i++) {
      let c = confetti[i];
      c.tiltAngle += c.tiltAngleIncremental;
      c.y += (Math.cos(angle + i) + 1 + c.d) / 2;
      c.x += Math.sin(angle);
      c.tilt = Math.sin(c.tiltAngle) * 15;
      ctx.beginPath();
      ctx.lineWidth = c.r;
      ctx.strokeStyle = c.color;
      ctx.moveTo(c.x + c.tilt + c.r / 3, c.y);
      ctx.lineTo(c.x + c.tilt, c.y + c.tilt + 10);
      ctx.stroke();
    }
    animationFrame = requestAnimationFrame(draw);
  }
  draw();
  setTimeout(() => cancelAnimationFrame(animationFrame), 3500);
}

const EasterEgg = ({ show }: { show: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (show) {
      launchConfetti(canvasRef.current);
    }
  }, [show]);

  if (!show) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none" style={{zIndex: 100}} />
      <div className="relative flex flex-col items-center justify-center pointer-events-auto animate-fadeInUp">
        <div className="bg-gradient-to-br from-yellow-400 via-pink-400 to-blue-400 p-12 rounded-3xl border-8 border-white shadow-2xl animate-pulse text-center drop-shadow-2xl">
          <span className="text-6xl font-extrabold text-white drop-shadow-lg animate-wiggle block mb-4">🐣 DAVID MODE 🐣</span>
          <div className="mt-2 text-2xl text-white font-bold animate-fadeIn">Du fant påskeegget!</div>
          <div className="mt-6 text-lg text-yellow-100 font-mono animate-fadeIn delay-500">
            <span>Stay awesome, <span className="text-pink-200">David</span>!<br/>🌈✨🎉</span>
            <div className="mt-4 text-base text-blue-200 font-semibold animate-fadeIn delay-500">
              <span>Utviklet sammen med David 2IT1 (2025-2026) 🚀</span>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(-6deg); }
          50% { transform: rotate(6deg); }
        }
        .animate-wiggle { animation: wiggle 0.7s infinite; }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.7s cubic-bezier(.39,.575,.565,1) both; }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 1.2s both; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </div>
  );
};

export default EasterEgg;
