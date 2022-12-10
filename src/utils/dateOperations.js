/**
 * Converts epoch format data to local.
 * 
 * @param { Object } epochDate | date in epoch format
 * @returns { Object } local date, local format
 */
export function dateToString(epochDate) {
    let currentDateTime = new Date(0);
    const dateEpoch = epochDate
    currentDateTime.setUTCSeconds(dateEpoch);

    const currentDate = currentDateTime.toLocaleDateString(
        undefined, 
        {
            weekday: "long", 
            year: "numeric", 
            month: "long", 
            day: "numeric"
        }
    );
    const currentTime = currentDateTime.toLocaleTimeString();
    return { currentDate, currentTime }
}