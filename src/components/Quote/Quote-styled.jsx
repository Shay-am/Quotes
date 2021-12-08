import styled, { keyframes } from "styled-components";

const animateOpacity = keyframes`
    0% {
        opacity: 0;
  }
  50% {
    opacity: .5;
  }
  100% {
      opacity: 1;


  
  }
`;

export const Content = styled.section`
	display: flex;
	flex-direction: column;
	width: 60vw;
	align-items: center;
	justify-content: center;
	margin-bottom: 1em;
	display: inline;

	animation: ${animateOpacity} 1s ease-in-out alternate forwards;
`;
