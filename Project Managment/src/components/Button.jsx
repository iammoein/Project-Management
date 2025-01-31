export default function Button({ children, ...props }) {
  return (
    <button
      className="bg-white px-4 py-2 rounded-lg text-sm hover:bg-[#e65f2b] hover:text-white transition duration-300"
      {...props}
    >
      {children}
    </button>
  );
}
