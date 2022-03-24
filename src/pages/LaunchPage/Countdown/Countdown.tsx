import { FC } from 'react';
import { Box } from '@mui/material';
import useCountdownTimer from '../../../hooks/useCountdownTimer';
import { formatCountdown } from './Countdown.utils';
import CountdownProps from './Countdown.types';

const Countdown: FC<CountdownProps> = ({ date, ...props }) => {
    const timeLeft = useCountdownTimer(date);
    return (
        <Box {...props}>
            {formatCountdown(timeLeft)}
        </Box>
    );
};

export default Countdown;
