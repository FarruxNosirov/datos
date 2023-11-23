import styled from "styled-components";

export const ReviewItemContainer = styled.div`
  display: flex;
  min-height: 230px;
  border-radius: 5px;
  background: var(--White, #fff);
  padding: 24px;
`;
export const ReviewLeftBox = styled.div`
  width: 60px;
  height: 100%;
`;
export const ReviewCounter = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const Reviewbtn = styled.button`
  border: 0;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  margin: 0;
`;
export const CounterNumber = styled.p`
  color: var(--mainColor, #ffb729);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0;
  margin: 0;
`;
export const RightBox = styled(ReviewLeftBox)`
  width: calc(100% - 60px);
  display: flex;
  flex-direction: column;
`;
export const ReviewTopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const RewiewPersonInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const RewiewImageBox = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
export const RewiewImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
export const RewiewPersonName = styled.div`
  display: flex;
  align-items: center;
`;
export const RewiewPersonh2 = styled.h2`
  color: var(--Gray-70, #525252);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 13px;
  margin-left: 10px;
`;

export const RewiewCommentOclock = styled.p`
  color: var(--Gray-40, #a8a8a8);
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const RewiewRightbtn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;
export const RewiewRightbtnText = styled.p`
  color: var(--mainColor, #ffb729);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const RewiewBottomBox = styled.div`
  width: 100%;
  height: 150px;
`;
export const RewiewPersonh3 = styled.h3`
  color: var(--Gray-100, #161616);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.72px;
  padding: 0;
  margin: 0;
  margin-top: 10px;
`;
export const RewiewButtonText = styled.p`
  color: var(--Gray-60, #6f6f6f);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const RewiewModalBox = styled.div`
  border-top: 1px solid var(--bgColor, #efeff7);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const RewiewAnswers = styled.div`
  display: flex;
  align-items: center;
`;
export const RewiewAnswersText1 = styled.p`
  color: var(--Gray-40, #a8a8a8);

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 5px;
`;
export const RewiewAnswersText2 = styled.p`
  color: var(--Gray-70, #525252);

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
