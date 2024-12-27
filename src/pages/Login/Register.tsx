import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import backgroundImage from '@@assets/images/background.png';
import Alert from '@@components/Alert';
import Button from '@@components/Button';
import { COLORS } from '@@constants/colors';
import ContainerBox from '@@pages/Login/parts/ContainerBox';
import RegisterStep1 from '@@pages/Login/parts/RegisterStep1';
import RegisterStep2 from '@@pages/Login/parts/RegisterStep2';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const StyledRegister = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${backgroundImage});
    background-size: cover;
    filter: grayscale(100%);
    z-index: -1;
  }

  .body {
    width: 100%;
    height: 100%;
    padding: 0 40px;

    .input_form_group_step_1 {
      margin-top: 104px;

      .input_form_group__wrap {
        gap: 11px;
        margin-bottom: 12px;

        .input_form_group__wrap_title {
          color: ${COLORS.GRAY_SCALE_600};
        }

        &:last-child {
          margin-bottom: 0px;
        }
      }
    }

    .input_form_group_step_2 {
      margin-top: 44px;

      .input_form_group__wrap {
        gap: 11px;
        margin-bottom: 12px;

        .input_form_group__wrap_title {
          color: ${COLORS.GRAY_SCALE_600};
        }

        &:last-child {
          margin-bottom: 0px;
        }
      }
    }

    .bottom_button {
      margin-top: auto;
      margin-bottom: 20px;
    }
  }
`;

function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleBack = () => {
    if (step === 1) {
      navigate(pathGenerator(PAGES.AUTH));
    } else {
      setStep(1);
    }
  };

  const handleNext = () => {
    console.log('step', step);
    if (step === 1) {
      setStep(2);
    } else {
      setShowSuccessAlert(true);
    }
  };

  const handleConfirm = () => {
    setShowSuccessAlert(false);
    navigate(pathGenerator(PAGES.AUTH));
  };

  return (
    <StyledRegister>
      <ContainerBox
        title='회원가입'
        onBack={handleBack}
        children={step === 1 ? <RegisterStep1 onNext={handleNext} /> : <RegisterStep2 onNext={handleNext} />}
      />
      {showSuccessAlert && (
        <Alert title='회원가입 완료' text={`공감아이(가제)의 회원가입이\n완료되었습니다.`}>
          <Button.Large className='tw-w-full' theme='solid' onClick={() => handleConfirm()}>
            확인하기
          </Button.Large>
        </Alert>
      )}
    </StyledRegister>
  );
}

export default Register;
