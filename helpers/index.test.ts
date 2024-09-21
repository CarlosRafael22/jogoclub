import { getCountryCode, getFlagEmoji, getFormattedDateAndHourFromDateString, getHourText } from "./index";

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
});

describe('getFormattedDateAndHourFromDateString', () => {
    it('should get the right result', () => {
        const text = getFormattedDateAndHourFromDateString("2024-02-26T19:00:00Z");
        expect(text).toEqual(["Monday, 26 February 2024", "20:00"]);
    });
});

describe('getHourText', () => {
    const testCases = [
        ['20:00', '20h'],
        ['20:40', '20:40h'],
        ['01:00', '01h']
    ];

    test.each(testCases)('should return the correct text for %s', (hour, expectedText) => {
        const text = getHourText(hour);
        expect(text).toBe(expectedText);
    });
});