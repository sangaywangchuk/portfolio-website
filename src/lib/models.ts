export interface ProjectShowCaseModel {
  scId: string;
  scCompanyName: string;
  scDescription: string;
  scLink: string;
  scType: string;
  scBgImage: string;
  scCompanyLogo: string;
  scProjectId: string;
  scDetails: ShowCaseDetails[];
}

export interface ProjectShowCaseRes {
  [key: string]: ProjectShowCaseModel;
}

export interface ShowCaseDetails {
  title: string;
  description: string;
  bannerImage: string;
}
