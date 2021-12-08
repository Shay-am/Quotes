import { RightArrow, LeftArrow } from "./Button-Arrow-styled";

export const ButtonArrow = ({ onClick, left }) => (
	<>
		{left ? <LeftArrow onClick={onClick} /> : <RightArrow onClick={onClick} />}
	</>
);
