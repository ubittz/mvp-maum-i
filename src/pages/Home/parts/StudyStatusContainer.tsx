import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { arrowRightIcon } from '@@assets/icons';
import Button from '@@components/Button';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import ProgressBar from '@@pages/Home/parts/ProgressBar';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const StyledStudyStatusContainer = styled(Flex.Vertical)`
  border-radius: 24px;
  background-color: ${COLORS.GRAY_SCALE_100};
  color: ${COLORS.GRAY_SCALE_800};
  padding: 33px 34px;
  gap: 15px;

  .header {
    font-weight: 800;

    .text_highlight {
      color: ${COLORS.GRAY_SCALE_500};
    }
  }

  .progress_container {
    align-items: center;
    justify-content: space-between;
    gap: 28px;

    .text__container {
      .text_highlight {
        color: ${COLORS.GRAY_SCALE_500};
      }
    }

    .current_lecture__button {
      background-color: ${COLORS.GRAY_SCALE_800};
      width: 290px;
    }
  }

  .progress_bar__container {
    background-color: ${COLORS.GRAY_SCALE_000};
    border-radius: 16px;
    padding: 19px 18px 20px;
    gap: 8px;

    .text__container {
      gap: 12px;
    }
  }
`;

function StudyStatusContainer() {
  const navigate = useNavigate();

  const userName: string = '최석범';
  const studyDay: number = 3;
  const studyTotal: number = 36;
  const studyProgress: number = 2;

  const handleClickCurrentLecture = () => {
    navigate(pathGenerator(`${PAGES.LECTURE}/map`));
  };

  return (
    <StyledStudyStatusContainer>
      <Flex.Vertical className='header'>
        <Flex.Horizontal>
          <Typography.Title1>안녕하세요.&nbsp;</Typography.Title1>
          <Typography.Title1 className='text_highlight'>{userName}</Typography.Title1>
          <Typography.Title1>님</Typography.Title1>
        </Flex.Horizontal>
        <Flex.Horizontal>
          <Typography.Title1>마음아이와 함께한지&nbsp;</Typography.Title1>
          <Typography.Title1 className='text_highlight'>{studyDay}</Typography.Title1>
          <Typography.Title1>일째입니다.</Typography.Title1>
        </Flex.Horizontal>
      </Flex.Vertical>
      <Flex.Horizontal className='progress_container'>
        <Flex.Horizontal className='text__container'>
          <Typography.Subtitle1>전체 {studyTotal}차시 중&nbsp;</Typography.Subtitle1>
          <Typography.Subtitle1 className='text_highlight'>{studyProgress}</Typography.Subtitle1>
          <Typography.Subtitle1>차시까지 진행했습니다.</Typography.Subtitle1>
        </Flex.Horizontal>
        <Button.Xlarge className='current_lecture__button' icon={arrowRightIcon} iconPosition='right' onClick={handleClickCurrentLecture}>
          최근 본 공감강의 보러가기
        </Button.Xlarge>
      </Flex.Horizontal>
      <Flex.Vertical className='progress_bar__container'>
        <Flex.Vertical className='text__container'>
          <Typography.Title3>진도율 8%</Typography.Title3>
          <Typography.Body2>시작이 좋아요! 오늘도 한 번 마음을 무럭무럭 키워볼까요?</Typography.Body2>
        </Flex.Vertical>
        <ProgressBar total={studyTotal} progress={studyProgress} />
      </Flex.Vertical>
    </StyledStudyStatusContainer>
  );
}

export default StudyStatusContainer;
