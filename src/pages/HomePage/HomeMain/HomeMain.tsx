import { MainSection } from 'src/components/containers';
import { RecentEvents } from 'src/components/common';
import LaunchesOverview from './LaunchesOverview';

const HomeMain = () => {
    return (
        <MainSection>
            <RecentEvents />
            <LaunchesOverview />
        </MainSection>
    );
};

export default HomeMain;
