import React from 'react';
import Section from './Section';
import { EDUCATION } from '../constants';

interface EducationProps {
  id: string;
  title: string;
}

const Education: React.FC<EducationProps> = ({ id, title }) => {
  return (
    <Section id={id} title={title}>
      <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-8">
        <ul>
          {EDUCATION.map(item => (
            <li key={item.degree} className="text-slate-400">
              <p className="font-semibold text-slate-300">{item.degree}</p>
              <p>{item.institution}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Education;