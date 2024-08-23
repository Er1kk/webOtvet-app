import telegramStore from '@stores/telegramStore';

const { tg } = telegramStore;

export const clickBtnGoToUrl = (link, tgName) => {
    tg.HapticFeedback.impactOccurred('soft');
    if (tgName) {
        tg.openTelegramLink(`https://t.me/${tgName}`);
    } else {
        tg.openLink(link);
    }
};

export const hapticFeedback = (style) => {
    if (tg && tg.HapticFeedback) {
        switch (style) {
            case 'selectionChanged':
                tg.HapticFeedback.selectionChanged()
                break;
            case 'soft':
                tg.HapticFeedback.impactOccurred('soft');
                break;
            default:
                tg.HapticFeedback.impactOccurred('light');
                break;
        }
    }
};