import styled from "styled-components";
import { useTranslation } from "react-i18next";
export const LinkU = styled.a`
  color: var(--color-link);
  transition: var(--transition-normal);

  &:hover{
    opacity: 0.85;
  }
`

export const PTitle = styled.h1`
    color: var(--color-primary);
`
export const STitle = styled.h2`
    color: var(--color-secondary);
`
export const TTitle = styled.h3`
  color: var(--color-tertiary);
`;

export const Desc = styled.p`
  line-height: 1.8;
`;

export const LightDesc = styled.p`
  color: var(--color-text-light);
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
`;

export const SectionPTitle = ({ value }) => {
  const { t } = useTranslation();
  return <PTitle>{t(value)}</PTitle>
}

export const SectionSTitle = ({ value }) => {
  const { t } = useTranslation();
  return <STitle>{t(value)}</STitle>
}

export const SectionLightDesc = ({ value }) => {
  const { t } = useTranslation();
  return <LightDesc>{t(value)}</LightDesc>
}

export const PageHeader = styled.header`
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: var(--space-2xl);
    gap: var(--space-lg);
    background-color: var(--pattern-background-color);
    background-image: var(--pattern-background-image);
    background-size: var(--pattern-background-size);
    background-position: var(--pattern-background-position);
`

export const PageHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xs);
    text-align: center;
    width: 100%;
    max-width: var(--container-width);
    margin: 0 auto;
`

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Tech = styled.span`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-xs) var(--space-sm);
  font-size: var(--size-sm);
  border-radius: var(--radius-md);
  background-color: var(--color-background-secondary);
  border: 1px solid var(--color-border);
  cursor: default;
`;

export const Clearfix = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`;


export const TableWrapper = styled.div`
  @media(max-width: 768px) {
    position: relative;
    width: 100%;  
      
      &::before{
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        width: var(--size-lg);
        height: 100%;
        background: linear-gradient(to left, var(--color-background-tertiary) , transparent);
      }

      &::after{
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: var(--size-lg);
        height: 100%;
        background: linear-gradient(to right, var(--color-background-tertiary) , transparent);
      }
  }
`

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; // السحب باللمس على الهواتف

  /* اخفاء شريط التمرير */
    // Chrome, Safari, Opera
      &::-webkit-scrollbar{ 
        display:none;
      }
      scrollbar-width: none; // Firefox 
      -ms-overflow-style: none;  //IE و Edge
`