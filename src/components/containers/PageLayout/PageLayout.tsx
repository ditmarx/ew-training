import { FC } from 'react';
import { Box } from '@mui/material';
import { Footer, Header, Loader } from 'src/components/common';
import PageLayoutProps from './PageLayout.types';

const PageLayout: FC<PageLayoutProps> = ({ 
    home, queryError, queryNoData, children
}) => {
    return (
        <>
            <Header home={home} />
            <Box component="main">
                {(queryError || queryNoData) ? (
                    <Loader isError={queryError} />
                ) : (
                    <>{children}</>
                )}
            </Box>
            <Footer />
        </>
    );
};

export default PageLayout;
