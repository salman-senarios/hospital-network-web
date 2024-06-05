import style from "./modal.module.scss";

const Modal = ({ open, children, className, handleClose }) => {
  return (
    <>
      {open && (
        <div
          className={style.modalWrapper}
          onClick={(e) => {
            e.nativeEvent.stopImmediatePropagation();
            handleClose?.();
          }}
        >
          <div
            className={`${style.modalContentWrapper} ${className}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <img
                src="assets/images/icons/cross.svg"
                alt=""
                onClick={handleClose}
                style={{ cursor: "pointer" }}
              />
            </div> */}
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
