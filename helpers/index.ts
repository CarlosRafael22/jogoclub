import { COUNTRY_CODE_LIST } from "const/countryList"

const WEEK_DAYS = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

export const getDayOfTheWeek = (date: Date) => {
    const day = date.getDay()
    return WEEK_DAYS[day]
}

export const getDateFromDDMMYYYY = (dateString: string) => {
    const [day, month, year] = dateString.split('/')
    return new Date(+year, +month - 1, +day)
}

export const getFlagEmoji = (countryCode: string) => {
    const codePoints = countryCode
      ?.toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt(0));

    if (!codePoints) return null
    return String.fromCodePoint(...codePoints);
}

/** Returns the ISO Alpha-2 code for the country */
export const getCountryCode = (country: string) => COUNTRY_CODE_LIST.find(countryObj => countryObj.name === country)?.code