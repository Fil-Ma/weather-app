import React, { createContext, useCallback, useContext, useState } from "react";
import { dictionaryList } from "./languages";
import { ChangeUserLanguage, ILanguageContext, TUserLanguage } from "./types";

const LanguageContext = createContext<ILanguageContext>({
  language: "en",
  dictionary: dictionaryList["en"],
  changeUserLanguage: () => undefined,
});

const getLocalLanguage = (): TUserLanguage => {
  const language = localStorage.getItem("language");

  switch (language) {
    case "it":
      return "it";
    case "en":
    default:
      return "en";
  }
};

export default function LanguageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userLanguage, setUserLanguage] =
    useState<TUserLanguage>(getLocalLanguage);

  const changeLanguage: ChangeUserLanguage = useCallback((event) => {
    const newLanguage = event.target.value as TUserLanguage;
    setUserLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  }, []);

  const provider: ILanguageContext = {
    language: userLanguage,
    dictionary: dictionaryList[userLanguage],
    changeUserLanguage: changeLanguage,
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  return useContext(LanguageContext);
}
