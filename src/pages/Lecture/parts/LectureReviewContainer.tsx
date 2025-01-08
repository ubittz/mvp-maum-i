import { useState } from 'react';

import styled from 'styled-components';

import { downChevronIcon } from '@@assets/icons';
import Button from '@@components/Button';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { Lecture } from '@@pages/Lecture/types';

import { StarIcon } from '../icons';
import LectureReviewRow from './LectureReviewRow';

const StyledLectureReviewContainer = styled(Flex.Vertical)`
  width: 100%;
  margin: 48px 0 40px;
  background-color: ${COLORS.GRAY_SCALE_000};
  border-radius: 12px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

  .header {
    width: 100%;
    padding: 16px 16px 0;

    .title__container {
      align-items: center;
      justify-content: space-between;

      .total__count__container {
        align-items: center;
        height: 20px;
        gap: 4px;
        > * {
          color: ${COLORS.GRAY_SCALE_400};
        }
      }
    }
  }

  .body {
    align-items: center;
    margin: 0 16px;
  }

  .bottom__container {
    margin: 0 16px;
    padding: 16px 0;

    .show__more__button {
      border: 1px solid ${COLORS.GRAY_SCALE_100};
      background-color: ${COLORS.GRAY_SCALE_000};
      color: ${COLORS.GRAY_SCALE_800};
    }
  }
`;

const ReviewSummaryContainer = styled(Flex.Vertical)`
  width: 100%;
  align-items: center;

  .button {
    align-self: flex-end;
    margin-top: 12px;
    height: 36px;
    width: 100px;
    border: 1px solid ${COLORS.GRAY_SCALE_100};
    background-color: ${COLORS.GRAY_SCALE_000};
    color: ${COLORS.GRAY_SCALE_800};
  }

  .summary__container {
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
    margin: 10px 0 12px;
    border: 1px solid ${COLORS.GRAY_SCALE_100};
    border-radius: 12px;
    gap: 4px;

    .average__score {
      font-weight: 800;
      line-height: 36px;
      color: ${COLORS.MUSTARD_600};
    }

    .review__count {
      line-height: 22px;
    }
  }
`;

interface LectureReviewContainerProps {
  lecture: Lecture;
}

function LectureReviewContainer({ lecture }: LectureReviewContainerProps) {
  const [showAll, setShowAll] = useState(false);
  const averageScore = lecture.reviews.reduce((acc, review) => acc + review.score, 0) / lecture.reviews.length;
  const reviewsToShow = showAll ? lecture.reviews : lecture.reviews.slice(0, 3);

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <StyledLectureReviewContainer>
      <Flex.Vertical className='header'>
        <Flex.Horizontal className='title__container'>
          <Typography.Subtitle2>리뷰</Typography.Subtitle2>
          <Flex.Horizontal className='total__count__container'>
            <Typography.Caption2>전체</Typography.Caption2>
            <Typography.Caption2>{`${lecture.reviews.length}개`}</Typography.Caption2>
          </Flex.Horizontal>
        </Flex.Horizontal>
        <ReviewSummaryContainer>
          <Button.Xlarge className='button' icon={downChevronIcon} iconPosition='left'>
            추천순
          </Button.Xlarge>
          <Flex.Vertical className='summary__container'>
            <Typography.Title3 className='average__score'>{lecture.reviews.length > 0 ? averageScore.toFixed(1) : '0.0'}</Typography.Title3>
            <Flex.Horizontal>
              {Array.from({ length: 5 }).map((_, index) => {
                const isFullStar = index < Math.floor(averageScore);
                const isHalfStar = index === Math.floor(averageScore) && averageScore % 1 >= 0.3;

                return <StarIcon key={index} fill={isFullStar} halfFill={isHalfStar} />;
              })}
            </Flex.Horizontal>
            <Typography.Body3 className='review__count'>{`${lecture.reviews.length}개의 리뷰`}</Typography.Body3>
          </Flex.Vertical>
        </ReviewSummaryContainer>
      </Flex.Vertical>
      <Flex.Vertical className='body'>
        {reviewsToShow.length > 0 && reviewsToShow.map((review, index) => <LectureReviewRow key={index} review={review} />)}
      </Flex.Vertical>
      {lecture.reviews.length > 3 && !showAll && (
        <Flex.Vertical className='bottom__container'>
          <Button.Xlarge className='show__more__button' onClick={handleShowMore}>
            더보기
          </Button.Xlarge>
        </Flex.Vertical>
      )}
    </StyledLectureReviewContainer>
  );
}

export default LectureReviewContainer;
