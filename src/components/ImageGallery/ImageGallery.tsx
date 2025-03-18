import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { Item } from "../../types/Item";

type Props = {
  items: Item[]; 
  onModalOpen: (arg: Item) => void; 
  onLikesClick: (arg: Item) => void; 
  onAuthorClick: (arg: Item) => void;
};

export default function ImageGallery({ items, onModalOpen, onLikesClick, onAuthorClick }: Props) {
  return (
    <ul className={s.gallery}>
      {items.map((item) => (
        <li className={s.galleryItem} key={item.id}>
          <ImageCard
            values={item}
            handleClick={onModalOpen}
            handleLikes={() => onLikesClick(item)}
            handleAuthorClick={() => onAuthorClick(item)}
          />
        </li>
      ))}
    </ul>
  );
}
