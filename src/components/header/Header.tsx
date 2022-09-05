import Container from "../container/Container";
import Logo from "../logo/Logo";
import Button from "../common/button/Button";
import styles from "./header.module.scss";
import { Row, Col } from "antd";
import Form from "../form/Form";
import Input from "../common/input/Input";
import SearchBar from "./searchBar/SearchBar";
import { SyntheticEvent } from "react";

interface Props {
	handleFormSubmit: (ev: SyntheticEvent) => void,
}

const Header = ({handleFormSubmit}: Props) => {
  return (
    <header className={styles.header}>
      <Container>
        <Row justify="space-between" align="middle">
          <Col span={4}>
            <Logo title="Mcomics" />
          </Col>
          <Col span={20}>
            <Row wrap={false} justify="end" align="middle">
              <Form handleSubmit={handleFormSubmit}>
                <SearchBar />
              </Form>
              <Button type="button" text="Sign in" />
              <Button type="button" text="Sign up" />
            </Row>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
