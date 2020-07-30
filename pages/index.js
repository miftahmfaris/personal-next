import styles from "../styles/Home.module.css";
import { Title, Overview, Biography } from "../components";
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
                    <Biography />
                </div>
                <div>Slide #3</div>
                <div>Slide #4</div>
                <div>Slide #5</div>
            </Swiper>
        </div>
    );
}
