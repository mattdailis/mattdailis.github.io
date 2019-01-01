import * as React from 'react';

import {resumeData} from './resume-data';

import {ResumeData} from './resume-types'

const ResumeTemplate: React.ComponentType<ResumeData> = 
    ({
        name, 
        address, 
        education
    }) => (
    <div>
        <div>{name}</div>
        <div>{address}</div>
        {education.map(ed => 
            <div>
                <div>{ed.school}</div>
                {ed.classes.map(cl => 
                    <div>{cl}</div>)}
            </div>
        )}
        
    </div>)

export const Resume = () => <ResumeTemplate {...resumeData} />