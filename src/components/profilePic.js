import React from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image'

const Profile = (props) => {
  return (
    <ProfileWrapper>
      <ProfileImageWrapper>
        <ProfileImage loading="eager" fixed={props.image} />
      </ProfileImageWrapper>
      <ProfileName>{props.name}</ProfileName>
      {props.position && <ProfilePosition>{props.position}</ProfilePosition>}
    </ProfileWrapper>
  )
}

export default Profile

const ProfileWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  flex: 1 1 30%; 
`;

const ProfileImageWrapper = styled.div`
  filter: drop-shadow(0px 5px 7px #828282);
`;

const ProfileImage = styled(Img)`
  // clip-path: circle(); // Should ask pics to be submitted as cicle PNGs
  width: 110px;         // Has to be set a bit wider to work properly in Safari
  height: 109.58px;
`;

const ProfileName = styled.p`
  font-family: Archivo;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;

const ProfilePosition = styled.p`
  font-family: Archivo;
  font-style: normal;
  font-size: 24px;
  margin: 0;
  text-align: center;
`;
