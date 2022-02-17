import { FC } from 'react';
import { ReactComponent as ArrowLeftIcon } from 'assets/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from 'assets/arrow-right.svg';
import ArrowIconTypes from './ArrowIcon.types';

const ArrowIcon: FC<ArrowIconTypes> = ({ direction, width }) => {
    return (
        direction === 'right' ? (
            <ArrowRightIcon width={width} />
        ) : (
            <ArrowLeftIcon width={width} />
        )
    );
};

export default ArrowIcon;
