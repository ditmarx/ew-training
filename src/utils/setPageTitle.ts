type PageType = 'Home' | 'Event' | 'Launch' | 'Rocket';

export const setPageTitle = (
    pageType: PageType,
    id?: string,
    titleInfo?: string
): void => {
    if (pageType === 'Home') {
        document.title = 'Spaceflights App';
    } else {
        if (titleInfo) {
            document.title = `Spaceflights | ${pageType} (${titleInfo})`;
        } else if (id) {
            document.title = `Spaceflights | ${pageType} (${id})`;
        } else {
            document.title = `Spaceflights | ${pageType}`;
        }
    }
};
