/**
 * Converts epoch format data to local.
 *
 * @param { Object } epochDate | date in epoch format
 * @returns { Object } local date, local time
 */
export function dateToString(epochDate, language) {
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

  // date representation options
  const dateOptions = {
    weekday: "short",
    month: "long",
    day: "numeric",
  };

  // time representation options
  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
  };

  const date = currentDateTime.toLocaleDateString(
    standardLanguageTag,
    dateOptions,
  );
  const time = currentDateTime.toLocaleTimeString(
    standardLanguageTag,
    timeOptions,
  );

  return { date, time };
}
