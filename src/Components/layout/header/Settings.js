import LangToggle from "../../common/LangToggle";
import ThemeToggle from "../../common/ThemeToggle";
import styled from "styled-components";

const SettingsContainer = styled.div`
  display: flex;
  gap: var(--space-sm);
`

const Settings = () => {
  return (
    <SettingsContainer>
      <LangToggle />
      <ThemeToggle />
    </SettingsContainer>
  )
}

export default Settings;