interface WaveBackgroundProps {
  children?: React.ReactNode;
}

export default function WaveBackground({ children }: WaveBackgroundProps) {
  return (
    <div className="relative min-h-screen bg-black z-0">
      {children}
    </div>
  );
}