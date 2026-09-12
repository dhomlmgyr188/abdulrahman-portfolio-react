import styled from "styled-components";
import Button from "../ui/Button/Button";
import { Link } from "react-router-dom";
import { Card } from "../ui/card/Card";
import { TTitle, Desc } from "../ui/T";
import { Actions } from "../ui/Button/Acttions";

const ProjectButton = styled(Button)`
  width: fit-content;
  margin-top: auto;
`;
const ProjCard = styled(Card)`
  background-color: var(--color-background-secondary);
`
const ProjectCard = ({ title, description, toLink, value1, value2, toHref }) => {

  return (
    <ProjCard>
      <TTitle>{title}</TTitle>

      <Desc>{description}</Desc>
      <Actions>
        <ProjectButton as={Link} to={toLink}>
          {value1}
        </ProjectButton>
        <ProjectButton $variant="secondary" as="a" target="_blank" href={toHref}>
          {value2}
        </ProjectButton>
      </Actions>
    </ProjCard>
  );
};

export default ProjectCard;
