import { Container, Row, Col } from "reactstrap";
import styles from "../../styles/Overview.module.css";
import { Logo } from "../styled";

const Overview = () => {
  return (
    <Container fluid={true}>
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
        <Col
          xs={12}
          sm={6}
          className={`${styles.displayCenter} ${styles.flexStart} ${styles.greeting}`}
        >
          <div>
            <h3>Hello Everyone</h3>
            <h4>
              Call me <b className={styles.bold}>Faris</b>,
            </h4>
            <h4>
              I'am Website Developer based in <b>Cimahi</b>
            </h4>
            <Logo>
              <div>
                <a href="https://github.com/miftahmfaris" target="_blank">
                  <img src="/images/logo_github.png" alt="github" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/miftahmfaris/"
                  target="_blank"
                >
                  <img src="/images/logo_instagram.png" alt="instagram" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/miftahmfaris"
                  target="_blank"
                >
                  <img src="/images/logo_linkedin.png" alt="linkedin" />
                </a>
              </div>
              <div>
                <a href="mailto: miftahmfaris@yahoo.co.id">
                  <img src="/images/logo_email.png" alt="email" />
                </a>
              </div>
            </Logo>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Overview;
