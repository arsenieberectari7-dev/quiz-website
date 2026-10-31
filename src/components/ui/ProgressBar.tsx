export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="w-full h-2.5 bg-purple-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
      />
    </div>
  );
}
