import React, { useEffect, useState, useCallback } from "react";
import { Button } from "../button/Button";
import Quote from "../Quote/Quote";
import { Wrapper } from "./Main-styled";
import { fetchQuote } from "../../services/getQuotes";
import { Paragraph } from "../paragrapf/Paragraf";

const Main = () => {
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
	}, [quotesData.length]);

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
				<Button onClick={prevQuote}>Click me</Button>
				{error ? <Paragraph>We can't find any quotes!!! Sorry</Paragraph> : <Quote key={quote} quote={quote} />}
				<Button onClick={nextQuote}>Click me</Button>
			</Wrapper>
		</>
	);
};

export default Main;
