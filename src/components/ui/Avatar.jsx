export default function Avatar({
  src,
  size = "md",
}) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  return (
    <img
      src={src}
      alt="Avatar"
      className={`${sizes[size]} rounded-full border-2 border-[#4F7CFF] object-cover shadow-lg transition-transform duration-300 hover:scale-110`}
    />
  );
}