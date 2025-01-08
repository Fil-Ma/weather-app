import { SelectChangeEvent } from "@mui/material";

export type TUserLanguage = "en" | "it";

export type TDictionaryList = Record<TUserLanguage, any>;
export type TLanguageOptions = Record<TUserLanguage, string>;

export type ChangeUserLanguage = (
  event: SelectChangeEvent<TUserLanguage>
) => void;

export interface ILanguageContext {
  language: TUserLanguage;
  dictionary: TDictionaryList[TUserLanguage];
  changeUserLanguage: ChangeUserLanguage;
}
