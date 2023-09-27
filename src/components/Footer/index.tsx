import Link from 'next/link';
import styles from './styles.module.css';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.info}>
                <div className={styles.sitemap}>
                    <p className={styles.p}>SITEMAP</p>
                    <a href="">Home</a>
                    <a href="">Post</a>
                    <a href="">About</a>
                </div>
                <div className={styles.contactos}>
                    <p className={styles.p}>CONTACTESE CON NOSOTROS</p>
                    <a href="">Facebook</a>
                    <a href="">Twitter</a>
                    <a href="">TikTok</a>
                </div>
                <div className={styles.images}>
                    <img className={styles.next} src="/next.svg" alt="" />
                    <img className={styles.versel} src="/vercel.svg" alt="" />
                    <img className={styles.logo} src="/logoFooter.jpeg" alt="Aqui esta el logo" />
                </div>
            </div>
        </footer>
    );
}
export default Footer;