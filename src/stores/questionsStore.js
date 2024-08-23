// src/stores/QuestionsStore.js
import { makeAutoObservable } from 'mobx';
import questionsData from '@configs/questions.json';

class QuestionsStore {
  groups = [];

  constructor() {
    makeAutoObservable(this);
    this.initializeGroups();
  }

  initializeGroups() {
    this.groups = questionsData.groups;
  }

  setAnswer(groupId, questionId, value) {
    const group = this.groups.find(g => g.id === groupId);
    if (group) {
      const question = group.questions.find(q => q.id === questionId);
      if (question) {
        question.value = value;
      }
    }
    this.updateGroupAnsweredStatus(groupId);
  }

  updateGroupAnsweredStatus(groupId) {
    const group = this.groups.find(g => g.id === groupId);
    if (group) {
      group.answered = group.questions.every(q => q.value !== null);
    }
  }

  getGroupById(groupId) {
    return this.groups.find(group => group.id === groupId);
  }

  get allQuestionsAnswered() {
    return this.groups.every(group => group.answered);
  }
}

export const questionsStore = new QuestionsStore();