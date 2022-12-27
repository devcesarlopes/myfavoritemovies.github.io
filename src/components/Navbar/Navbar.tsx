import { Container, Img, DivFlex, SwitchLang, Button } from "./styles";
import { useTranslation } from "react-i18next";
import Switch from "react-switch";
import { SyntheticEvent } from "react";

export const Navbar = () => {
    const { t, i18n } = useTranslation("common");
    const changeLang = (
        checked: boolean,
        event: MouseEvent | SyntheticEvent<MouseEvent | KeyboardEvent, Event>,
        id: string
    ) => i18n.changeLanguage(i18n.language === "en" ? "pt" : "en");

    return (
        <Container>
            <Img alt="logo" title="logo" />
            <DivFlex>
                <SwitchLang>{t("Navbar.selectedLang")}</SwitchLang>
                <Switch
                    onChange={changeLang}
                    checked={i18n.language === "en"}
                    onColor={"#10557c"}
                    offColor={"#10557c"}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={15}
                    width={40}
                    handleDiameter={20}
                />
                <Button>Login</Button>
            </DivFlex>
        </Container>
    );
};
