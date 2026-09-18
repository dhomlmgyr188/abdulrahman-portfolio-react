import styled from "styled-components";
import Container from "../../Components/layout/PageContainer";
import { PTitle } from "../../Components/ui/T";
import me from "../../assets/images/me.png";
import react1 from "../../assets/images/react1.png";
import anaalmughyir1 from "../../assets/images/anaalmughyir1.png";
import { useState } from "react";
import { ImgModal } from "../../Components/ui/Modal"

const ImgSource = [
  {
    id: 1,
    user_id: 2,
    img: me
  },
  {
    id: 2,
    user_id: 1,
    img: anaalmughyir1
  },
  {
    id: 3,
    user_id: 3,
    img: react1
  },

]

const users = [
  {
    id: 1,
    username: "dhomlmgyr",
    email: "dhomlmgyr@gmail.com",
    createdAt: new Date(),
  },
  {
    id: 2,
    username: "dome00641",
    email: "dome00641@gmail.com",
    createdAt: new Date(),
  },
  {
    id: 3,
    username: "dhomlmgyr",
    email: "dhomlmgyr@gmail.com",
    createdAt: new Date(),
  },
  {
    id: 4,
    username: "dome00641",
    email: "dome00641@gmail.com",
    createdAt: new Date(),
  }
]

const UsersSection = styled.section`
  background-color: var(--color-background-secondary); 
`

const UsersContent = styled(Container)`
  display:flex;
  align-items: center;
  flex-direction: column;
  gap: var(--space-md);
  padding: var(--space-3xl) 0;
`

const ProfileImg = styled.img`
  width: var(--size-3xl);
  height: var(--size-3xl);
  border-radius: 50%;
  border: 1px solid var(--color-border);
  object-fit: cover;
  cursor: pointer;
`

const TableWrapper = styled.div`
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

const TableContainer = styled.div`
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


const UsersTable = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <UsersSection>
      <UsersContent>
        <PTitle>جدول المستخدمين</PTitle>
        <TableWrapper>
          <TableContainer>
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Profile Picture</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Created AT</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  let userImgObj = ImgSource.find((source) => (source.user_id === user.id));

                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>
                        {userImgObj && <ProfileImg src={userImgObj.img} alt={user.username} onClick={() => setSelectedImage(userImgObj.img)} />}
                      </td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.createdAt.toLocaleDateString()}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </TableContainer>
        </TableWrapper>
        
        <ImgModal
          ImgSource={selectedImage}
          ImgAlt="صورة المستخدم"
          isOpen={Boolean(selectedImage)}
          onClose={closeModal}
        />
      </UsersContent>
    </UsersSection>
  )
}

export default UsersTable;