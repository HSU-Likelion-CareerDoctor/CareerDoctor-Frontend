import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import plus from "../../img/Group 53.png";
import minus from "../../img/minus.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Styled-components 정의
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4.2vw;
`;

const MainTitle = styled.div`
  color: #000;
  font-family: "PretendardVariable";
  font-size: 1.4vw;
  font-weight: 700;
`;

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  margin-top: 3.8vw;
  gap: 1vw;
`;

const Section = styled.div`
  margin-bottom: 2vw;
`;

const Title = styled.div`
  color: #000;
  font-family: "PretendardVariable";
  font-size: 1.2vw;
  font-weight: 700;
  margin-bottom: 1vw;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background: #f9f9fa;
  padding: 1.15vw 1vw;
  border: 0.05vw solid #cdcdcd;
  border-radius: 0.2vw;
  margin-top: 0.5vw;
  width: 27vw;
  height: 1.3vw;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5vw;
  font-size: 1vw;
  border: none;
  background: transparent;
  outline: none;
  font-family: "PretendardVariable";
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5vw;
  font-size: 1vw;
  border: none;
  background: transparent;
  outline: none;
  font-family: "PretendardVariable";
  resize: none;
`;

const AddOptionButton = styled.button`
  border: none;
  width: 1.7vw;
  height: 1.7vw;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.6vw;
  height: 1.8vw;
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5vw;
`;

const CompleteButton = styled.button`
  display: flex;
  height: 4vw;
  padding: 1.2vw 6vw;
  justify-content: center;
  align-items: center;
  gap: 0.4vw;
  border-radius: 1.2vw;
  border: 0.05vw solid #efefef;
  background: ${({ isClickable }) => (isClickable ? "#558DFA" : "#efefef")};
  color: ${({ isClickable }) => (isClickable ? "#fff" : "#aeaeae")};
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: ${({ isClickable }) => (isClickable ? "pointer" : "default")};
`;

const ButtonSection = styled.div`
  display: flex;
  width: 53vw;
  height: 4vw;
  padding: 1.2vw 6vw;
  justify-content: flex-end;
`;

const OptionButtons = styled.div`
  display: flex;
  gap: 0.5vw;
`;

const MinusOptionButton = styled.button`
  border: none;
  width: 1.7vw;
  height: 1.7vw;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.9vw;
`;

function CreateVote() {
  const [title, setTitle] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [description, setDescription] = useState("");
  const [isClickable, setIsClickable] = useState(false);

  const navigate = useNavigate();
  const moveVoteRegister = () => {
    navigate("/voteRegister");
  };

  const handleTitleChange = (value) => {
    setTitle(value);
    checkAllFields();
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
    checkAllFields();
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
    checkAllFields();
  };

  const checkAllFields = () => {
    const isTitleValid = title.trim().length > 0;
    const areOptionsValid = options.every((option) => option.trim().length > 0);
    const isDescriptionValid = description.trim().length > 0;

    setIsClickable(isTitleValid && areOptionsValid && isDescriptionValid);
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const removeOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
    checkAllFields();
  };

  return (
    <>
      <Header />
      <MainContainer>
        <MainTitle>고민되는 내용을 적어보세요!</MainTitle>
      </MainContainer>
      <BodyContainer>
        <Box>
          <Section>
            <Title>제목*</Title>
            <InputContainer>
              <Input
                placeholder="투표의 제목을 입력해주세요."
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
              />
            </InputContainer>
          </Section>
          <Section>
            <Title>선택지 내용*</Title>
            {options.map((option, index) => (
              <OptionContainer key={index}>
                <InputContainer>
                  <Input
                    placeholder={`선택지 ${index + 1}`}
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                  />
                </InputContainer>
                {index === options.length - 1 && (
                  <OptionButtons>
                    {options.length > 2 && (
                      <MinusOptionButton onClick={() => removeOption(index)}>
                        <img src={minus} alt="minus" />
                      </MinusOptionButton>
                    )}
                    <AddOptionButton onClick={addOption}>
                      <img src={plus} alt="plus" />
                    </AddOptionButton>
                  </OptionButtons>
                )}
              </OptionContainer>
            ))}
          </Section>
          <Section>
            <Title>투표의 설명*</Title>
            <InputContainer style={{ width: "57vw", height: "5vw" }}>
              <TextArea
                rows="4"
                placeholder="투표의 배경이 되는 설명을 100자 이내로 작성해주세요."
                value={description}
                onChange={(e) => handleDescriptionChange(e.target.value)}
              />
            </InputContainer>
          </Section>
          <ButtonSection>
            <CompleteButton
              onClick={moveVoteRegister}
              isClickable={isClickable}
            >
              작성 완료
            </CompleteButton>
          </ButtonSection>
        </Box>
      </BodyContainer>
      <Footer />
    </>
  );
}

export default CreateVote;
