import { Hearts } from "react-loader-spinner";
import s from "./Loader.module.css";

export default function Loader() {
  return (
    <Hearts
      height="80"
      width="80"
      color="#900020"
      ariaLabel="hearts-loading"
      wrapperClass={s.loader}
      visible={true}
    />
  );
}