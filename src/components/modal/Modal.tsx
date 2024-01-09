interface ModalProps {
  msg?: string;
  openSrc?: string;
  alt?: string;
  type: string;
  isOpen: boolean;
  closeMoodal: () => void;
}

export const Modal = (props: ModalProps) => {
  const {
    msg = "",
    openSrc = "",
    alt = "",
    type = "",
    isOpen,
    closeMoodal,
  } = props;
  return (
    <button
      className={`modal ${isOpen ? "fade-in" : "fade-out"}`}
      onClick={closeMoodal}
    >
      <div className="modal-container">
        {type === "img" ? (
          <img src={`/img/component-01/${openSrc}`} alt={alt} />
        ) : (
          <p>{msg}</p>
        )}
      </div>
    </button>
  );
};

export default Modal;
