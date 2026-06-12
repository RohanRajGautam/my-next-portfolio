// Deterministic pseudo-random so the server and client render the same sky.
const seeded = (i: number, salt: number) => {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return x - Math.floor(x);
};

const STAR_COUNT = 36;

const stars = Array.from({ length: STAR_COUNT }, (_, i) => ({
  left: `${(seeded(i, 1) * 100).toFixed(2)}%`,
  top: `${(seeded(i, 2) * 100).toFixed(2)}%`,
  size: seeded(i, 3) > 0.8 ? 2 : 1,
  duration: `${(2.5 + seeded(i, 4) * 4).toFixed(2)}s`,
  delay: `${(seeded(i, 5) * 6).toFixed(2)}s`,
  maxOpacity: (0.1 + seeded(i, 6) * 0.25).toFixed(2)
}));

const comets = [
  { top: '10%', left: '76%', duration: '17s', delay: '4s' },
  { top: '4%', left: '38%', duration: '29s', delay: '13s' }
];

const StarfieldBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {stars.map((star, i) => (
        <span
          key={i}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDuration: star.duration,
            animationDelay: star.delay,
            ['--star-max' as string]: star.maxOpacity
          }}
        />
      ))}

      {comets.map((comet, i) => (
        <span
          key={i}
          className="comet"
          style={{
            top: comet.top,
            left: comet.left,
            animationDuration: comet.duration,
            animationDelay: comet.delay
          }}
        />
      ))}
    </div>
  );
};

export default StarfieldBackground;
