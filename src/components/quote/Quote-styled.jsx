import styled, { keyframes } from "styled-components";

const animateOpacity = keyframes`
    0% {
        opacity: 0;
  }
  }
  100% {
      opacity: 1;

  }
`;

export const Content = styled.section`
	display: flex;
	flex-direction: column;
	width: 55vw;
	align-items: center;
	justify-content: space-around;
	margin-top: 6em;
	display: inline;
	animation: ${animateOpacity} 1s ease-in-out alternate forwards;
`;
