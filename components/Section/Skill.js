import { Container, Row, Col } from "reactstrap";
import styles from "../../styles/Skill.module.css";

const Skill = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col xs="12" md="6" lg="6" className={styles.displayCenterLeft}>
                    <h1>Skillset</h1>
                </Col>
                <Col
                    xs="12"
                    md="6"
                    lg="6"
                    className={`${styles.displayCenterRight} ${styles.skill}`}
                >
                    <ul style={{ listStyle: "square" }}>
                        <li>
                            <h5>HTML5</h5>
                        </li>
                        <li>
                            <h5>CSS3</h5>
                        </li>
                        <li>
                            <h5>git</h5>
                        </li>
                        <li>
                            <h5>Javascript</h5>
                        </li>
                        <li>
                            <h5>React</h5>
                        </li>
                        <li>
                            <h5>React-Redux</h5>
                        </li>
                        <li>
                            <h5>NextJS</h5>
                        </li>
                        <li>
                            <h5>NodeJS</h5>
                        </li>
                        <li>
                            <h5>ExpressJS</h5>
                        </li>
                        <li>
                            <h5>MongoDB-Mongoose</h5>
                        </li>
                        <li>
                            <h5>mySQL-Sequelize</h5>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default Skill;
