import styles from "../styles/Home.module.css";
import { Title, Overview, Experience, Skill, Project } from "../components";
import Swiper from "react-id-swiper";

export default function Home() {
    const params = {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
    };

    return (
        <div className={styles.container}>
            <Title title="Personal Website" />

            <Swiper {...params}>
                <div>
                    <Overview />
                </div>
                <div>
                    <Experience />
                </div>
                <div>
                    <Skill />
                </div>
                <div>
                    <Project />
                </div>
            </Swiper>
        </div>
    );
}
