import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  let classes =
    "w-full bg-[#ebdfd7] rounded-sm p-1 border-b-2 focus:outline-none focus:border-b-stone-800";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-lg text-stone-800">{label}</label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
