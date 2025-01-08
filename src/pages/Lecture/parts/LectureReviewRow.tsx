import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

import { StarIcon } from '../icons';
import { Review } from '../types';

const StyledLectureReviewRow = styled(Flex.Vertical)`
  padding: 0 0 16px;
  width: 100%;
  background-color: ${COLORS.GRAY_SCALE_000};
  border-top: 1px solid ${COLORS.GRAY_SCALE_100};
  gap: 16px;

  .header {
    align-items: flex-start;

    .text__container {
      align-items: center;
      width: 100%;
      justify-content: space-between;
      gap: 4px;
      .id__text {
        color: ${COLORS.GRAY_SCALE_800};
      }
      .created__at__text {
        color: ${COLORS.GRAY_SCALE_400};
      }
    }

    .score__container {
      align-items: center;
    }
  }

  .content {
    flex-grow: 1;
    margin: 0 16px;

    > p {
      line-height: 22px;
    }
  }
`;

interface LectureReviewRowProps {
  review: Review;
}

function LectureReviewRow({ review }: LectureReviewRowProps) {
  const maskId = (id: string) => {
    if (id.length < 4) return id; // ID가 4글자 미만일 경우 마스킹하지 않음
    if (id.length === 5) return id[0] + '**' + id.slice(4); // 5글자일 경우 2, 3번째 글자만 *로 대체
    return id[0] + '***' + id.slice(4); // 6글자 이상일 경우 2, 3, 4번째 글자를 *로 대체
  };

  return (
    <StyledLectureReviewRow>
      <Flex.Vertical className='header'>
        <Flex.Horizontal className='text__container'>
          <Typography.Subtitle3 className='id__text'>{maskId(review.id)}</Typography.Subtitle3>
          <Typography.Caption2 className='created__at__text'>{review.createdAt.split('T')[0]}</Typography.Caption2>
        </Flex.Horizontal>
        <Flex.Horizontal className='score__container'>
          {Array.from({ length: 5 }).map((_, index) => {
            const isFullStar = index < Math.floor(review.score); // 정수 부분
            const isHalfStar = index === Math.floor(review.score) && review.score % 1 >= 0.3; // 반쪽 별

            return <StarIcon key={index} fill={isFullStar} halfFill={isHalfStar} />;
          })}
        </Flex.Horizontal>
      </Flex.Vertical>
      <Flex.Vertical className='content'>
        <Typography.Body3>{review.content}</Typography.Body3>
      </Flex.Vertical>
    </StyledLectureReviewRow>
  );
}

export default LectureReviewRow;
