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
        color: ${COLORS.GRAY_SCALE_400};
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
  return (
    <StyledLectureReviewRow>
      <Flex.Vertical className='header'>
        <Flex.Horizontal className='text__container'>
          <Typography.Subtitle3 className='id__text'>{review.id}</Typography.Subtitle3>
          <Typography.Caption2 className='created__at__text'>{review.createdAt}</Typography.Caption2>
        </Flex.Horizontal>
        <Flex.Horizontal className='score__container'>
          {Array.from({ length: 5 }).map((_, index) => (
            <StarIcon key={index} fill={index <= review.score - 1} />
          ))}
        </Flex.Horizontal>
      </Flex.Vertical>
      <Flex.Vertical className='content'>
        <Typography.Body3>
          우리 아이가 예전엔 화가 나거나 속상할 때 어떻게 표현해야 할지 몰랐는데, 이 프로그램을 통해 자신의 감정을 말로 잘 표현하기 시작했어요. 정말
          고마운 서비스예요!
        </Typography.Body3>
      </Flex.Vertical>
    </StyledLectureReviewRow>
  );
}

export default LectureReviewRow;
