import { observer } from 'mobx-react-lite';

//import userData from '@stores/userData';

import styles from './StatisticsBlock.module.css';

const StatisticsBlock = () => {
    return (
        <div className="card-box">
            <div className={styles.header}>Статистика доходов</div>
            <div className={styles.body}>
                <div className={styles.items}>
                    <div className={styles.item}>
                        <div className={styles.itemName}>Сегодня</div>
                        <div className={styles.itemAmount}>0</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.itemName}>За все время</div>
                        <div className={styles.itemAmount}>100</div>
                    </div>
                </div>
                <div className={styles.header} style={{ marginTop: 16 }}>Активность сегодня</div>
                <div className={styles.items}>
                    <div className={styles.item}>
                        <div className={styles.itemName}>Опросы</div>
                        <div className={styles.itemAmount}>0</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default observer(StatisticsBlock);