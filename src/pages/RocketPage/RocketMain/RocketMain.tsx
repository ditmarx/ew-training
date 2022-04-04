import { FC } from 'react';
import { MainSection } from 'src/components/containers';
import RocketDetails from './RocketDetails';
import RocketMainProps from './RocketMain.types';

const RocketMain: FC<RocketMainProps> = ({ rocket }) => {
    return (
        <MainSection>
            <RocketDetails rocket={rocket} />
        </MainSection>
    );
};

export default RocketMain;
