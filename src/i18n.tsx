import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
    lng: "en",
    fallbackLng: ["ru"],
    interpolation: {
        escapeValue: false // not needed for react!!
    },
    resources: {
        en: {
            translation: {
                hello: "hello world"
            }
        },
        ru: {
            translation: {
                hello: "привет мир"
            }
        }
    }
});
