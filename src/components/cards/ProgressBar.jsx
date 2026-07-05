export default function ProgressBar({
  value,
}) {
  return (
    <div className="mt-3">

      <div className="h-2 overflow-hidden rounded-full bg-[#1A2238]">

        <div
          className="h-full rounded-full bg-gradient-to-r from-[#6D5DF6] to-[#4F7CFF]"
          style={{
            width: `${value}%`,
          }}
        />

      </div>

    </div>
  );
}