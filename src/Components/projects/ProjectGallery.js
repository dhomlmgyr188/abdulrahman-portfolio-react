import styled from "styled-components";

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  width: auto;
  border-radius: var(--radius-md);
  transition: var(--transition-fast);
  overflow: hidden;
  border: 1px dotted var(--color-gray);

`
const ImgStyle = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: var(--transition-normal);

  &:hover{
    transform: scale(1.05);
  }
`

const ProjectGallery = ({ images }) => {
  return (
    <ImgWrapper>
      <ImgStyle src={images} alt="s" />
    </ImgWrapper>
  )
}

export default ProjectGallery;