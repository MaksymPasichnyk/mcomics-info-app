import styles from "./button.module.scss"

interface Props {
	text: string
	type: "button" | "submit" | "reset",
}

const Button = ({text, type}: Props) => {
	return (
		<button
			className={styles.button}
			type={type}	
		>
			{text}
		</button>
	)
}

export default Button