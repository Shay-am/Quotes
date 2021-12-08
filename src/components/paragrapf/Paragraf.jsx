import styled from "styled-components";

export const Paragraph = styled.p`
	width: 80wv;
	min-height: 10vh;
	text-align: center;
	margin-top: 1.6em;
	font-size: ${({ theme, footer }) => (footer ? theme.size_xs : theme.size_s)};
`;
