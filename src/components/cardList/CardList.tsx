//import Card from "./card/Card";
import { Col, Row, Card, Image, Grid } from "antd";
import styles from "./cardList.module.scss";


const { useBreakpoint } = Grid;
interface Comic {
  title: string;
  images: {
    path: string;
    extension: string;
  }[];
	id:number
	description:string,
}

interface Props {
  comics: Array<Comic>;
}

const CardList = ({ comics }: Props) => {

	const cardElements = comics.filter(({images}: Comic) => {
		return images.length
	}).map(({ title, images, id, description}: Comic) => {
    const imageUrl = `${images[0]?.path}.${images[0]?.extension}`;

    return (
      <Col 
				xs={{span: "24"}} 
				sm={{span: "12"}} 
				md={{span: "8"}} 
				lg={{span: "8"}} 
				xl={{span: "4"}}
				xxl={{span: "2"}}
				key={id}>
        <Card 
					title={title} 
					cover={<Image height={320} src={imageUrl} />} 
				>
				</Card>
      </Col>
    );
  });

  return (
    <div className={styles.cards}>
      <div className={styles["cards__list"]}>
        <Row gutter={[25, 16]}>{cardElements}</Row>
      </div>
    </div>
  );
};

export default CardList;
