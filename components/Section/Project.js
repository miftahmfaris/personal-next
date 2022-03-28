import { Container, Row, Col } from "reactstrap";
import styles from "../../styles/Project.module.css";

const Project = () => {
  const projects = [
    {
      link: "https://m.happyfresh.co.id",
      title: "HappyFresh Mobile",
      description: "This website is mobile version of HappyFresh.",
    },
    {
      link: "https://www.raibot.io",
      title: "Raibot",
      description: "Raibot is website for rent a trading robot.",
    },
    {
      link: "https://www.primatamaindonesia.com",
      title: "Primatama Indonesia",
      description:
        "This is profile company website. Primatama Indonesia is futsal and basketball club for kids.",
    },
    {
      link: "https://www.mgfriends.com",
      title: "MGFriends",
      description:
        "This website is loyalty program from mgholiday, so every member has point for every room booked. Member could redeem point and get reward based on their point.",
    },
    {
      link: "https://foodbook.netlify.app/",
      title: "FoodBook",
      description:
        "This website is final team project from bootcamp. This website useful for sharing your favorite food to everyone.",
    },
  ];

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
            {projects.map((project) => (
              <li>
                <h4>
                  <a
                    href={project.link}
                    target="_blank"
                    className={styles.link}
                  >
                    {project.title}
                  </a>
                </h4>
                <h5 className={styles.projectDescription}>
                  {project.description}
                </h5>
              </li>
            ))}
          </ul>
        </Col>
        <Col xs="12" md="6" lg="6" className={styles.displayCenterRight}>
          <h1>Latest Project</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Project;
