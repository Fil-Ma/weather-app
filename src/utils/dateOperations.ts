import { TUserLanguage } from "@contexts/LanguageContext/types";

/**
 * Converts epoch format data to local.
 *
 * @param { Object } epochDate | date in epoch format
 * @returns { Object } local date, local time
 */
export function dateToString(epochDate: number, language: TUserLanguage) {
  // transfom date to normal format from epoch seconds
  let currentDateTime = new Date(0);
  const dateEpoch = epochDate;
  currentDateTime.setUTCSeconds(dateEpoch);

  // Transform language to Language Tags (BCP 47)
  let standardLanguageTag;
  if (language === "en") {
    standardLanguageTag = "en-US";
  } else if (language === "it") {
    standardLanguageTag = "it-IT";
  }

  const date = currentDateTime.toLocaleDateString(standardLanguageTag, {
    weekday: "short",
    month: "long",
    day: "numeric",
  });

  const time = currentDateTime.toLocaleTimeString(standardLanguageTag, {
    hour: "numeric",
    minute: "numeric",
  });

  return { date, time };
}
