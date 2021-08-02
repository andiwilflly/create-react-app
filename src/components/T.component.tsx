import React from "react";
import { Trans, useTranslation } from "react-i18next";

const T = ({ children }) => {
    useTranslation();

    return <Trans i18nKey={children}>{children}</Trans>;
};

export default T;
