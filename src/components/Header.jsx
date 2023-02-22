import styles from  './Header.module.css'
import iginiteLogo from '../assets/iginite-logo.svg'

export function Header(){
    return(
        <header className={styles.header}>
            <img src={iginiteLogo} alt="logo do iginite"/>
        </header>
    );
}