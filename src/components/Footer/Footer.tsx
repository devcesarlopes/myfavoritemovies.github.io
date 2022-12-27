import {
    GithubLogo,
    LinkedinLogo,
    StackOverflowLogo,
    GmailLogo,
} from "../../assets/imgs";
import { Container, DivFlexRow, Text, IconImageMargin } from "./styles";

export const Footer = () => {
    return (
        <Container>
            <Text>
                <h3>
                    All Right Reserved © 2022{" "}
                    <strong style={{ color: "#1a89c9" }}>DevCesarLopes</strong>
                </h3>
                <DivFlexRow>
                    <IconImageMargin
                        src={GithubLogo}
                        title={"Github"}
                        onClick={() => {
                            window.open("https://github.com/devcesarlopes");
                        }}
                    />
                    <IconImageMargin
                        src={LinkedinLogo}
                        title={"Linkedin"}
                        onClick={() => {
                            window.open(
                                "https://www.linkedin.com/in/dev-cesar-lopes/"
                            );
                        }}
                    />
                    <IconImageMargin
                        src={StackOverflowLogo}
                        title={"Stack Overflow"}
                        onClick={() => {
                            window.open(
                                "https://stackoverflow.com/users/12531920/cesar-lopes"
                            );
                        }}
                    />
                    <IconImageMargin
                        src={GmailLogo}
                        title={"devcesarlopes@gmail.com"}
                        onClick={() => {
                            window.open(
                                `mailto:devcesarlopes@gmail.com?subject=I%20saw%20your%20Website&body=Hello%20Cesar,%0D%0AI'm%20interested%20in%20Contacting%20you%20because:%0D%0A`
                            );
                        }}
                    />
                </DivFlexRow>
                <h3>devcesalopes@gmail.com</h3>
            </Text>
        </Container>
    );
};
