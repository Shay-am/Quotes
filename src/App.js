import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/globalStyle";
import { theme } from "./theme/theme";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";

const App = () => {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Header />
				<Main />
				<Footer />
			</ThemeProvider>
		</>
	);
};

export default App;
