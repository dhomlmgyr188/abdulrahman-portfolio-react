import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

const Modal = styled.div`
    position: fixed;
    inset: 0;
    z-index: 1000;

    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    
    padding: var(--space-lg); 
    
    background-color: var(--color-background-rgba);
`

const ModalContent = styled.article`
    position: relative;

    display: flex;
    flex-direction: column;

    width: min(90%, 765px);
    max-height: 90vh;

    background-color: var(--color-background);
    border-radius: var(--radius-md);
    overflow: hidden;

    & > *{
        border-bottom: 1px solid var(--color-border);
        padding: var(--space-sm);
    }
    
    &:last-child{
        border-bottom: none;
    }
`

const ModalHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: var(--color-background-tertiary)
`

const CloseIcon = styled(IoMdClose)`
  width: var(--size-xl);
  height: var(--size-xl);

  color: var(--color-white);
  background-color: var(--color-primary);

  cursor: pointer;
  transition: background-color var(--transition-fast);

  border-radius: 50%;

  &:hover {
    background-color: var(--color-danger);
  }
`;

const ModalMain = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;

    img {
        display: block;
        max-width: 100%;
        max-height: 75vh;
        object-fit: contain;
  }
`

export const ImgModal = ({ ImgSource, ImgAlt, isOpen, onClose }) => {
    return (
        <Modal $isOpen={isOpen} onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                    <CloseIcon onClick={onClose} />
                </ModalHeader>
                <ModalMain>
                    <img src={ImgSource} alt={ImgAlt} />
                </ModalMain>
            </ModalContent>
        </Modal>
    )
}