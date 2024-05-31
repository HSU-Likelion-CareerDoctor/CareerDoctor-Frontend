//#마이페이지_스펙소견서_피드백 후기 작성하기
import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 60%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2vw;
  background-color: #ffffff;
  border-radius: 10px;
`;

const Titel = styled.div`
  font-family: "PretendardVariable";
  font-size: 1.5vw;
  font-weight: 700;
  margin-bottom: 3vw;
`;

const SubHeader = styled.div`
  display: flex;
  align-self: flex-start;
  font-family: "PretendardVariable";
  font-size: 1vw;
  font-weight: 700;
  margin-bottom: 1vw;
`;

const SubsubHeader = styled.div`
  display: flex;
  align-self: flex-start;
  font-family: "PretendardVariable";
  font-size: 0.8vw;
  font-weight: 700;
  margin-bottom: 1vw;
`;

const SpecContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5vw;
  margin-bottom: 4vw;
  width: 100%;
`;

const SpecBox = styled.div`
  padding: 1vw;
  font-family: "PretendardVariable";
  font-size: 0.8vw;
  font-weight: 600;
  text-align: center;
  background-color: ${(props) => (props.selected ? "#6E6E6E" : "#ffffff")};
  color: ${(props) => (props.selected ? "#fff" : "#000")};
  border: 1px solid #eee;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #6e6e6e;
    color: white;
  }
`;

const TextBlock = styled.div`
  font-family: "PretendardVariable";
  font-size: 0.6vw;
  line-height: 1.5;
  margin-bottom: 2vw;
  width: 100%;
  background-color: #f2f2f2;
`;

const FeedbackSection = styled.div`
  width: 100%;
  margin-top: 3vw;
`;

const FeedbackLabel = styled.label`
  font-family: "PretendardVariable";
  font-size: 1vw;
  font-weight: 700;
  margin-bottom: 0.5vw;
`;

const FeedbackTextarea = styled.textarea`
  width: 100%;
  height: 5vw;
  font-family: "PretendardVariable";
  font-size: 0.8vw;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  resize: none;
  margin-top: 0.5vw;
  background-color: #f2f2f2;
  padding-top: 1vw;
`;

const Button = styled.button`
  display: flex;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1vw;
  background-color: #edf4f9;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  margin-top: 0.5vw;
  font-size: 0.8vw;
  font-weight: 700;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 1vw;
`;

const SubmitButton = styled(Button)`
  width: 25%;
  background-color: #558dfa;
  border-radius: 1vw;
  color: white;
  &:hover {
    background-color: #4f638a;
  }
`;

const FeedbackOptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1vw;
  width: 100%;
`;

const Helf = styled.div`
  display: flex;
  flex-direction: column;
`;

const HelpfulQuestion = styled.div`
  font-family: "PretendardVariable";
  font-size: 0.9vw;
  font-weight: bold;
  margin-left: 1vw;
  margin-left: 5vw;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5vw;
  margin-left:5vw;
`;

const RadioButtonLabel = styled.label`
  font-family: "PretendardVariable";
  font-size: 0.8vw;
  font-weight: 600;
  margin-bottom: 0.5vw;
`;

const RadioButton = styled.input`
  margin-right: 0.5vw;
