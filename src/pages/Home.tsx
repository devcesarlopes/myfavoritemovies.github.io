import { Container } from "./styles";
import { useTranslation } from "react-i18next";

export const Home = () => {
    const { t, i18n } = useTranslation("common");

    return (
        <Container>
            <p></p>
        </Container>
    );
};
