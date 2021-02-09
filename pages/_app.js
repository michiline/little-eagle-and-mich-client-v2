import { ThemeProvider } from 'styled-components'
import { Header } from '../components'
import GlobalStyle from '../style/global'
import theme from '../style/theme'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp