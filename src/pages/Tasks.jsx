import SurveyBlock from '@components/SurveyBlock/SurveyBlock';

import surveys from '@configs/surveys';

export default function Tasks() {
    return (
        <>
            <h1 className="page-title">Опросы</h1>
            {surveys.surveys.map(survey => (
                <SurveyBlock
                    key={survey.id}
                    id={survey.id}
                    title={survey.title}
                    price={survey.price}
                    priceType={survey.priceType}
                    link={survey.link}
                />
            ))}
        </>
    );
}