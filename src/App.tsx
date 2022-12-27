import GlobalStyle from "./styles/global";
import { Container } from "./components";
import { Home } from "./pages/Home/Home";
import { SearchProvider } from "./contexts/SearchProvider";
import { Routes, Route } from "react-router-dom";
import { Search } from "./pages/search/Search";

function App() {
    return (
        <SearchProvider>
            <Container>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/search/:key" element={<Search />}></Route>
                </Routes>
            </Container>
        </SearchProvider>
    );
}

export default App;
