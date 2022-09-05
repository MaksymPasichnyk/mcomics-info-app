import Card from "./card/Card";

import styles from "./cardList.module.scss";

interface Props {
	children: JSX.Element | JSX.Element[],
}

const CardList = () => {
	return (
		<div className={styles.cards}>
			<ul className={styles["cards__list"]}>
				{
					[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
						return (
							<li key={index}>
								<Card />
							</li>
						)
					})
				}
			</ul>
		</div>
	)
}

export default CardList