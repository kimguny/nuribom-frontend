export interface ProgramDetail {
  description: string;
  targets: string[];
  images?: string[];
  goals?: string[];
}

export interface Program {
  title: string;
  summary: string;
  detail: ProgramDetail | null;
}
