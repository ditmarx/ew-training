import { FC } from 'react';
import ArrowIconTypes from './ArrowIcon.types';
import { ReactComponent as ArrowLeftIcon } from 'assets/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from 'assets/arrow-right.svg';

const ArrowIcon: FC<ArrowIconTypes> = ({ direction, width }) => {
    return (
        <>
            {(direction === 'right') && <ArrowRightIcon width={width} />}
            {(direction === 'left') && <ArrowLeftIcon width={width} />}
        </>
    );
};

export default ArrowIcon;
