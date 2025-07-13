interface WaveBackgroundProps {
  children?: React.ReactNode;
}

export default function WaveBackground({ children }: WaveBackgroundProps) {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[200px] bg-[url('/Images/wave.svg')] bg-repeat-y bg-center bg-contain opacity-80">
      </div>
      {children}
    </div>
  );
}