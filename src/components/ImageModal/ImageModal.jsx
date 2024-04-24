import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export const ImageModal = ({ onOpen, onClose, card }) => {
  return (
    <div>
      <button onClick={onOpen}>Open Modal</button>
      <Modal
        isOpen={card}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <img src={card.urls.regular} alt={card.alt_dscription} />
        </div>
        <button onClick={onClose}>Close Modal</button>
      </Modal>
    </div>
  );
};
