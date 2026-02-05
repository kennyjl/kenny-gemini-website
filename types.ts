
export interface Experience {
  id: string;
  company: string;
  period: string;
  location: string;
  title: string;
  reportTo: string;
  teamSize: string;
  description?: string;
  achievements: string[];
  tasks: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  highlights: string[];
}

export interface Education {
  period: string;
  school: string;
  degree: string;
  major: string;
  honors: string[];
  experience: string[];
}

export interface Award {
  name: string;
  year: string;
  description: string;
}
