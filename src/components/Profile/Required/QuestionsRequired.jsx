import React from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { questionsStore } from '@stores/QuestionsStore';

import styles from '../Profile.module.css';

import Question from '../Question';

const QuestionsRequired = () => {
  const navigate = useNavigate();
  const groupId = 'basic';
  const group = questionsStore.getGroupById(groupId);

  const handleAnswer = (questionId, value) => {
    questionsStore.setAnswer(groupId, questionId, value);
  };

  return (
    <>
      <div className={styles.requiredTitle}>Для участия в платных опросах и опросах за призовые баллы оставьте, пожалуйста, немного информации о себе</div>
      {group.questions.map(question => (
        <Question
          key={question.id}
          question={question}
          value={question.value}
          onChange={handleAnswer}
        />
      ))}
      {group.answered && <button onClick={() => navigate('/')}>Продолжить</button>}
    </>
  );
};

export default observer(QuestionsRequired);