`;


const FeedbackPage = () => {
  const [selectedSpec, setSelectedSpec] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [otherText, setOtherText] = useState("");
  const [showHelpfulQuestion, setShowHelpfulQuestion] = useState(false);
  const [showUnhelpfulQuestion, setShowUnhelpfulQuestion] = useState(false);

  const handleSpecBoxClick = (spec) => {
    setSelectedSpec(selectedSpec === spec ? null : spec);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value !== "기타") {
      setOtherText("");
    }
  };

  const handleOtherTextChange = (event) => {
    setOtherText(event.target.value);
  };

  const handleButtonClick = (buttonType) => {
    if (
      buttonType === "많은 도움이 되었어요!" ||
      buttonType === "한 번쯤은 받아볼만해요."
    ) {
        setShowHelpfulQuestion(true);
        setShowUnhelpfulQuestion(false);
    } else {
      setShowHelpfulQuestion(false);
      setShowUnhelpfulQuestion(true);
    }
  };

  return (<>
    <Header/>
    <PageContainer>
      <Titel>000님에게 0000년 00월 00일 받은 소견서</Titel>
      <SubHeader>소견서</SubHeader>
      <TextBlock>
        소견서 내용 작성된 소견서 내용 작성된 소견서 내용 작성된 소견서 내용
        작성된 소견서 내용 작성된 소견서 내용 작성된 소견서 내용 작성된 소견서
        내용 작성된 소견서 내용 작성 된 소견서 내용 작성된 소견서 내용 작성된
        소견서 내용 작성된 소견서 내용 작성된 소견서 내용 작성된 소견서 내용
        작성된 소견서 내용 작성된 소견서 내용 작성된 소견서 내용 작성된 소견서
        내용 작성된 소견서 내용 작성된 소견서 내용 작성된 소견서 내용 작성된
        소견서 내용 작성된 소견서 내용 작성된 소견서 내용 작성된 소견서 내용
        작성된 소견서 내용 작성된 소견서 내용 작성된 소견서 내용 작성된 소견서
        내용 작성된 소견서 내용 작성된 소견서 내용 작성된 소견서 내용 작성된
        소견서 내용 작성된 소견서 내용 작성된 소견서 내용 작성된 소견서 내용
        작성된 소견서 내용 작성된 소견서 내용 작성된 소견서 내용 작성된 소견서
        내용 작성된 소견서 내용 작성된 소견서 내용 작성된 소견서 내용 작성된
        소견서 내용 작성된 소견서 내용 작성된 소견서 내용 작성된 소견서 내용
        작성된 소견서 내용 작성된 소견서 내용 작성된 소견서 내용 작성된 소견서
        작성된 소견서 내용 작성된 소견서 내용 내용
      </TextBlock>
      <SubHeader>지금 가장 필요한 스펙</SubHeader>
      <SpecContainer>
        {["학력", "자격증", "대외활동", "언어", "경력", "기타"].map((spec) => (
          <SpecBox
            key={spec}
            selected={selectedSpec === spec}
            onClick={() => handleSpecBoxClick(spec)}
          >
            {spec}
          </SpecBox>
        ))}
      </SpecContainer>
      <SubHeader>소견서 후기를 작성해주세요.</SubHeader>
      <FeedbackOptionsContainer>
        <Helf>
          <SubsubHeader>소견서가 도움이 되셨나요?</SubsubHeader>
          <Button onClick={() => handleButtonClick("많은 도움이 되었어요!")}>
            많은 도움이 되었어요!
          </Button>
          <Button onClick={() => handleButtonClick("한 번쯤은 받아볼만해요.")}>
            한 번쯤은 받아볼만해요.
          </Button>
          <Button onClick={() => handleButtonClick("별로 도움이 안되었어요.")}>
            별로 도움이 안되었어요.
          </Button>
        </Helf>
        {showHelpfulQuestion && (
          <Helf>
            <HelpfulQuestion>어떤 부분이 가장 도움이 되었나요?</HelpfulQuestion>
            <RadioGroup>
              {[
                "친절하고 자세하게 설명해줬어요.",
                "구체적인 스펙 분석을 해줬어요.",
                "추천 스펙에 대한 정보를 알려줬어요.",
                "이 직무에 대해 잘 알고 있는 것 같아요.",
                "계속 받아보고 싶어요.",
                "다른 사람에게도 추천해요.",
              ].map((option) => (
                <RadioButtonLabel key={option}>
                  <RadioButton
                    type="radio"
                    name="helpful"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                  />
                  {option}
                </RadioButtonLabel>
              ))}
            </RadioGroup>
          </Helf>
        )}
        {showUnhelpfulQuestion && (
          <Helf>
            <HelpfulQuestion>어떤 부분이 불편했나요?</HelpfulQuestion>
            <RadioGroup>
              {[
                "불친절해요",
                "전문지식이 없는 것 같아요.",
                "추천 스펙에 대한 정보를 알려주지 않았아요.",
                "다시는 받고싶지 않아요.",
              ].map((option) => (
                <RadioButtonLabel key={option}>
                  <RadioButton
                    type="radio"
                    name="unhelpful"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                  />
                  {option}
                </RadioButtonLabel>
              ))}
            </RadioGroup>
          </Helf>
        )}
      </FeedbackOptionsContainer>
      <FeedbackSection>
        <FeedbackLabel htmlFor="feedback">
          소견서 후기를 구체적으로 작성해주세요.
        </FeedbackLabel>
        <FeedbackTextarea
          id="feedback"
          placeholder="소견서 후기를 작성해주세요..."
        />
      </FeedbackSection>
      <SubmitButtonContainer>
        <SubmitButton>작성완료</SubmitButton>
      </SubmitButtonContainer>
    </PageContainer><Footer/></>
  );
};

export default FeedbackPage;
