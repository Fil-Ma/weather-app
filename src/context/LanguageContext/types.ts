export type TUserLanguage = "en" | "it";

export type TDictionaryList = Record<TUserLanguage, any>;
export type TLanguageOptions = Record<TUserLanguage, string>;

export interface ILanguageContext {
  language: TUserLanguage;
  dictionary: TDictionaryList[TUserLanguage];
  changeUserLanguage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
