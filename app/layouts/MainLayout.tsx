import React from "react";
import BorderLayout from "./BorderLayout";
import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout({ children }: {children: React.ReactNode}) {
    return (
        <React.Fragment>
            <Header />
            <BorderLayout color="#b6ccd4" />
                {children}
            <Footer />
        </React.Fragment>
    )
}