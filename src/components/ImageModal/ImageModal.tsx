import newStyles from "./ImageModal.module.css";
import Modal from "react-modal";
import { MdFavorite, MdAccessTime, MdComment, MdPerson } from "react-icons/md"; 
import { Item } from "../../types/Item";

type Props = {
  isOpen: boolean; 
  current: Item | null; 
  onClose: () => void;
};

export default function ImageModal({ isOpen, current, onClose }: Props) {
  if (!current) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      overlayClassName={newStyles.overlay}
      className={newStyles.modalContent}
    >
      <div className={newStyles.modalContentWrapper}>
        <img
          src={current.urls?.regular}
          alt={current.alt_description || "Image"}
          className={newStyles.modalImage}
        />
        <ul className={newStyles.description}>
          {current.description && <li><MdComment size={24} /> {current.description}</li>}  
          <li><MdPerson size={24} /> {current.user?.username || "Unknown User"}</li> 
          <li><MdFavorite size={24} /> {current.likes}</li>  
          <li><MdAccessTime size={24} /> {new Date(current.created_at as string).toLocaleString()}</li> 
        </ul>
      </div>
    </Modal>
  );
}
