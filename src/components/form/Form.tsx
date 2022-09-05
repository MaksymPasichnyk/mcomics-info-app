import { SyntheticEvent } from "react";
import styles from "./form.module.scss";

interface Props {
	children: JSX.Element | JSX.Element[];
	handleSubmit: (ev: SyntheticEvent) => void,
}

const Form = ({children, handleSubmit}: Props) => {
	return (
		<form onSubmit={handleSubmit}  className={styles.form}>
			{children}
		</form>
	)
}

export default Form