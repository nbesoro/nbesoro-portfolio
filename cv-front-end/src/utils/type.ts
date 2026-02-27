export type TechnologieType = {
    category: {
      name: string;
    };
    title: string;
    logo: string;
}

export type UserType = {
    id: string;
    job: string;
    technologies: string;
    first_name: string;
    last_name: string;
    bio: string;
    cv: string;
    linkedin: string;
    github: string;
    gitlab: string;
    youtube: string;
    email: string;
    phone: string;
    calendly: string;
}

export type ExperienceType = {
    works: {
      technologies: TechnologieType[];
      title: string;
      task: string[];
    }[];
    start: string | null;
    end: string | null;
    ongoing: boolean;
    company: string;
    company_logo: string;
    job: string;
}

export type FormationType = {
    year: number;
    school: string;
    diploma: string;
    learned: string[];
}

export type singularProjectType = {
    technologies: TechnologieType[];
    title: string;
    slug: string;
    summary: string;
    description: string;
    image: string;
    banner: string;
    feature_video: string | null;
    feature_img: string | null;
    linkedin: string | null;
    github: string | null;
    gitlab: string | null;
    youtube: string | null;
    website: string | null;
}

export type projectType = singularProjectType[]

export type categoryItemType = {
    technologies: {
      title: string;
      logo: string;
      is_top: boolean;
    }[];
    name: string;
}

export type categoryType = categoryItemType[]
