import styled from "styled-components";
import Button from "../ui/Button/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Card } from "../ui/card/Card";
import { TTitle, Desc } from "../ui/T";

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--space-2xl);
  height: var(--space-2xl);
  font-size: var(--size-3xl);
  color: var(--color-gray);
`;

const ServCard = styled(Card)`
  background-color: var(--color-background);
`

const ServicesCard = ({ icon: Icon, title, description }) => {

  const {t} = useTranslation();

  return (
    <ServCard style={{textAlign: "center"}}>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <TTitle>{title}</TTitle>
      <Desc>{description}</Desc>
    </ServCard>
  );
};

export default ServicesCard;
