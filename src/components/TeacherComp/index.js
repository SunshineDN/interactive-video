import React from 'react'
import { Container, Profile, QuestionSpan, QuestionBtn,
QuestionAddObject, QuestionAddObjectInput, QuestionAddObjectSection,
QuestionAddObjectTitle, QuestionAddObjectType, QuestionAddObjectTypeSelect, QuestionAddObjectVideoTimeline,
QuestionAddObjectVideoTimelineInput, QuestionDescription, QuestionDescriptionLabel,
QuestionInput, QuestionInsertVideo, QuestionTitle, QuestionVideoInput, FinalizeBtn, ButtonWrapper} from './styles'

const TeacherComp = () => {
    return (
                <Container>
                    <Profile>Perfil: Profesor</Profile>
                    <ButtonWrapper>
                        <QuestionSpan>Inserir avaliação:</QuestionSpan>
                        <QuestionBtn />
                    </ButtonWrapper>
                    <QuestionAddObjectSection>
                        <QuestionTitle htmlFor='question'>Título da Avaliação</QuestionTitle>
                        <QuestionInput id='question' type="text" />
                        <QuestionDescriptionLabel htmlFor='description'>Descrição</QuestionDescriptionLabel>
                        <QuestionDescription id='description' />
                        <QuestionInsertVideo htmlFor='video'>Inserir vídeo</QuestionInsertVideo>
                        <QuestionVideoInput id='video' type="file" accept='.mov,.mp4,.mkv' />
                        <ButtonWrapper>
                            <QuestionAddObject>Adicionar objeto:</QuestionAddObject>
                            <QuestionBtn />
                        </ButtonWrapper>
                    </QuestionAddObjectSection>
                        <QuestionAddObjectSection>
                            <QuestionAddObjectTitle htmlFor='title'>Título da Questão</QuestionAddObjectTitle>
                            <QuestionAddObjectInput id='title' type="text" />
                            <QuestionAddObjectType htmlFor='type'>Tipo da resposta</QuestionAddObjectType>
                            <QuestionAddObjectTypeSelect id='type'>
                                <option value="video">Vídeo</option>
                                <option value="audio">Áudio</option>
                            </QuestionAddObjectTypeSelect>
                            <QuestionAddObjectVideoTimeline htmlFor='timeline'>Tempo do vídeo</QuestionAddObjectVideoTimeline>
                            <QuestionAddObjectVideoTimelineInput id='timeline' type="text" />
                        </QuestionAddObjectSection>
                    <FinalizeBtn>Finalizar</FinalizeBtn>
                </Container>
    )
}

export default TeacherComp