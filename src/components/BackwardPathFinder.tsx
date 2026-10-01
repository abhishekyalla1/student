import React, { useState } from 'react';
import { JOB_ROLES_DATA } from '../data/pathwayData';
import { JobRole, LanguageCode } from '../types/pathway';
import { getTranslation } from '../i18n/translations';
import {
  Search,
  ArrowRight,
  Briefcase,
  AlertCircle,
  CheckCircle2,
  Layers,
  GraduationCap
} from 'lucide-react';

interface BackwardPathFinderProps {
  onSelectTargetJob: (jobId: string) => void;
  language?: LanguageCode;
}

const LOCALIZED_JOB_TITLES: Record<LanguageCode, Record<string, string>> = {
  en: {},
  te: {
    'SOFTWARE_ENGINEER': 'సాఫ్ట్‌వేర్ ఇంజనీర్ (Software Engineer)',
    'DATA_SCIENTIST': 'డేటా సైంటిస్ట్ / AI ఇంజనీర్',
    'DOCTOR_MBBS': 'వైద్యుడు (MBBS Doctor)',
    'PHARMACIST': 'క్లినికల్ ఫార్మసిస్ట్ (Pharmacist)',
    'CHARTERED_ACCOUNTANT': 'చార్టర్డ్ అకౌంటెంట్ (CA)',
    'FINANCIAL_ANALYST': 'ఫైనాన్షియల్ అనలిస్ట్ / బ్యాంకర్',
    'CORPORATE_LAWYER': 'కార్పొరేట్ అడ్వకేట్ / లాయర్',
    'CIVIL_SERVICES_IAS': 'సివిల్ సర్వెంట్ (IAS / IPS / IFS)',
    'PRODUCT_DESIGNER': 'యూఐ/యూఎక్స్ ప్రొడక్ట్ డిజైనర్',
    'MECHANICAL_ENGINEER': 'మెకానికల్ / కోర్ ఇంజనీర్'
  },
  hi: {
    'SOFTWARE_ENGINEER': 'सॉफ्टवेयर इंजीनियर (Software Engineer)',
    'DATA_SCIENTIST': 'डेटा साइंटिस्ट / AI विशेषज्ञ',
    'DOCTOR_MBBS': 'चिकित्सक (MBBS Doctor)',
    'PHARMACIST': 'क्लीनिकल फार्मासिस्ट (Pharmacist)',
    'CHARTERED_ACCOUNTANT': 'चार्टर्ड अकाउंटेंट (CA)',
    'FINANCIAL_ANALYST': 'वित्तीय विश्लेषक (Financial Analyst)',
    'CORPORATE_LAWYER': 'कॉर्पोरेट वकील (Corporate Lawyer)',
    'CIVIL_SERVICES_IAS': 'सिविल सेवा अधिकारी (IAS / IPS)',
    'PRODUCT_DESIGNER': 'प्रोडक्ट व यूआई डिज़ाइनर',
    'MECHANICAL_ENGINEER': 'मैकेनिकल / कोर इंजीनियर'
  },
  ta: {
    'SOFTWARE_ENGINEER': 'மென்பொருள் பொறியாளர் (Software Engineer)',
    'DATA_SCIENTIST': 'தரவு விஞ்ஞானி (Data Scientist)',
    'DOCTOR_MBBS': 'மருத்துவர் (MBBS Doctor)',
    'PHARMACIST': 'மருந்தாளுநர் (Pharmacist)',
    'CHARTERED_ACCOUNTANT': 'பட்டயக் கணக்காளர் (CA)',
    'FINANCIAL_ANALYST': 'நிதி ஆய்வாளர் (Financial Analyst)',
    'CORPORATE_LAWYER': 'நிறுவன வழக்கறிஞர் (Corporate Lawyer)',
    'CIVIL_SERVICES_IAS': 'சிவில் சர்வீசஸ் அதிகாரி (IAS / IPS)',
    'PRODUCT_DESIGNER': 'தயாரிப்பு வடிவமைப்பாளர் (UX)',
    'MECHANICAL_ENGINEER': 'இயந்திர பொறியாளர் (Mechanical)'
  }
};

