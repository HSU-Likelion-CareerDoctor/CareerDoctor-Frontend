import React, { useState } from "react";
import styled from "styled-components";
import down from "../../img/down.png";

// Styled-components 정의
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4.2vw;
`;

const MainTitle = styled.div`
  color: #000;
  font-family: "Noto Sans KR";
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
  font-family: "Noto Sans KR";
  font-size: 1.2vw;
  font-weight: 700;
  margin-bottom: 1vw;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background: var(--grey-box-text, #b6b6b6);
  padding: 1.15vw 1vw;
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
  font-family: "Noto Sans KR";
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5vw;
  font-size: 1vw;
  border: none;
  background: transparent;
  outline: none;
  font-family: "Noto Sans KR";
  resize: none;
`;

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const DropdownText = styled.div`
  font-family: "Noto Sans KR";
  font-size: 1vw;
  font-weight: 700;
  color: #000;
`;

const DropdownIcon = styled.img`
  width: 1.2vw;
  height: 1.2vw;
  margin-left: 0.4vw;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 2.5vw;
  left: 0;
  background: white;
  border: 0.05vw solid #ccc;
  box-shadow: 0 0.2vw 0.4vw rgba(0, 0, 0, 0.1);
  width: 100%;
  z-index: 1;
  max-height: 10vw;
  overflow-y: auto;
`;

const DropdownItem = styled.div`
  padding: 0.5vw;
  cursor: pointer;
  border-bottom: 0.05vw solid #eee;

  &:hover {
    background-color: #f1f1f1;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const AddOptionButton = styled.button`
  background: transparent;
  border: 0.05vw solid #ccc;
  border-radius: 0.2vw;
  font-size: 1.2vw;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5vw;
  margin-left: 0.5vw;
  height: 1.8vw;
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5vw;
`;

const CompleteButton = styled.button`
  background: var(--grey-box-text, #b6b6b6);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #747272;
  border: 0.05vw solid #ccc;
`;
const ButtonSection = styled.div`
  display: flex;
  width: 16.7vw;
  height: 4vw;
  padding: 1.2vw 6vw;
`;

function CreateVote() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [options, setOptions] = useState(["", ""]);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const jobOptions = [
    "개발 · 데이터",
    "건축 · 시설",
    "고객서비스 · 리테일",
    "공공 · 복지",
    "교육",
    "금융 · 보험",
    "기획 · 전략",
    "디자인",
    "마케팅 · 광고 · MD",
    "물류 · 무역",
    "미디어 · 문화 · 스포츠",
    "법무 · 사무 · 총무",
    "식품 · 음료",
    "엔지니어링 · 설계",
    "영업",
    "운송 · 배송",
    "의료 · 바이오",
    "인사 · HR",
    "제조 · 생산",
    "회계 · 세무",
  ];

  return (
    <>
      <MainContainer>
        <MainTitle>고민되는 내용을 적어보세요!</MainTitle>
      </MainContainer>
      <BodyContainer>
        <Box>
          <Section>
            <Title>직무*</Title>
            <DropdownContainer onClick={toggleDropdown}>
              <DropdownText>{selectedOption || "전체"}</DropdownText>
              <DropdownIcon src={down} />
              {isDropdownOpen && (
                <DropdownMenu>
                  {jobOptions.map((option) => (
                    <DropdownItem
                      key={option}
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              )}
            </DropdownContainer>
          </Section>
          <Section>
            <Title>제목*</Title>
            <InputContainer>
              <Input placeholder="투표의 제목을 입력해주세요." />
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
                  <AddOptionButton onClick={addOption}>+</AddOptionButton>
                )}
              </OptionContainer>
            ))}
          </Section>
          <Section>
            <Title>투표의 설명*</Title>
            <InputContainer style={{ width: "57vw", height: "5vw" }}>
              <TextArea
                rows="3"
                placeholder="투표의 배경이 되는 설명을 100자 이내로 작성해주세요."
              />
            </InputContainer>
          </Section>
          <ButtonSection>
            <CompleteButton>작성 완료</CompleteButton>
          </ButtonSection>
        </Box>
      </BodyContainer>
    </>
  );
}

export default CreateVote;
