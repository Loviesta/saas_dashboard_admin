export default function CustomTooltip({
  active,
  payload,
  label,
}) {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div className="rounded-xl border border-[#27324A] bg-[#0C1224] p-4 shadow-xl">

      <p className="mb-2 text-sm text-slate-400">
        {label}
      </p>

      <h3 className="text-lg font-bold text-white">
        ${payload[0].value.toLocaleString()}
      </h3>

    </div>
  );
}