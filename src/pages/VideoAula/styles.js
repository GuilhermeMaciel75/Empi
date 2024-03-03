import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  padding-top: 40px;
  align-items: center;
`

export const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: '100%';
  height: ${props => props.isSelected ? 90 : 40}px;
  border-radius: 10px;
  margin-top: 12px;
`
