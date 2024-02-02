import BriefService from './brief-service/page';
import Intro from './intro/page';
import WorkStation from './work-station/page';
import ShowCase from '@/components/show-case';
import CvButton from '@/components/cv-button/cv-button';

export default function Home() {
  return (
    <main>
      <Intro />
      <div id="show-case">
        <ShowCase />
      </div>
      <BriefService />
      {/* <WorkStation /> */}
      <CvButton />
    </main>
  );
}
