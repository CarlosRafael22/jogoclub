import { getCountryCode, getFlagEmoji } from "./index";

describe('getCountryCode', () => {
    const testCases = [
        ['Brazil', 'BR'],
        ['Portugal', 'PT'],
        ['United States', 'US'],
        ['United Kingdom', 'GB'],
        ['Netherlands', 'NL'],
        ['Morocco', 'MA'],
        ['England', undefined],
        ['Scotland', undefined],
        ['', undefined],
        [undefined, undefined],
        [null, undefined]
    ]

    test.each(testCases)('should return the correct code for %s', (country, expectedCode) => {
        const code = getCountryCode(country)
        expect(code).toBe(expectedCode);
      });
})

describe('getFlagEmoji', () => {
    const testCases = [
        ['BR', '🇧🇷'],
        ['PT', '🇵🇹'],
        ['DE', '🇩🇪'],
        ['US', '🇺🇸'],
        ['NL', '🇳🇱'],
        ['XA', '🇽🇦'],
        ['EN', '🇪🇳'],
        ['', ''],
        [undefined, null],
        [null, null]
    ]

    test.each(testCases)('should return the correct flag for %s', (country, expectedFlag) => {
        const flag = getFlagEmoji(country)
        expect(flag).toBe(expectedFlag);
      });
})