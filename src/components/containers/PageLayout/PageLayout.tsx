import { FC } from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import PageLayoutProps from './PageLayout.types';

const PageLayout: FC<PageLayoutProps> = ({ home, children }) => {
    return (
        <>
            <Header home={home} />
            {children}
            <Footer />
        </>
    );
};

export default PageLayout;
