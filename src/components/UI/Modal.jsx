import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

export default function Modal({ open, onClose, className = "", children }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (open && modal && !modal.open) {
      modal.showModal();
    } else if (!open && modal && modal.open) {
      modal.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
