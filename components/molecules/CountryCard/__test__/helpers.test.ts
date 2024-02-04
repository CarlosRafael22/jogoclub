import { getCountryFlag, getUKFlags } from "../helpers";

describe('getUKFlags', () => {
    const testCases = [
        ['England', '🏴󠁧󠁢󠁥󠁮󠁧󠁿'],
        ['Scotland', '🏴󠁧󠁢󠁳󠁣󠁴󠁿'],
        ['Wales', '🏴󠁧󠁢󠁷󠁬󠁳󠁿'],
        ['Northern Ireland', '🏴󠁧󠁢󠁷󠁬󠁳󠁿'],
        ['Netherlands', undefined],
        ['Morocco', undefined],
        ['', undefined]
    ]

    test.each(testCases)('should return the correct flag for UK country: %s', (country, expectedFlag) => {
        const flag = getUKFlags(country)
        expect(flag).toBe(expectedFlag);
      });
})

describe('getCountryFlag', () => {
    const testCases = [
        ['England', '🏴󠁧󠁢󠁥󠁮󠁧󠁿'],
        ['Scotland', '🏴󠁧󠁢󠁳󠁣󠁴󠁿'],
        ['Wales', '🏴󠁧󠁢󠁷󠁬󠁳󠁿'],
        ['Northern Ireland', '🏴󠁧󠁢󠁷󠁬󠁳󠁿'],
        ['Brazil', '🇧🇷'],
        ['Portugal', '🇵🇹'],
        ['Germany', '🇩🇪'],
        ['United States', '🇺🇸'],
        ['Netherlands', '🇳🇱'],
        ['Patagonia', null],
        ['Neverland', null],
        ['', null]
    ]

    test.each(testCases)('should return the correct flag for %s', (country, expectedFlag) => {
        const flag = getCountryFlag(country)
        expect(flag).toBe(expectedFlag);
      });
})