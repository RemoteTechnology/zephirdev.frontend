import { Button } from 'antd';
import styles from './Header.module.scss'

const Header = function () {
    return (
    <div className={styles.header}>
        <div className={styles.leftSide}>
            <div className={styles.logo}>
                <h1>Zephir<span className={styles.underLogo}>dev</span></h1>
            </div>
            <ul className={styles.menu}>
                <li><a>Услуги</a></li>
                <li><a>Портфолио</a></li>
                <li><a>Контакты</a></li>
            </ul>
        </div>
        <div className={styles.rightSide}>
            <Button className={styles.button} type="primary"
            style={{
                height: '100%',
                width: '100%',
                background: '#000000',
                borderRadius: 0,
                border: 'none',
                position: 'relative',
                overflowX: 'hidden',
            }}
            >Оставить заявку <span className={styles.flare}></span></Button>
        </div>
    </div>
    )
}

export default Header