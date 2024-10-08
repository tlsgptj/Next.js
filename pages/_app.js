import { ThemeProvider } from "@/lib/ThemeContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Header/>
      <Container>
        <Component {...pageProps}/>
      </Container>
    </ThemeProvider>
  );
}
