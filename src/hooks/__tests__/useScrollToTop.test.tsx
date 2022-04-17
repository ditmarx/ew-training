import { BrowserRouter, useNavigate } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import useScrollToTop from '../useScrollToTop';

const MockNavigation = () => {
    useScrollToTop();
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate('/home')}>Home</button>
            <button onClick={() => navigate('/about')}>About</button>
        </>
    );
};

describe('test "useScrollToTop" custom hook', () => {
    test('should call "window.scrollTo" with zero-args when URL is changed', async () => {

        // save initial reference to window.scrollTo
        const windowScrollTo = window.scrollTo;

        // mock to prevent Error: Not implemented: window.scrollTo
        window.scrollTo = jest.fn();
        const scrollTo = jest.spyOn(window, 'scrollTo');

        let expectedCallTimes = 0;

        render(
            <BrowserRouter>
                <MockNavigation />
            </BrowserRouter>
        );

        const homeButton = screen.getByRole('button', { name: 'Home' });
        const aboutButton = screen.getByRole('button', { name: 'About' });

        // initial call after the first render
        expectedCallTimes++;

        expect(scrollTo).toBeCalledTimes(expectedCallTimes);
        expect(scrollTo).toHaveBeenLastCalledWith(0, 0);

        // change URL, and thus expect an additional call of useScrollToTop
        userEvent.click(homeButton);
        expectedCallTimes++;

        expect(scrollTo).toBeCalledTimes(expectedCallTimes);
        expect(scrollTo).toHaveBeenLastCalledWith(0, 0);

        // click the same button, URL remains unchanged, no calling of useScrollToTop
        userEvent.click(homeButton);

        expect(scrollTo).toBeCalledTimes(expectedCallTimes);

        // change URL, and thus expect an additional call of useScrollToTop
        userEvent.click(aboutButton);
        expectedCallTimes++;

        expect(scrollTo).toBeCalledTimes(expectedCallTimes);
        expect(scrollTo).toHaveBeenLastCalledWith(0, 0);

        // click the same button, URL remains unchanged, no calling of useScrollToTop
        userEvent.click(aboutButton);

        expect(scrollTo).toBeCalledTimes(expectedCallTimes);

        // change URL, and thus expect an additional call of useScrollToTop
        userEvent.click(homeButton);
        expectedCallTimes++;

        expect(scrollTo).toBeCalledTimes(expectedCallTimes);
        expect(scrollTo).toHaveBeenLastCalledWith(0, 0);

        // click the same button, URL remains unchanged, no calling of useScrollToTop
        userEvent.click(homeButton);

        expect(scrollTo).toBeCalledTimes(expectedCallTimes);

        // restore initial reference
        window.scrollTo = windowScrollTo;
    });
});
