import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-gradient-to-r from-[#6D5DF6] to-[#4F7CFF] text-white hover:brightness-110",

    secondary:
      "bg-[#171D33] text-slate-300 hover:bg-[#222B45]",

    outline:
      "border border-[#27324A] bg-transparent text-white hover:bg-white/10",

    ghost:
      "text-slate-300 hover:bg-[#171D33]",
  };

  return (
    <button
      className={clsx(
        "rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}