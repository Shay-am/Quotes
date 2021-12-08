import React, { useEffect, useState, useCallback } from "react";
import { ButtonArrow } from "../button-arrow/Button-Arrow";
import { Quote } from "../quote/Quote";
import { Wrapper } from "./Main-styled";
import { fetchQuote } from "../../services/getQuotes";
import { Paragraph } from "../paragrapf/Paragraf";

export const Main = () => {
	const [quotesData, setQuotesData] = useState([]);
	const [current, setCurrent] = useState(0);
	const [quote, setQuote] = useState(quotesData[current]);
	const [error, isError] = useState(false);

	const nextQuote = useCallback(async () => {
		try {
			const data = await fetchQuote();
			setCurrent(quotesData.length);
			setQuotesData(prev => [...prev, data]);
		} catch (error) {
			isError(true);
		}
	}, [quotesData]);

	const prevQuote = () => {
		current === 0 ? setCurrent(quotesData.length - 1) : setCurrent(current - 1);
	};

	useEffect(() => {
		if (quotesData.length === 0) {
			nextQuote();
		}
		setQuote(quotesData[current]);
	}, [current, nextQuote, quote, quotesData]);

	return (
		<>
			<Wrapper>
				<ButtonArrow left onClick={prevQuote} />

				{!error ? (
					<Quote key={quote} quote={quote} />
				) : (
					<Paragraph>We can't find any quotes!!! Sorry</Paragraph>
				)}
				<ButtonArrow onClick={nextQuote} />
			</Wrapper>
		</>
	);
};
