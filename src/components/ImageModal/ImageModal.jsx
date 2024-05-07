import Modal from "react-modal";

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

export const ImageModal = ({ onClose, card }) => {
  return (
    <div>
      <Modal
        isOpen={card}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <img src={card.urls.regular} alt={card.alt_description} />
        </div>
        <button onClick={onClose}>Close Modal</button>
      </Modal>
    </div>
  );
};
