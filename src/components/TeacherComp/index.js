import React, { useEffect, useState } from 'react'
import {
    Container, Profile, QuestionSpan, QuestionBtnAdd, QuestionBtnRemove, QuestionAddObjectBtnClose,
    QuestionAddObject, QuestionAddObjectInput, QuestionAddObjectSection,
    QuestionAddObjectTitle, QuestionAddObjectType, QuestionAddObjectTypeSelect, QuestionAddObjectVideoTimeline,
    QuestionAddObjectVideoTimelineInput, QuestionDescription, QuestionDescriptionLabel,
    QuestionInput, QuestionInsertVideo, QuestionTitle, QuestionVideoInput, FinalizeBtn, ButtonWrapper
} from './styles'

const TeacherComp = () => {
    const [isInsertingExam, setIsInsertingExam] = useState(false);
    const [isInsertingQuestion, setIsInsertingQuestion] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [exam, setExam] = useState({
        title: '',
        description: '',
        video: '',
        questions: []
    });

    function handleInput(event) {
        const inputValue = event.target.value;
        const regex = /^([0-5]?\d):([0-5]?\d)$/;
        if (!regex.test(inputValue)) {
            // Invalid format, ignore input
            return;
        }
        const formattedValue = inputValue.replace(regex, '$1:$2');
        event.target.value = formattedValue;
    }

    useEffect(() => {
        console.log(exam);
    }, [exam]);

    useEffect(() => {
        if(questions.length === 0) {
            setIsInsertingQuestion(false);
        }
    }, [questions]);

    function handleAddQuestionSection() {
        if (questions.filter(q => q.id === questions.length + 1).length > 0) {
            console.log(`Question ID: ${questions.length + 1}, Question Lenght: ${questions.length}`);
            setQuestions([...questions, { id: questions.length + 2, title: '', type: 'video', timeline: '' }]);
            return;
        }

        setQuestions([...questions, { id: questions.length + 1, title: '', type: 'video', timeline: '' }]);
        console.log(`Question ID: ${questions.length + 1}, Question Lenght: ${questions.length}`);
        setIsInsertingQuestion(true);
    }

    return (
        <Container onSubmit={
            e => {
                e.preventDefault();
                setExam({ ...exam, questions: questions });
            }
        } >
            <Profile>Perfil: Profesor</Profile>
            <ButtonWrapper>
                <QuestionSpan>Inserir avaliação:</QuestionSpan>
                {!isInsertingExam ? <QuestionBtnAdd onClick={e => setIsInsertingExam(!isInsertingExam)} /> : <QuestionBtnRemove onClick={e => setIsInsertingExam(!isInsertingExam)} />}
            </ButtonWrapper>
            {isInsertingExam && (
                <>
                    <QuestionAddObjectSection>
                        <QuestionTitle htmlFor='question'>Título da Avaliação</QuestionTitle>
                        <QuestionInput id='question' type="text" value={exam.title} onChange={
                            e => setExam({ ...exam, title: e.target.value })
                        } />
                        <QuestionDescriptionLabel htmlFor='description'>Descrição</QuestionDescriptionLabel>
                        <QuestionDescription id='description' type="text" value={exam.description} onChange={
                            e => setExam({ ...exam, description: e.target.value })
                        } />
                        <QuestionInsertVideo htmlFor='video'>Inserir vídeo</QuestionInsertVideo>
                        <QuestionVideoInput id='video' type="file" accept='.mov,.mp4,.mkv' onChange={
                            e => setExam({ ...exam, video: e.target.value })
                        } />
                        <ButtonWrapper>
                            <QuestionAddObject>Adicionar objeto: </QuestionAddObject>
                            <QuestionBtnAdd onClick={e => handleAddQuestionSection() }/>
                        </ButtonWrapper>
                    </QuestionAddObjectSection>
                    {isInsertingQuestion && (
                        <>
                            {questions.map(question => (
                                <QuestionAddObjectSection key={question.id}>
                                    <QuestionAddObjectBtnClose onClick={e => {
                                        setQuestions(questions.filter(q => q.id !== question.id));
                                    }}/>
                                    <QuestionAddObjectTitle htmlFor='title'>Título da Questão {question.id}</QuestionAddObjectTitle>
                                    <QuestionAddObjectInput id='title' value={question.title} type="text" onChange={e => {
                                        question.title = e.target.value;
                                        setQuestions([...questions]);
                                    }} />
                                    <QuestionAddObjectType htmlFor='type'>Tipo da resposta {question.id}</QuestionAddObjectType>
                                    <QuestionAddObjectTypeSelect id='type' value={question.type} onChange={
                                        e => {
                                            question.type = e.target.value;
                                            setQuestions([...questions]);
                                        }
                                    }>
                                        <option value="video" >Vídeo</option>
                                        <option value="audio" >Áudio</option>
                                    </QuestionAddObjectTypeSelect>
                                    <QuestionAddObjectVideoTimeline htmlFor='timeline'>Tempo do vídeo (mm:ss) - Questão {question.id}</QuestionAddObjectVideoTimeline>
                                    <QuestionAddObjectVideoTimelineInput id='timeline' value={question.timeline} onInput={e => handleInput(e)} type="text" onChange={
                                        e => {
                                            question.timeline = e.target.value;
                                            setQuestions([...questions]);
                                        }
                                    } />
                                </QuestionAddObjectSection>
                            ))}
                            <FinalizeBtn >Finalizar</FinalizeBtn>
                        </>
                    )}
                </>
            )}
        </Container>
    )
}

export default TeacherComp;