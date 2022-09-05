import styles from "./logo.module.scss"

interface Props {
	title: string
}

const Logo = ({title}: Props) => {

	return (
		<div className={styles.logo}>
			<h4 className={styles.logo__title}>
				{title}
			</h4>
		</div>
	)
}

export default Logo