import { Link } from 'react-router-dom';

import styles from './NavigationBlock.module.css';

import Tasks from '@assets/tasks.svg?react';
import Arrow from '@assets/arrow.svg?react';

const NavigationBlock = () => {
    return (
        <>
            <Link to="/tasks" className={`card-box ${styles.btn}`}>
                <span className={styles.body}>
                    <Tasks className={styles.btnImg} />
                    Опросы
                </span>
                <Arrow className={styles.arrow} />
            </Link>
        </>
    );
}

export default NavigationBlock;