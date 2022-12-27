import GlobalStyle from "./styles/global";
import { useTranslation } from "react-i18next";
import { Container } from "./components";

function App() {
    const { t, i18n } = useTranslation("common");

    return (
        <Container>
            <GlobalStyle />
            <p>{t("App.p")}</p>
            <button onClick={() => i18n.changeLanguage("en")}>
                {t("Change To English")}
            </button>
            <button onClick={() => i18n.changeLanguage("pt")}>
                {t("Change to Portuguese")}
            </button>
        </Container>
    );
}

export default App;
