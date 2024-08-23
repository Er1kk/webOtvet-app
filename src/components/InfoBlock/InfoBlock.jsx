import { clickBtnGoToUrl } from '@utils/helper';

import styles from './InfoBlock.module.css';

const InfoBlock = ({ text, btnText, link, tgName }) => {

    return (
        <div className={styles.infoBlock}>
            <div
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: text }}
            />
            <button className={styles.btn} onClick={() => clickBtnGoToUrl(link, tgName)}>{btnText}</button>
        </div>
    );
}

export default InfoBlock;