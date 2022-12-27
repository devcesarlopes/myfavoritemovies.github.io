import { Dispatch, SetStateAction, ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import {
    Input,
    SearchBarContainer,
    SearchBarEraseIcon,
    SearchBarIcon,
} from "./styles";

interface props {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
}
export const SearchBar = ({ value, setValue }: props) => {
    const { t } = useTranslation("common");
    const onChange = (event: ChangeEvent<HTMLInputElement> | undefined) =>
        setValue(event!.target.value);
    const erase = () => setValue("");

    return (
        <SearchBarContainer>
            <SearchBarIcon>search</SearchBarIcon>
            <Input
                value={value}
                onChange={onChange}
                placeholder={t("Home.input")!}
            />
            <SearchBarEraseIcon>
                <span
                    onClick={erase}
                    className="material-symbols-outlined"
                    style={{
                        display: value === "" ? "none" : "block",
                        cursor: "pointer",
                    }}
                >
                    close
                </span>
            </SearchBarEraseIcon>
        </SearchBarContainer>
    );
};
