import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Background } from "./styles";

interface states {
    children: JSX.Element | JSX.Element[];
}

export const Container = ({ children }: states) => {
    return (
        <>
            <Background />
            <Navbar />
            <div style={{ marginTop: "10vh" }}>{children}</div>
        </>
    );
};