export const BackwardPathFinder: React.FC<BackwardPathFinderProps> = ({
  onSelectTargetJob,
  language = 'en'
}) => {
  const t = getTranslation(language);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('ALL');

  const filteredJobs = JOB_ROLES_DATA.filter(job => {
    const jobTitleLoc = LOCALIZED_JOB_TITLES[language]?.[job.id] || job.title;
    const matchesSearch = jobTitleLoc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.industrySector.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.entryLevelSkills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (selectedIndustry === 'ALL') return matchesSearch;
    return matchesSearch && job.industrySector.toLowerCase().includes(selectedIndustry.toLowerCase());
  });

  const industries = [
    { id: 'ALL', label: t.all_industries },
    { id: 'Software', label: t.ind_software },
    { id: 'Healthcare', label: t.ind_healthcare },
    { id: 'Accounting', label: t.ind_finance },
    { id: 'Legal', label: t.ind_law },
    { id: 'Design', label: t.ind_design },
    { id: 'Public', label: t.ind_govt }
  ];

  return (
    <div className="w-full space-y-4 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-4 sm:p-5 text-white shadow-md">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-indigo-200 text-xs font-semibold mb-2">
          <Search className="w-3.5 h-3.5" />
          <span>{t.careers_subtitle}</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
          {t.careers_title}
        </h1>
        <p className="mt-1 text-xs text-slate-300 leading-relaxed">
          {t.careers_desc}
        </p>

        {/* Search Bar */}
        <div className="mt-3.5">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.search_placeholder}
              className="w-full pl-9 pr-3 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 text-xs focus:outline-none focus:bg-white/15 focus:border-indigo-400"
            />
          </div>

          {/* Industry Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-2.5 pb-0.5 scrollbar-none">
            {industries.map(ind => (
              <button
                type="button"
                key={ind.id}
                onClick={() => setSelectedIndustry(ind.id)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition-colors ${
                  selectedIndustry === ind.id
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300'
                }`}
              >
                {ind.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Job Roles */}
      <div className="space-y-3">
        {filteredJobs.map((job: JobRole) => {
          const displayTitle = LOCALIZED_JOB_TITLES[language]?.[job.id] || job.title;

          return (
            <div
              key={job.id}
              className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs hover:border-indigo-300 transition-all"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
                    {job.industrySector}
                  </span>
                  <span className="text-[9px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
                    [{job.evidenceLevel}]
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                  {displayTitle}
                </h3>

                {/* Salary Band */}
                <div className="mt-2 text-xs font-semibold text-emerald-800 bg-emerald-50/80 p-2 rounded-xl border border-emerald-100 flex items-center justify-between">
                  <span className="text-[11px]">{t.annual_salary_label}:</span>
                  <span className="font-extrabold">{job.salaryTiers.entryRange}</span>
                </div>

                {/* Reality Check Callout */}
                <div className="mt-2.5 text-xs bg-amber-50/90 border border-amber-200 p-2.5 rounded-xl text-amber-950">
                  <div className="flex items-center gap-1 font-bold text-amber-900 mb-1 text-[11px]">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Degree Alone Sufficient?</span>
                    <span className={job.degreeAloneSufficient ? 'text-emerald-700 ml-1 font-black' : 'text-red-700 ml-1 font-black'}>
                      {job.degreeAloneSufficient ? 'Yes (Statutory Reg)' : 'No (Skills Required)'}
                    </span>
                  </div>
                  <p className="line-clamp-2 text-[11px] text-amber-900/90 leading-relaxed">
                    {job.prerequisiteRealityCheck}
                  </p>
                </div>

                {/* Requirements Tag */}
                <div className="mt-2.5 space-y-1.5 text-[11px]">
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <GraduationCap className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span className="font-semibold text-slate-500">{t.mandatory_degree_label}:</span>
                    <span className="font-bold text-slate-900">{job.entryDegreePaths.join(', ')}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <Layers className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span className="font-semibold text-slate-500">{t.skills_label}:</span>
                    <span className="font-medium text-slate-800 line-clamp-1">{job.entryLevelSkills.slice(0, 3).join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-3.5 pt-2.5 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onSelectTargetJob(job.id)}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-indigo-50 hover:bg-indigo-600 active:bg-indigo-700 text-indigo-700 hover:text-white font-extrabold text-xs transition-colors group"
                >
                  <span>{t.btn_trace_roadmap}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
