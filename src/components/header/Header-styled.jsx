import styled from "styled-components";

export const Wrapper = styled.header`
	width: 100vw;
	height: 10vh;
	text-align: center;
`;

export const Title = styled.h1`
	font-size: 2em;
	color: ${({ theme }) => theme.primary};
`;
