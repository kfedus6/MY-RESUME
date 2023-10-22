export interface IAboutMe {
    id: number,
    name: string,
    lastName: string,
    description: string,
    country: string,
    town: string,
    image: string,
    email: string,
    phone: string,
}

export interface ILinks {
    id: number,
    title: string,
    link: string,
    image: string,
}

export interface ISkills {
    id: number,
    image: string,
    title: string,
    rating: number,
}

export interface IPortfolio {
    id: number,
    image: string,
    title: string,
    link: string,
}

export interface IExperience {
    id: number,
    company: string,
    time: string,
    description: string,
}

export interface IEducation {
    id: number,
    education: string,
    title: string,
    time: string,
    description: string,
}