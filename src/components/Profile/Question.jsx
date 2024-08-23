import React from 'react';

import styles from './Profile.module.css';

const Question = ({ question, value, onChange }) => {
    const handleChange = (e) => {
        const newValue = e.target.value;
        onChange(question.id, newValue);
    };

    const handleMultiSelectChange = (e) => {
        const options = Array.from(e.target.selectedOptions, option => option.value);
        onChange(question.id, options);
    };

    const renderOptions = () => {
        switch (question.type) {
            case 'radio':
                return (
                    <div>
                        {question.options.map(option => (
                            <label key={option.id} className={styles.optionLabel}>
                                <input
                                    type="radio"
                                    name={question.id}
                                    value={option.id}
                                    checked={value === option.id}
                                    onChange={handleChange}
                                    className={styles.radioInput}
                                />
                                <span>{option.label}</span>
                            </label>
                        ))}
                    </div>
                );
            case 'select':
                return (
                    <select
                        value={value || ''}
                        onChange={handleChange}
                        className={styles.select}
                    >
                        <option value="">Выберите...</option>
                        {question.options.map(option => (
                            <option key={option.id} value={option.id} className={styles.option}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                );
            case 'checkbox':
                return (
                    <div className={styles.checkboxGroup}>
                        {question.options.map(option => (
                            <label key={option.id} className={styles.checkboxLabel}>
                                <input
                                    type="checkbox"
                                    value={option.id}
                                    checked={Array.isArray(value) && value.includes(option.id)}
                                    onChange={(e) => {
                                        const newValue = e.target.checked
                                            ? [...(value || []), option.id]
                                            : (value || []).filter(id => id !== option.id);
                                        onChange(question.id, newValue);
                                    }}
                                    className={styles.checkboxInput}
                                />
                                <span className={styles.checkboxText}>{option.label}</span>
                            </label>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className={styles.question}>
            <p className={styles.questionLabel}>{question.label}</p>
            {renderOptions()}
        </div>
    );
};

export default Question;