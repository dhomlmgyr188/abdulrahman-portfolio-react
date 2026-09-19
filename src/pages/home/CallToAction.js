import styled from "styled-components";
import Container from "../../Components/layout/PageContainer";
import { Section } from "../../Components/layout/PageContainer";

const CTAContainer = styled(Section)`
    background-color: var(--color-background-secondary);
`
const CTAContent = styled(Container)`

`
const CTA = () => {
    return(
        <CTAContainer>
            <CTAContent>
                <h1>hello</h1>
            </CTAContent>
        </CTAContainer>
    )
}

export default CTA;