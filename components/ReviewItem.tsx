import {
  ArrowDownIcon,
  ArrowUpIcon,
  MenuIcon,
} from "@/public/assets/icons/icons";

import {
  ReviewLeftBox,
  ReviewItemContainer,
  ReviewCounter,
  Reviewbtn,
  CounterNumber,
  RightBox,
  ReviewTopBox,
  RewiewPersonInfo,
  RewiewImageBox,
  RewiewImage,
  RewiewPersonName,
  RewiewPersonh2,
  RewiewCommentOclock,
  RewiewRightbtn,
  RewiewRightbtnText,
  RewiewBottomBox,
  RewiewPersonh3,
  RewiewButtonText,
  RewiewModalBox,
  RewiewAnswers,
  RewiewAnswersText1,
  RewiewAnswersText2,
} from "@/styles/ReviewItem.styled";

import React from "react";
const p = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
dolore eaque quo qui porro, consequuntur nulla eum sit odio quasi,
adipisci suscipit iure amet sed earum ab quia unde iste error
officiis quidem similique fugit labore. Libero voluptas veritatis
repudiandae mollitia iure quaerat laborum architecto. Illo, optio
dolorum. Doloribus aut impedit alias, ipsam et assumenda ratione
itaque ullam dolor quaerat eligendi, quo ducimus molestiae ipsa
aspernatur quam! Reiciendis, atque provident? Lorem ipsum dolor sit
amet consectetur adipisicing elit. Ipsam dolore eaque quo qui porro,
consequuntur nulla eum sit odio quasi, adipisci suscipit iure amet
sed earum ab quia unde iste error officiis quidem similique fugit
labore. Libero voluptas veritatis repudiandae mollitia iure quaerat
laborum architecto. Illo, optio dolorum. Doloribus aut impedit
alias, ipsam et assumenda ratione itaque ullam dolor quaerat
eligendi, quo ducimus molestiae ipsa aspernatur quam! Reiciendis,
atque provident?
`;

const ReviewItem = () => {
  return (
    <ReviewItemContainer>
      <ReviewLeftBox>
        <ReviewCounter>
          <Reviewbtn>
            <ArrowUpIcon />
          </Reviewbtn>
          <CounterNumber>10</CounterNumber>
          <Reviewbtn>
            <ArrowDownIcon />
          </Reviewbtn>
        </ReviewCounter>
      </ReviewLeftBox>
      <RightBox>
        <ReviewTopBox>
          <RewiewPersonInfo>
            <RewiewImageBox>
              <RewiewImage
                src="/assets/images/wallpaper.jpg"
                alt="Wallpaper"
                width={30}
                height={30}
              />
            </RewiewImageBox>
            <RewiewPersonName>
              <RewiewPersonh2>Dinora Salomova</RewiewPersonh2>
              <RewiewCommentOclock>14 hour ago</RewiewCommentOclock>
            </RewiewPersonName>
          </RewiewPersonInfo>
          <RewiewRightbtn>
            <RewiewRightbtnText>#Question</RewiewRightbtnText>
          </RewiewRightbtn>
        </ReviewTopBox>
        <RewiewBottomBox>
          <RewiewPersonh3>
            Lorem ipsum dolor sit amet consectetur?
          </RewiewPersonh3>
          <RewiewButtonText>
            {p.length > 300 ? p.slice(0, 400) + "..." : p}
          </RewiewButtonText>
        </RewiewBottomBox>
        <RewiewModalBox>
          <RewiewAnswers>
            <RewiewAnswersText1>Answers</RewiewAnswersText1>
            <RewiewAnswersText2>234</RewiewAnswersText2>
          </RewiewAnswers>
          <Reviewbtn>
            <MenuIcon />
          </Reviewbtn>
        </RewiewModalBox>
      </RightBox>
    </ReviewItemContainer>
  );
};

export default ReviewItem;
