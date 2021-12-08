import React from "react";
import { Content } from "./Quote-styled";
import { Paragraph } from "../paragrapf/Paragraf";

export const Quote = ({ quote }) => {
	return (
		<Content key={quote}>
			<Paragraph>{quote?.quote}</Paragraph>
			<Paragraph>{quote?.author}</Paragraph>
		</Content>
	);
};
