import { Container, Row, Col } from "reactstrap";
import styles from "../../styles/Project.module.css";

const Project = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col
                    xs="12"
                    md="6"
                    lg="6"
                    className={`${styles.displayCenterLeft} ${styles.project}`}
                >
                    <ul>
                        <li>
                            <h4>
                                <a
                                    href="https://www.raibot.io"
                                    target="_blank"
                                    className={styles.link}
                                >
                                    Raibot
                                </a>
                            </h4>
                            <h5>Raibot is  </h5>
                        </li>
                        <li>
                            <h4>
                                <a
                                    href="https://www.primatamaindonesia.com"
                                    target="_blank"
                                    className={styles.link}
                                >
                                    Primatama Indonesia
                                </a>
                            </h4>
                            <h5>
                                This is profile company website. Primatama
                                Indonesia is futsal and basketball club for
                                kids.
                            </h5>
                        </li>
                        <li>
                            <h4>
                                <a
                                    href="https://www.mgfriends.com"
                                    target="_blank"
                                    className={styles.link}
                                >
                                    MGFriends
                                </a>
                            </h4>
                            <h5>
                                This website is loyalty program from mgholiday,
                                so every member has point for every room booked.
                                Member could redeem point and get reward based
                                on their point.
                            </h5>
                        </li>
                        <li>
                            <h4>
                                <a
                                    href="https://foodbook.netlify.app/"
                                    target="_blank"
                                    className={styles.link}
                                >
                                    Foodbook
                                </a>
                            </h4>
                            <h5>
                                This website is final team project from
                                bootcamp. This website useful for sharing your
                                favorite food to everyone.
                            </h5>
                        </li>
                    </ul>
                </Col>
                <Col xs="12" md="6" lg="6" className={styles.displayCenterLeft}>
                    <h1>Latest Project</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default Project;
