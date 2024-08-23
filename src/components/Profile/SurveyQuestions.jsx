import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { questionsStore } from '@stores/QuestionsStore';

import Question from './Question';

const SurveyQuestions = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const group = questionsStore.getGroupById(groupId);

  if (!group) {
    return <div>Группа не найдена</div>;
  }

  const handleAnswer = (questionId, value) => {
    questionsStore.setAnswer(groupId, questionId, value);
  };
  
  return (
    <div>
      <h2>{group.label}</h2>
      {group.questions.map(question => (
        <Question
          key={question.id}
          question={question}
          value={question.value}
          onChange={handleAnswer}
        />
      ))}
      <button onClick={() => navigate('/profile')}>К разделам</button>
    </div>
  );
};

export default observer(SurveyQuestions);