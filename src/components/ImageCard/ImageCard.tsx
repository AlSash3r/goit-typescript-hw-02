import s from "./ImageCard.module.css";
import { Item } from "../../types/Item";

type Props = {
  values: Item;
  handleClick: (arg: Item) => void;
  handleLikes: () => void; 
  handleAuthorClick: () => void; 
};

export default function ImageCard({ values, handleClick, handleLikes, handleAuthorClick }: Props) {
  const { urls, user, alt_description, likes } = values;
  const avatar =
    (user?.profile_image as Record<string, string>)?.large ||
    (user?.profile_image as Record<string, string>)?.medium ||
    (user?.profile_image as Record<string, string>)?.small;
  const authorName = user?.username || "Unknown Author";

  return (
    <div className={s.wrapper} onClick={() => handleClick(values)}>
      <div className={s.imageContainer}>
        <img
          className={s.image}
          src={urls?.small || ""}
          alt={alt_description || "No description available"}
        />
      </div>
      <div className={s.details}>
        <div className={s.likes} onClick={handleLikes}>
          <span role="img" aria-label="heart">❤️</span> {likes || 0}
        </div>
        <div className={s.author} onClick={handleAuthorClick}>
          {avatar && <img src={avatar} alt="author avatar" className={s.avatar} />}
          <p>{authorName}</p>
        </div>
      </div>
    </div>
  );
}
