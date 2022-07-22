import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes';
import "@fontsource/mulish"; 

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp