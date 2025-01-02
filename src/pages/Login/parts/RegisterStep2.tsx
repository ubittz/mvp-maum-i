import { useState } from 'react';

import Button from '@@components/Button';
import CheckBox from '@@components/CheckBox';
import Flex from '@@components/Flex';
import InputFormGroup from '@@components/InputFormGroup';
import Typography from '@@components/Typography';

interface RegisterStep2Props {
  onNext: () => void;
}

function RegisterStep2({ onNext }: RegisterStep2Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const isFilled = name.length > 0 && phone.length > 0 && email.length > 0 && isChecked;

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleAgree = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Flex.Vertical className='body'>
      <Flex.Vertical className='input_form_group_step_2'>
        <Flex.Vertical className='input_form_group__wrap'>
          <Typography.Button3 className='input_form_group__wrap_title'>이름</Typography.Button3>
          <InputFormGroup inputProps={{ placeholder: '이름을 입력해 주세요.' }} onChange={handleChangeName} />
        </Flex.Vertical>
        <Flex.Vertical className='input_form_group__wrap'>
          <Typography.Button3 className='input_form_group__wrap_title'>전화번호</Typography.Button3>
          <InputFormGroup inputProps={{ placeholder: '전화번호를 입력해 주세요.', type: 'tel' }} onChange={handleChangePhone} />
        </Flex.Vertical>
        <Flex.Vertical className='input_form_group__wrap'>
          <Typography.Button3 className='input_form_group__wrap_title'>인증번호 입력</Typography.Button3>
          <InputFormGroup inputProps={{ placeholder: '인증번호를 입력해 주세요.', type: 'number' }} buttonProps={{ children: '인증하기' }} />
        </Flex.Vertical>
        <Flex.Vertical className='input_form_group__wrap'>
          <Typography.Button3 className='input_form_group__wrap_title'>이메일</Typography.Button3>
          <InputFormGroup inputProps={{ placeholder: '이메일을 입력해 주세요.', type: 'email' }} onChange={handleChangeEmail} />
        </Flex.Vertical>
        <Flex.Horizontal className='input_form_group__wrap_checkbox'>
          <CheckBox isChecked={isChecked} onChange={handleAgree} />
          <Typography.Body3 className='text'>[필수] 개인정보처리방침에 동의합니다.</Typography.Body3>
          <Typography.Body3 className='text_button'>약관보기</Typography.Body3>
        </Flex.Horizontal>
      </Flex.Vertical>
      <Button.Xlarge theme={isFilled ? 'solid' : 'inactive'} className='bottom_button' onClick={() => onNext()} disabled={!isFilled}>
        가입하기
      </Button.Xlarge>
    </Flex.Vertical>
  );
}

export default RegisterStep2;
