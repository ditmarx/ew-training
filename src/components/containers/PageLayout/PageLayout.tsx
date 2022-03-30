import { FC } from 'react';
import { Box } from '@mui/material';
import { Footer, Header } from 'src/components/common';
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
