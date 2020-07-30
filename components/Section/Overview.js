import { Container, Row, Col } from "reactstrap";
import styles from "../../styles/Overview.module.css";

const Overview = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} sm={6} className={styles.displayCenter}>
                    <div className={styles.imageWidth}>
                        <img
                            src="/images/profile.jpeg"
                            alt="Profile"
                            className={styles.image}
                        />
                    </div>
                </Col>
                <Col xs={12} sm={6} className={styles.displayCenter}>
                    <div>
                        <h3>Hello Everyone</h3>
                        <h4>
                            My name is <b>Miftah Faris</b>, website developer
                            based in <b>Jakarta</b>
                        </h4>
                        <h4>
                            My name is <b>Miftah Faris</b>, website developer
                            based in <b>Jakarta</b>
                        </h4>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Overview;
