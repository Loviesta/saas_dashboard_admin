export default function ActivityItem({
  icon,
  title,
  description,
  time,
  color,
}) {
  return (
    <div className="flex gap-4">

      <div
        className={`flex h-11 w-11 items-center justify-center rounded-xl bg-[#171D33] ${color}`}
      >
        {icon}
      </div>

      <div className="flex-1">

        <h3 className="text-sm font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          {description}
        </p>

        <span className="mt-2 block text-xs text-slate-500">
          {time}
        </span>

      </div>

    </div>
  );
}