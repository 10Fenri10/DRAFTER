import { AppProps } from 'next/app'
import { NoteProvider } from '../context/NoteContext'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<NoteProvider>
			<Component {...pageProps} />
		</NoteProvider>
	)
}

export default MyApp
