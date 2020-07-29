import styles from "../styles/Home.module.css";
import { Title, Overview, Biography } from "../components";

export default function Home() {
    return (
        <div className={styles.container}>
            <Title title="Personal Website" />

            <main className={styles.main}>
                <Overview />
                <Biography />
            </main>
        </div>
    );
}
