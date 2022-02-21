import { FC } from 'react';
import { Box } from '@mui/material';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import PageLayoutProps from './PageLayout.types';

const PageLayout: FC<PageLayoutProps> = ({ home, children }) => {
    return (
        <>
            <Header home={home} />
            <Box component="main">
                {children}
            </Box>
            <Footer />
        </>
    );
};

export default PageLayout;
