import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog">
        {/* <button className="w-full font-bold border border-orange-600 p-1 rounded-md text-stone-900 text-center hover:bg-orange-600 transition delay-100">
          {buttonCaption}
        </button> */}
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
