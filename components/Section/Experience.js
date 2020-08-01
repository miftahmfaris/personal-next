import { Container, Row, Col } from "reactstrap";
import styles from "../../styles/Experience.module.css";

const Biography = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col
                    xs={12}
                    sm={6}
                    className={`${styles.displayCenterRight} ${styles.experience}`}
                >
                    <ol>
                        <li>
                            <h4>
                                Tech Mentor{" "}
                                <span className={styles.time}>
                                    (Sep 2019 - Present){" "}
                                </span>
                            </h4>
                            <h2>Impactbyte</h2>
                        </li>
                        <li>
                            <h4>
                                Software Engineering{" "}
                                <span className={styles.time}>
                                    (Jul 2018 - Sep 2019){" "}
                                </span>
                            </h4>
                            <h2>Coderscolony</h2>
                        </li>
                        <li>
                            <h4>
                                IT Helpdesk{" "}
                                <span className={styles.time}>
                                    (Okt 2015 - Des 2017){" "}
                                </span>
                            </h4>
                            <h2>Otoritas Jasa Keuangan</h2>
                        </li>
                    </ol>
                </Col>
                <Col xs={12} sm={6} className={styles.displayCenterLeft}>
                    <h1>Experience</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default Biography;
