interface Props {
	comic: {
		title:string,
		images: {}[],
		description:string,

	}
}

const Card = ({comic}: Props) => {
	return (
		<div className="card">
			Content
		</div>
	)
}

export default Card