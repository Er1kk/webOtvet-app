import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { questionsStore } from '@stores/questionsStore';

import styles from './Profile.module.css';

const SurveyGroups = () => {
    return (
        <div>
            <h2>Группы вопросов</h2>
            <div className={styles.groupsContainer}>
                {questionsStore.groups.map(group => (
                    <Link to={`/profile/${group.id}`} key={group.id} className={styles.group}>
                        {group.label} {group.answered ? '✓' : ''}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default observer(SurveyGroups);