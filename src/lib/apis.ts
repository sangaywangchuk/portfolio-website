import { notFound } from 'next/navigation';
import { ProjectShowCaseModel, ProjectShowCaseRes } from './models';

export const fetchProjectShowCaseItems = async (
  scProjectId?: string,
): Promise<ProjectShowCaseModel[]> => {
  const res = await fetch(
    'https://portfolio-59ebc-default-rtdb.firebaseio.com/showcase.json',
  );
  const data: ProjectShowCaseRes = await res.json();
  const showCaseData: ProjectShowCaseModel[] = Object.keys(data)
    .reduce((filteredResults: ProjectShowCaseModel[], key) => {
      const result = data?.[key];
      filteredResults.push({ ...result, scId: key });
      return filteredResults;
    }, [] as ProjectShowCaseModel[])
    .filter((res) => res.scProjectId === scProjectId);
  return showCaseData;
};

export const fetchProjectShowCaseId = async (
  scId: string,
): Promise<ProjectShowCaseModel> => {
  const res = await fetch(
    `https://portfolio-59ebc-default-rtdb.firebaseio.com/showcase.json`,
  );
  const data: ProjectShowCaseRes = await res.json();
  if (!data?.[scId]) {
    notFound();
  }
  return data?.[scId];
};
