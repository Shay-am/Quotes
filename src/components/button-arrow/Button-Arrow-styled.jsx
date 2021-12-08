import styled, { keyframes } from "styled-components";

const moveRight = keyframes`
  0% {
    transform: translateX(0px);
    opacity:1;

  }
  100%{
    transform: translateX(15px);
    opacity:.1;

  }
  `;

const moveLeft = keyframes`
  0% {
    transform: translateX(0px);
    opacity:1;
  }
  100%{
    transform: translateX(-15px);
    opacity:0.3;

  }

`;

export const RightArrow = styled.div`
	font-size: 0;
	line-height: 0;
	top: 50%;
	width: 5em;
	height: 5em;
	cursor: pointer;
	color: transparent;
	border: none;
	outline: 0;
	background: 0 0;

	&:hover {
		animation: ${moveRight} 0.6s ease-in-out infinite forwards;
	}

	&::before {
		content: ">";
		font-size: 60px;
		line-height: 1;
		color: ${({ theme }) => theme.btn};
		background: none;
		width: 5em;
		height: 5em;
		border-radius: 4px;
		border: solid 1px #d2d2d2;
	}
`;

export const LeftArrow = styled(RightArrow)`
	&:hover {
		animation: ${moveLeft} 0.6s ease-in-out infinite forwards;
	}
	&::before {
		content: "<";
	}
`;
