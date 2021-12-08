import { getRandomNum } from "../utils/utils";

const URL =
	"https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json";

export const fetchQuote = async () => {
	const data = await fetch(URL);
	const response = await data.json();

	const num = getRandomNum(response.length);

	return response[num];
};
