// import { SxProps, Theme } from "@mui/system";
import { BoxProps } from '@mui/material';

type InfoItemProps = {
    term: string;
    value: string | number | null;
    units?: string;
    vertical?: boolean;
    centered?: boolean;
    // sx?: SxProps<Theme>;
} & BoxProps;

export default InfoItemProps;
