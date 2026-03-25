export interface Therapist {
  name: string;
  title: string;
  specialties: string[];
  education: string[];
  certifications: string[];
  career: string[];
  current: string[];
  extra?: string[];
}

export interface TherapistCategory {
  label: string;
  therapists: Therapist[];
}
