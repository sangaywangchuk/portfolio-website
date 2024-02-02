import ShowCaseHoc from '../hoc/show-hoc';

// import CaseStudies from '@/app/show-case/case-studies/page';
// import LogoDesign from '@/app/show-case/logo-design/page';
// import UxDesign from '@/app/show-case/page';
import CaseStudies from './case-studies';
import LogoDesign from './logo-designs';
import UxDesign from './ux-designs';

export default function ShowCase() {
  return (
    <>
      <ShowCaseHoc path={null}>
        <UxDesign limitLength={1} />
      </ShowCaseHoc>
      <ShowCaseHoc path="logo-design">
        <LogoDesign limitLength={1} />
      </ShowCaseHoc>
      <ShowCaseHoc path="case-studies">
        <CaseStudies limitLength={1} />
      </ShowCaseHoc>
    </>
  );
}
