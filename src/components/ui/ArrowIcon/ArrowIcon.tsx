import { FC } from 'react';
import { ReactComponent as ArrowLeftIcon } from 'src/assets/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from 'src/assets/arrow-right.svg';
import ArrowIconTypes from './ArrowIcon.types';

const ArrowIcon: FC<ArrowIconTypes> = ({ direction, width }) => {
    return (
        <>
            {(direction === 'right') && <ArrowRightIcon width={width} />}
            {(direction === 'left') && <ArrowLeftIcon width={width} />}
        </>
    );
};

export default ArrowIcon;
