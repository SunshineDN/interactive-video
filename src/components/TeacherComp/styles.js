import styled from "styled-components";
import {IoMdAddCircle} from "react-icons/io";
import {IoMdRemoveCircle} from "react-icons/io";
import {IoMdCloseCircle} from "react-icons/io";

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 50%;
    height: 100%;
    background-color: #f5f5f5;
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    padding: 20px;
    box-sizing: border-box;
    border-radius: 5px;
    margin: 20px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    column-gap: 10px;
    background-color: #f5f5f5;
    box-sizing: border-box;
    border-radius: 5px;
    margin-bottom: 20px;

    &:nth-child(7) {
        margin-top: 20px;
        margin-bottom: 0;
    }
`;

export const Profile = styled.h3`
    font-size: 1.5rem;
    font-weight: 500;
    color: #333;
    margin: 0;
    margin-bottom: 10px;
`;

export const QuestionSpan = styled.span`
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
    margin: 0;
`;

export const QuestionBtnAdd = styled(IoMdAddCircle)`
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    
    &:hover {
        color: rgb(141, 168, 51);
    }
`;

export const QuestionBtnRemove = styled(IoMdRemoveCircle)`
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    
    &:hover {
        color: rgb(141, 168, 51);
    }
`;

export const QuestionTitle = styled.label`
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
    margin: 0;
    margin-bottom: 10px;
`;

export const QuestionInput = styled.input`
    width: 100%;
    height: 40px;
    background-color: #fff;
    border: 1px solid #333;
    border-radius: 5px;
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
`;

export const QuestionDescriptionLabel = styled.label`
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
    margin: 0;
    margin-bottom: 10px;
`;

export const QuestionDescription = styled.input`
    height: 40px;
    width: 100%;
    background-color: #fff;
    border: 1px solid #333;
    border-radius: 5px;
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
`;

export const QuestionInsertVideo = styled.label`
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
    margin: 0;
    margin-bottom: 10px;
`;

export const QuestionVideoInput = styled.input`
    width: 100%;
    text-transform: uppercase;
    background-color: #f5f5f5;
    border: 1px solid #333;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
`;

export const QuestionAddObject = styled.span`
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
    margin: 0;
`;

export const QuestionAddObjectSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 5px;
    position: relative;
`;

export const QuestionAddObjectBtnClose = styled(IoMdCloseCircle)`
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    position: absolute;
    top: 10px;
    right: 10px;

    &:hover {
        color: rgb(168, 61, 51);
    }
`;

export const QuestionAddObjectTitle = styled.label`
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
    margin: 0;
    margin-bottom: 10px;
`;

export const QuestionAddObjectInput = styled.input`
    width: 100%;
    height: 40px;
    background-color: #fff;
    border: 1px solid #333;
    border-radius: 5px;
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
`;

export const QuestionAddObjectType = styled.label`
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
    margin: 0;
    margin-bottom: 10px;
`;

export const QuestionAddObjectTypeSelect = styled.select`
    width: 100%;
    height: 40px;
    background-color: #fff;
    border: 1px solid #333;
    border-radius: 5px;
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
`;

export const QuestionAddObjectVideoTimeline = styled.label`
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
    margin: 0;
    margin-bottom: 10px;
`;

export const QuestionAddObjectVideoTimelineInput = styled.input`
    width: 100%;
    height: 40px;
    background-color: #fff;
    border: 1px solid #333;
    border-radius: 5px;
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
`;

export const FinalizeBtn = styled.button`
    width: 100%;
    height: 40px;
    background-color: #333;
    border: 1px solid #333;
    border-radius: 5px;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        background-color: #fff;
        color: #333;
    }
`;