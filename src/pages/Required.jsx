import { Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import QuestionsRequired from '@components/Profile/Required/QuestionsRequired';

const Profile = () => {
    return (
        <div className="app-container">
            <div className="required-page">
                <QuestionsRequired />
            </div>
        </div>
    );
};

export default observer(Profile);