import { 
    getYoutubeIdFromUrl,
    createArrayOfUndef,
    showDate,
} from '../helper';

describe('test "getYoutubeIdFromUrl" function', () => {
    test('should extract id substring', () => {
        const url = 'https://www.youtube.com/watch?v=yU2-0J5w0oE';
        const id = 'yU2-0J5w0oE';
        expect(getYoutubeIdFromUrl(url)).toBe(id)
    });

    test('should return undefined if url is broken', () => {
        const urls = [
            'https://www.youtube.com/watch?w=yU2-0J5w0oE',
            'https://www.youtube.com/watch?v+yU2-0J5w0oE',
            'https://www.youtube.com/',
            '',
            null,
            undefined,
        ];
        urls.forEach(url => {
            expect(getYoutubeIdFromUrl(url)).toBeUndefined();
        });
    });
});

describe('test "createArrayOfUndef" function', () => {
    test('should create an array of undefined values', () => {
        for (let size = 0; size < 10; size++) {
            const arr = createArrayOfUndef(size);
            expect(arr).toHaveLength(size);
            arr.forEach(item => expect(item).toBeUndefined());
        }
    });
});

describe('test "showDate" function', () => {
    test('should return formatted date without time', () => {
        const dateIn = '2022-04-02T12:41:00Z';
        const dateOut = 'April 2, 2022';
        expect(showDate(dateIn)).toBe(dateOut);
    });
    test('should return "Date is Unknown" when there is no input', () => {
        const datesIn = [
            '',
            null,
            undefined,
            // 'abc',
        ];
        const dateOut = 'Date is Unknown';
        datesIn.forEach(dateIn => {
            expect(showDate(dateIn)).toBe(dateOut);
        });
    });
});
