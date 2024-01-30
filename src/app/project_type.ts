export interface ProjectType {
  id: string;
  name: string;
  lang: string; //languages/skills used in project
  shortDescription: string;
  longDescription: string;
  link: string; //e.g. github link
  picture: string[]; //path to picture
}
