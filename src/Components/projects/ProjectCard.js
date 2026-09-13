import styled from "styled-components";
import Button from "../ui/Button/Button";
import { Link } from "react-router-dom";
import { Card } from "../ui/card/Card";
import { TTitle, Desc, Clearfix, LightDesc, TechStack, Tech, LinkU } from "../ui/T";
import { Actions } from "../ui/Button/Acttions";

const ProjectButton = styled(Button)`
  width: fit-content;
  margin-top: auto;
`;
const ProjCard = styled(Card)`
  background-color: var(--color-background-secondary);
  
  &:hover {
    box-shadow: none;
  }
`

const ProjTech = styled(Tech)`
  color: var(--color-text-light);
  background-image: linear-gradient(to bottom, var(--color-background) 80%,  var(--color-background-secondary));
`
const ProjActions = styled(Actions)`
  margin-top: auto;
`
const Description = ({ content }) => {
  return (
    <Desc>
      {content.map((item, index) => {
        if (item.type === "link") {
          return (
            <LinkU key={index} target="_blank" href={item.href}>
              {item.text}
            </LinkU>
          );
        }

        return <span key={index}>{item.value}</span>;
      })}
    </Desc>
  );
};

const ProjectCard = ({ title, date, description, techStack, toLink, value1, value2, toHref }) => {

  return (
    <ProjCard>
      <Clearfix>
        <TTitle>{title}</TTitle>
        <LightDesc>{date}</LightDesc>
      </Clearfix>

      <Description content={description} />

      <TechStack>
        {techStack.map((tech) => (
          <ProjTech key={tech}>{tech}</ProjTech>
        ))}
      </TechStack>
      <ProjActions>
        <ProjectButton as={Link} to={toLink}>
          {value1}
        </ProjectButton>
        <ProjectButton $variant="secondary" as="a" target="_blank" href={toHref}>
          {value2}
        </ProjectButton>
      </ProjActions>
    </ProjCard>
  );
};

export default ProjectCard;
