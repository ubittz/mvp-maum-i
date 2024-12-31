import styled from 'styled-components';

import DropDown from '@@components/DropDown';
import Flex from '@@components/Flex';
import { CARD_COMPANY_LIST, INSTALLMENT_LIST } from '@@pages/Purchase/constants';

const StyledCardContainer = styled(Flex.Vertical)`
  width: 100%;
  gap: 12px;
`;

interface CardContainerProps {
  handleSelectCardCompany: (cardCompany: string) => void;
  handleSelectInstallment: (installment: string) => void;
}

function CardContainer({ handleSelectCardCompany, handleSelectInstallment }: CardContainerProps) {
  return (
    <StyledCardContainer>
      <DropDown
        placeholder='카드사를 선택해주세요'
        options={CARD_COMPANY_LIST.map((cardCompany) => ({
          label: cardCompany.label,
          value: cardCompany.value,
        }))}
        onSelect={handleSelectCardCompany}
      />
      <DropDown
        placeholder='할부를 선택해주세요'
        options={INSTALLMENT_LIST.map((installment) => ({
          label: installment.label,
          value: installment.value,
        }))}
        onSelect={handleSelectInstallment}
      />
    </StyledCardContainer>
  );
}

export default CardContainer;
