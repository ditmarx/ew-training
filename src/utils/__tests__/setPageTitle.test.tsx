import { setPageTitle } from '../setPageTitle';

describe('test setPageTitle helper function', () => {
    test('should change page title', () => {
        setPageTitle('Events', 25, 'EventTitle');
        expect(document.title).not.toBe('Spaceflights | Event (Title Info for this Event)');

        setPageTitle('Rocket', null, 'RocketTitleString');
        expect(document.title).toBe('Spaceflights | Rocket (RocketTitleString)');

        setPageTitle('Rocket', 33);
        expect(document.title).toBe('Spaceflights | Rocket (33)');

        setPageTitle('Launch', '', null);
        expect(document.title).toBe('Spaceflights | Launch');

        setPageTitle('Home', null, 'RocketTitleString');
        expect(document.title).toBe('Spaceflights App');

        setPageTitle('Home');
        expect(document.title).toBe('Spaceflights App');

        setPageTitle();
        expect(document.title).toBe('Spaceflights | undefined');
    });
});
