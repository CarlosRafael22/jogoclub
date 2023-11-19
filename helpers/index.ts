const WEEK_DAYS = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

export const getDayOfTheWeek = (date: Date) => {
    const day = date.getDay()
    return WEEK_DAYS[day]
}

export const getDateFromDDMMYYYY = (dateString: string) => {
    const [day, month, year] = dateString.split('/')
    return new Date(+year, +month - 1, +day)
}