import { getFlagEmoji, getCountryCode } from 'helpers'

export const getUKFlags = (country: string) => ({
    'England': '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    'Scotland': '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    'Wales': '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
    'Northern Ireland': '🏴󠁧󠁢󠁷󠁬󠁳󠁿'
}[country]
)

export const getCountryFlag = (country: string) => {
    const ukFlag = getUKFlags(country)
    if (ukFlag) return ukFlag

    const countryCode = getCountryCode(country)
    return getFlagEmoji(countryCode)
}