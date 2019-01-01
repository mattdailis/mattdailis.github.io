export interface EducationData {
    school: string;
    // timeframe: [Date, Date];
    classes: string[];
}

export interface ResumeData {
    name: string;
    address: string;
    education: EducationData[]
}