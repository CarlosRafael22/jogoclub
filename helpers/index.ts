import { COUNTRY_CODE_LIST } from "../const/countryList"

const WEEK_DAYS = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

export const getDayOfTheWeek = (date: Date) => {
    const day = date.getDay()
    return WEEK_DAYS[day]
}

export const getDateFromDDMMYYYY = (dateString: string) => {
    const [day, month, year] = dateString.split('/')
    return new Date(+year, +month - 1, +day)
}

export const getFlagEmoji = (countryCode: string | undefined): string | null => {
    const codePoints = countryCode
      ?.toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt(0));

    if (!codePoints) return null
    return String.fromCodePoint(...codePoints);
}

/** Returns the ISO Alpha-2 code for the country */
export const getCountryCode = (country: string | undefined): string | undefined => COUNTRY_CODE_LIST.find(countryObj => countryObj.name === country)?.code;

export const getFormattedDateAndHourFromDateString = (initialDateString: string): [formmattedDate: string, formmattedHour: string] => {
    const dateObject = new Date(Date.parse(initialDateString));

    const optionsDate = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    } as const;

    const optionsHour = {
        hour: 'numeric',
        minute: "numeric",
    } as const;

    const formatterDate = new Intl.DateTimeFormat("en-GB", optionsDate);
    const formattedParts = formatterDate.formatToParts(dateObject);
    const [weekday, month, day, year] = formattedParts.filter(({ type }) => type !== 'literal');
    const formattedDate = `${weekday.value}, ${month.value} ${day.value} - ${year.value}`;

    const formatterHour = new Intl.DateTimeFormat("en-GB", optionsHour);
    const formattedHour = formatterHour.format(dateObject);
    return [formattedDate, formattedHour];
}

export const getHourText = (hour: string) => hour.replace(':00', '').concat('h');