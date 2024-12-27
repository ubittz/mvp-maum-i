import Button from '@@components/Button';
import Flex from '@@components/Flex';
import InputFormGroup from '@@components/InputFormGroup';
import Typography from '@@components/Typography';

interface RegisterStep1Props {
  onNext: () => void;
}

function RegisterStep1({ onNext }: RegisterStep1Props) {
  return (
    <Flex.Vertical className='body'>
      <Flex.Vertical className='input_form_group_step_1'>
        <Flex.Vertical className='input_form_group__wrap'>
          <Typography.Button3 className='input_form_group__wrap_title'>아이디</Typography.Button3>
          <InputFormGroup inputProps={{ placeholder: '아이디를 입력해 주세요.' }} buttonProps={{ children: '중복확인' }} />
        </Flex.Vertical>
        <Flex.Vertical className='input_form_group__wrap'>
          <Typography.Button3 className='input_form_group__wrap_title'>비밀번호</Typography.Button3>
          <InputFormGroup inputProps={{ placeholder: '비밀번호를 입력해 주세요.' }} />
          <InputFormGroup inputProps={{ placeholder: '비밀번호를 한 번 더 입력해 주세요.' }} />
        </Flex.Vertical>
      </Flex.Vertical>
      <Button.Xlarge className='bottom_button' onClick={() => onNext()}>
        다음
      </Button.Xlarge>
    </Flex.Vertical>
  );
}

export default RegisterStep1;
