import { Container, Row, Col } from "reactstrap";
import styles from "../../styles/Skill.module.css";

const Skill = () => {
  const skills = [
    "HTML",
    "CSS3",
    "git",
    "Javascript",
    "React",
    "React-Redux",
    "NextJS",
    "NodeJS",
    "ExpressJS",
    "MongoDB-Mongoose",
    "mySQL-Sequelize",
  ];

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
            {skills.map((skill) => (
              <li>
                <h4>{skill}</h4>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Skill;
