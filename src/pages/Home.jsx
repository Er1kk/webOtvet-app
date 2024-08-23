import ProfileBlock from '@components/ProfileBlock/ProfileBlock';
import StatisticsBlock from '@components/StatisticsBlock/StatisticsBlock';
import NavigationBlock from '@components/NavigationBlock/NavigationBlock';
import InfoBlock from '@components/InfoBlock/InfoBlock';

export default function Home() {
    return (
        <>
            <ProfileBlock />
            <NavigationBlock />
            <StatisticsBlock />
            <InfoBlock
                text="Общайся с другими участниками в<br/> нашем чате @webotvet_chat"
                btnText="Перейти в чат"
                tgName="@webotvet_chat"
            />
        </>
    );

}