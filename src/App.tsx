import GlobalStyle from "./styles/global";
import { Container } from "./components";
import { Home } from "./pages/Home/Home";
import { SearchProvider } from "./contexts/SearchProvider";

function App() {
    return (
        <SearchProvider>
            <Container>
                <GlobalStyle />
                <Home />
            </Container>
        </SearchProvider>
    );
}

export default App;
