import React from "react";
import { Content } from "./Quote-styled";
import { Paragraph } from "../paragrapf/Paragraf";

const Quote = ({ quote }) => {
	return (
		<Content>
			<Paragraph>{quote?.quote}</Paragraph>
			<Paragraph>{quote?.author}</Paragraph>
		</Content>
	);
};

export default Quote;
