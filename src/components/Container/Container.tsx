import React from "react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { Background, ContentContainer, DivMarginTop } from "./styles";

interface states {
    children: JSX.Element | JSX.Element[];
}

export const Container = ({ children }: states) => {
    return (
        <div
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                height: "100vh",
            }}
        >
            <Background />
            <Navbar />
            <DivMarginTop>
                {children}
                {/* <ContentContainer>{children}</ContentContainer> */}
            </DivMarginTop>
            <Footer />
        </div>
    );
};
