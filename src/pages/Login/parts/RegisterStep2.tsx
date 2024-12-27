import Button from '@@components/Button';
import Flex from '@@components/Flex';
import InputFormGroup from '@@components/InputFormGroup';
import Typography from '@@components/Typography';

interface RegisterStep2Props {
  onNext: () => void;
}

function RegisterStep2({ onNext }: RegisterStep2Props) {
  return (
    <Flex.Vertical className='body'>
      <Flex.Vertical className='input_form_group_step_2'>
        <Flex.Vertical className='input_form_group__wrap'>
          <Typography.Button3 className='input_form_group__wrap_title'>이름</Typography.Button3>
          <InputFormGroup inputProps={{ placeholder: '아이디를 입력해 주세요.' }} />
        </Flex.Vertical>
        <Flex.Vertical className='input_form_group__wrap'>
          <Typography.Button3 className='input_form_group__wrap_title'>전화번호</Typography.Button3>
          <InputFormGroup inputProps={{ placeholder: '전화번호를 입력해 주세요.' }} />
        </Flex.Vertical>
        <Flex.Vertical className='input_form_group__wrap'>
          <Typography.Button3 className='input_form_group__wrap_title'>인증번호 입력</Typography.Button3>
          <InputFormGroup inputProps={{ placeholder: '인증번호를 입력해 주세요.' }} buttonProps={{ children: '인증하기' }} />
        </Flex.Vertical>
        <Flex.Vertical className='input_form_group__wrap'>
          <Typography.Button3 className='input_form_group__wrap_title'>이메일</Typography.Button3>
          <InputFormGroup inputProps={{ placeholder: '이메일을 입력해 주세요.' }} />
        </Flex.Vertical>
      </Flex.Vertical>
      <Button.Xlarge className='bottom_button' onClick={() => onNext()}>
        가입하기
      </Button.Xlarge>
    </Flex.Vertical>
  );
}

export default RegisterStep2;
