import { Container, Row, Col } from "reactstrap";
import styles from "../../styles/Experience.module.css";

const Biography = () => {
  const jobs = [
    {
      title: "Software Engineer",
      experience: "Nov 2020 - Present",
      company: "HappyFresh",
    },
    {
      title: "Tech Mentor",
      experience: "Sep 2019 - Oct 2020",
      company: "Impactbyte",
    },
    {
      title: "Software Engineer",
      experience: "Jul 2018 - Sep 2019",
      company: "Coderscolony",
    },
    {
      title: "IT Helpdesk",
      experience: "Oct 2015 - Dec 2017",
      company: "Otoritas Jasa Keuangan",
    },
  ];

  return (
    <Container fluid={true}>
      <Row>
        <Col
          xs={12}
          sm={6}
          className={`${styles.displayCenterRight} ${styles.experience}`}
        >
          <ol>
            {jobs.map((job) => (
              <li className={styles.jobList}>
                <div className={styles.jobDetail}>
                  <div>
                    <h5>
                      {job.title}
                      <span className={styles.time}>({job.experience})</span>
                    </h5>
                  </div>
                  <h2>{job.company}</h2>
                </div>
              </li>
            ))}
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
