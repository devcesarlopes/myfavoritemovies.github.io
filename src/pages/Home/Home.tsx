import { Container, Form, Title, Button } from "./styles";
import { useTranslation } from "react-i18next";
import { useState, FormEvent, useContext } from "react";
import { SearchBar } from "./SearchBar";
import { SearchContext } from "../../contexts/SearchContext";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export const Home = () => {
    const { t } = useTranslation("common");
    const [value, setValue] = useState("");
    const apiContext = useContext(SearchContext);
    const navigate = useNavigate();

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (value === "")
            return swal("Ops!", t("SweetAlert.emptyInput")!, "error");
        apiContext
            .search(value, 1)
            .then((response) => {
                if (response.Response === "False") throw Error(response.Error);
            })
            .then(() => navigate("/result/" + value))
            .catch((err) => {
                if (err instanceof Error) {
                    const message =
                        err.message === "Movie not found!"
                            ? t("SweetAlert.notFound")
                            : err.message;
                    swal("Ops!", message, "error");
                }
            });
    };

    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <Title>{t("Home.title")}</Title>
                <SearchBar value={value} setValue={setValue} />
                <Button>{t("Home.button")}</Button>
            </Form>
        </Container>
    );
};
