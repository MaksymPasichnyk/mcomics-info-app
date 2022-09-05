import styles from "./input.module.scss";
import { SearchOutlined } from "@ant-design/icons"

interface Props {
  type: "text";
}

const Input = ({ type }: Props) => {
  return (
    <div className={styles.inputWrap}>
			<SearchOutlined className={styles.searchIcon} />
      <input className={styles.input} type={type} />
    </div>
  );
};

export default Input;
