import { BoxProps } from '@mui/material';

type InfoItemProps = {
    term: string;
    value: string | number | null;
    units?: string;
    vertical?: boolean;
    centered?: boolean;
} & BoxProps;

export default InfoItemProps;
