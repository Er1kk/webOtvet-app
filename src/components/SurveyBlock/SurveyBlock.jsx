import { clickBtnGoToUrl } from '@utils/helper';

import styles from './SurveyBlock.module.css';

import Bonus from '@assets/bonus.svg?react';
import Rub from '@assets/rub.svg?react';

const SurveyBlock = ({ id, title, price, priceType, link }) => {

    const renderPriceIcon = () => {
        if (priceType === 'BONUS') {
            return <Bonus className={styles.priceIcon} />;
        } else if (priceType === 'RUB') {
            return <Rub className={styles.priceIcon} />;
        }
        return null; // Если priceType не указан или неизвестен
    };

    return (
        <div className={`card-box ${styles.surveyBlock}`}>
            <div className={styles.surveyId}>№{id}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>
                Цена:
                <span className={styles.amount}>{price} {renderPriceIcon()}</span>
            </div>
            <button className={styles.btn} onClick={() => clickBtnGoToUrl(link)}>Пройти опрос</button>
        </div>
    );
}

export default SurveyBlock;