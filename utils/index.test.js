import { getRoundedScoreText } from '.';

describe('getRoundedScoreText', () => {
    it('returns 10 for score of 10', () => {
        const output = getRoundedScoreText(10);
        expect(output).toBe('10');
    });
    it('returns 1.2K for score of 1234', () => {
        const output = getRoundedScoreText(1234);
        expect(output).toBe('1.2K');
    });
    it('returns 10K for score of 10234', () => {
        const output = getRoundedScoreText(10234);
        expect(output).toBe('10K');
    });
    it('returns 100K for score of 100234', () => {
        const output = getRoundedScoreText(100234);
        expect(output).toBe('100K');
    });
    it('returns 1M for score of 1234567', () => {
        const output = getRoundedScoreText(1234567);
        expect(output).toBe('1.2M');
    });
});
