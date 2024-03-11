import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: flex-start;
  padding-top: 50px;
  padding-left: 24px;
`;

export const ProfilePic = styled.Image`
  width: 108px;
  height: 108px;
  border-radius: 60px;
  margin-bottom: 10px;
`;

export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #595085;
`;

export const BusinessType = styled.Text`
  font-size: 16px;
  color: grey;
  margin-bottom: 20px;
`;

export const DetailsContainer = styled.View`
  margin-top: 32px;
`;

export const DetailsTitle = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const Details = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const CourseName = styled.Text`
  font-size: 16px;
  color: #10E873;
  align-self: flex-start;
`;

export const StudyBox = styled.View`
  padding: 16px;
  background-color: #F6F5FB;
  align-items: flex-start;
  justify-content: center;
  border-radius: 16px;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.6);
`