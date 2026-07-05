import clsx from "clsx";

export default function Badge({
  children,
  color = "blue",
}) {
  const colors = {
    blue: "bg-blue-500/15 text-blue-400",
    green: "bg-green-500/15 text-green-400",
    red: "bg-red-500/15 text-red-400",
    yellow: "bg-yellow-500/15 text-yellow-400",
    purple: "bg-purple-500/15 text-purple-400",
    gray: "bg-slate-500/15 text-slate-300",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        colors[color]
      )}
    >
      {children}
    </span>
  );
}