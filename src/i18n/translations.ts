import { LanguageCode } from '../types/pathway';

export interface TranslationDictionary {
  // Navigation
  nav_roadmap: string;
  nav_wizard: string;
  nav_careers: string;
  nav_compare: string;
  nav_more: string;
  
  // App Bar & Header
  app_subtitle: string;
  parent_mode: string;
  parent_mode_on: string;
  parent_mode_off: string;
  parent_mode_banner: string;
  saved_steps: string;
  ask_ai_guide: string;
  stream_label: string;
  stage_label: string;
  target_career: string;
  jump_to_career: string;

  // Filters & Routes
  filter_all: string;
  filter_primary: string;
  filter_plan_b: string;
  filter_locked: string;

  // Node States
  state_completed: string;
  state_you_are_here: string;
  state_next_step: string;
  state_locked: string;
  state_plan_b: string;
  state_available: string;

  // Stages
  stage_class_10: string;
  stage_inter: string;
  stage_diploma: string;
  stage_ug: string;

  // Detail Sheet Headings
  tap_to_inspect: string;
  what_it_is: string;
  why_it_matters: string;
  mandatory_requirements: string;
  timing_window: string;
  reality_check: string;
  actionable_next_step: string;
  plan_b_contingency: string;
  statutory_citation: string;
  open_portal: string;
  done_btn: string;
  bookmark_step: string;
  ask_ai_step: string;

  // Stream Descriptions
  stream_mpc_title: string;
  stream_mpc_desc: string;
  stream_bipc_title: string;
  stream_bipc_desc: string;
  stream_mec_title: string;
  stream_mec_desc: string;
  stream_cec_title: string;
  stream_cec_desc: string;
  stream_hec_title: string;
  stream_hec_desc: string;
  stream_poly_title: string;
  stream_poly_desc: string;
  stream_pcmb_title: string;
  stream_pcmb_desc: string;

  // More menu
  more_title: string;
  more_subtitle: string;
  more_switch_matrix: string;
  more_switch_matrix_sub: string;
  more_exams: string;
  more_exams_sub: string;
  more_degree_lookup: string;
  more_degree_lookup_sub: string;
  more_ai_counselor: string;
  more_ai_counselor_sub: string;
  more_preferences: string;
  more_language: string;
  more_language_sub: string;
  more_bookmarks: string;
  more_bookmarks_sub: string;
  more_view_btn: string;
  more_back: string;

  // Wizard (Forward Path Finder)
  wizard_title: string;
  wizard_subtitle: string;
  wizard_desc: string;
  step1_title: string;
  step2_title: string;
  step3_title: string;
  step4_title: string;
  step5_title: string;
  btn_generate_roadmap: string;
  interests_label: string;
  interests_tech: string;
  interests_medical: string;
  interests_finance: string;
  interests_law: string;
  interests_design: string;
  interests_govt: string;
  interests_core: string;

  // Careers (Backward Path Finder)
  careers_title: string;
  careers_subtitle: string;
  careers_desc: string;
  search_placeholder: string;
  all_industries: string;
  ind_software: string;
  ind_healthcare: string;
  ind_finance: string;
  ind_law: string;
  ind_design: string;
  ind_govt: string;
  btn_trace_roadmap: string;
  skills_label: string;
  annual_salary_label: string;
  mandatory_degree_label: string;

  // Compare Tab
  compare_title: string;
  compare_subtitle: string;
  compare_preset_mpc_vs_poly: string;
  compare_preset_btech_vs_bca: string;
  compare_preset_mbbs_vs_bpharm: string;
  compare_preset_ca_vs_bba: string;
  duration_label: string;
  cost_tier_label: string;
  risk_level_label: string;
  pros_label: string;
  cons_label: string;

  // Demo Personas
  demo_personas_title: string;
  demo_personas_sub: string;
  persona_rahul: string;
  persona_sneha: string;
  persona_kiran: string;
  persona_pooja: string;
  persona_arjun: string;
}

export const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  en: {
    nav_roadmap: 'Roadmap',
    nav_wizard: 'Wizard',
    nav_careers: 'Careers',
    nav_compare: 'Compare',
    nav_more: 'Pivots & Exams',

    app_subtitle: 'Indian Student Career Roadmap',
    parent_mode: 'Parent',
    parent_mode_on: 'Parent Mode ON',
    parent_mode_off: 'Parent Mode OFF',
    parent_mode_banner: 'Parent View: Showing timeline in years, entrance intensity & budget tier',
    saved_steps: 'Saved',
    ask_ai_guide: 'AI Guide',
    stream_label: 'Stream:',
    stage_label: 'Current Stage:',
    target_career: 'Target Career:',
    jump_to_career: 'Jump to Target Career...',

    filter_all: 'All Paths',
    filter_primary: 'Plan A',
    filter_plan_b: 'Plan B',
    filter_locked: 'Locked',

    state_completed: 'COMPLETED',
    state_you_are_here: 'YOU ARE HERE',
    state_next_step: 'IMMEDIATE ACTION',
    state_locked: 'RESTRICTED',
    state_plan_b: 'PLAN-B ROUTE',
    state_available: 'AVAILABLE',

    stage_class_10: 'Class 10',
    stage_inter: 'Class 11/12 (Inter)',
    stage_diploma: '3-Yr Diploma',
    stage_ug: 'College Degree',

    tap_to_inspect: 'Tap to view statutory details',
    what_it_is: 'What It Is & Core Scope',
    why_it_matters: 'Why It Matters for Your Future',
    mandatory_requirements: 'Mandatory Statutory Prerequisites',
    timing_window: 'Timing & Application Window',
    reality_check: 'Reality Check (Job Requirements vs Degree)',
    actionable_next_step: 'Actionable Next Step',
    plan_b_contingency: 'Contingency Plan-B Route',
    statutory_citation: 'Official Regulatory Citation',
    open_portal: 'Open Official Portal',
    done_btn: 'Done',
    bookmark_step: 'Bookmark Step',
    ask_ai_step: 'Ask AI Counselor About This Step',

    stream_mpc_title: 'MPC (Mathematics, Physics, Chemistry)',
    stream_mpc_desc: 'Standard launchpad for engineering, architecture, pure sciences, and computing across India.',
    stream_bipc_title: 'BiPC (Biology, Physics, Chemistry)',
    stream_bipc_desc: 'Primary gateway to clinical healthcare, pharmaceuticals, biotechnology, and agricultural sciences.',
    stream_mec_title: 'MEC (Mathematics, Economics, Commerce)',
    stream_mec_desc: 'Combines quantitative mathematics with accounting, economics, and business finance.',
    stream_cec_title: 'CEC (Civics, Economics, Commerce)',
    stream_cec_desc: 'Focuses on commerce, public administration, and economics without higher mathematics.',
    stream_hec_title: 'HEC / Humanities (History, Economics, Civics)',
    stream_hec_desc: 'In-depth foundation for 5-Year Law (CLAT), Design, and UPSC Civil Services.',
    stream_poly_title: '3-Year Polytechnic Diploma (Engineering)',
    stream_poly_desc: 'Practical engineering diploma post-10th with Lateral Entry (ECET) directly into 2nd year B.Tech.',
    stream_pcmb_title: 'PCMB (Physics, Chemistry, Math, Biology)',
    stream_pcmb_desc: 'Dual-science combination retaining maximum career versatility across medical and engineering.',

    more_title: 'Explore Advanced Pathways & Rules',
    more_subtitle: 'Statutory transition matrices, exam bulletins, degree lookups, and AI guidance.',
    more_switch_matrix: 'Career Switch Matrix',
    more_switch_matrix_sub: '"What if I change my mind?" (NIOS & Bridging)',
    more_exams: 'Entrance Exams Directory',
    more_exams_sub: 'JEE, NEET, EAMCET, ECET, CUET, CLAT windows',
    more_degree_lookup: 'Degree Reverse Lookup',
    more_degree_lookup_sub: '"What can I do with my college degree?"',
    more_ai_counselor: 'Pathway AI Counselor',
    more_ai_counselor_sub: 'Grounded advice in English, Telugu & Hindi',
    more_preferences: 'Preferences & Controls',
    more_language: 'Language (భాష / भाषा)',
    more_language_sub: 'Select application display language',
    more_bookmarks: 'Bookmarked Steps',
    more_bookmarks_sub: 'Offline cached milestones',
    more_view_btn: 'View',
    more_back: '← Back to Menu',

    // Wizard (Forward Path Finder)
    wizard_title: 'Forward Exploration Wizard',
    wizard_subtitle: 'Where Can You Go From Where You Are?',
    wizard_desc: 'Select your current education stage and subject stream. Our deterministic rule engine checks official statutory prerequisites (AICTE, UGC, NMC, BIEAP/TSBIE) to map your valid primary degrees, lateral routes, and Plan-B alternatives.',
    step1_title: 'Step 1: Your Current Education Stage',
    step2_title: 'Step 2: Education Board & Regional State',
    step3_title: 'Step 3: Selected Subject Stream',
    step4_title: 'Step 4: Career Interests & Direction',
    step5_title: 'Step 5: Verified Roadmap Options',
    btn_generate_roadmap: 'Generate Verified Roadmap',
    interests_label: 'Select Your Career Interests:',
    interests_tech: 'Software & Technology',
    interests_medical: 'Healthcare & Medicine',
    interests_finance: 'Finance & Commerce',
    interests_law: 'Law & Governance',
    interests_design: 'Design & Creative',
    interests_govt: 'Civil Services / Govt',
    interests_core: 'Core Engineering & Infra',

    // Careers (Backward Path Finder)
    careers_title: 'Target Career → Educational Roadmap',
    careers_subtitle: 'Reverse Trace Engine',
    careers_desc: 'Know what you want to become? Work backward from the job role to uncover mandatory degree requirements, competitive entrance exams, compulsory Class 11-12 streams, and reality check skills.',
    search_placeholder: 'Search careers (e.g. Software Engineer, Doctor, CA, Pilot)...',
    all_industries: 'All Industries',
    ind_software: 'Software & IT',
    ind_healthcare: 'Healthcare & Medicine',
    ind_finance: 'Finance & CA',
    ind_law: 'Corporate Law',
    ind_design: 'Product & UX Design',
    ind_govt: 'Civil Services / Govt',
    btn_trace_roadmap: 'Trace Reverse Roadmap',
    skills_label: 'Critical Skills',
    annual_salary_label: 'Starting Salary',
    mandatory_degree_label: 'Mandatory Degree',

    // Compare Tab
    compare_title: 'Side-by-Side Path Comparison',
    compare_subtitle: 'Empirical comparison of education paths by timeline, entrance difficulty, cost tier, and career outcomes.',
    compare_preset_mpc_vs_poly: 'MPC (Inter) vs Polytechnic Diploma',
    compare_preset_btech_vs_bca: 'B.Tech CSE vs BCA + MCA',
    compare_preset_mbbs_vs_bpharm: 'MBBS (Medicine) vs B.Pharmacy',
    compare_preset_ca_vs_bba: 'CA Foundation vs BBA FinTech',
    duration_label: 'Total Duration',
    cost_tier_label: 'Financial Budget Tier',
    risk_level_label: 'Competition Risk',
    pros_label: 'Core Advantages',
    cons_label: 'Reality Checks & Bottlenecks',

    // Demo Personas
    demo_personas_title: 'Quick Presentation Personas',
    demo_personas_sub: 'Test instant realistic student scenarios during presentation',
    persona_rahul: '🎓 Rahul (10th CBSE - Exploring MPC)',
    persona_sneha: '🩺 Sneha (12th BiPC - Medical & NEET)',
    persona_kiran: '⚡ Kiran (Diploma - ECET Lateral Entry)',
    persona_pooja: '📊 Pooja (12th MEC - CA & Finance)',
    persona_arjun: '⚖️ Arjun (12th HEC - Law & Civil Services)'
  },
  te: {
    nav_roadmap: 'రోడ్‌మ్యాప్',
    nav_wizard: 'మార్గదర్శి',
    nav_careers: 'వృత్తులు',
    nav_compare: 'పోల్చండి',
    nav_more: 'మార్పులు & పరీక్షలు',

    app_subtitle: 'భారతీయ విద్యార్థి కెరీర్ గైడ్',
    parent_mode: 'తల్లిదండ్రులు',
    parent_mode_on: 'తల్లిదండ్రుల మోడ్ ఆన్',
    parent_mode_off: 'తల్లిదండ్రుల మోడ్ ఆఫ్',
    parent_mode_banner: 'తల్లిదండ్రుల వీక్షణ: వ్యవధి (సంవత్సరాలు), ప్రవేశ పరీక్షల తీవ్రత మరియు బడ్జెట్ అంచనా',
    saved_steps: 'సేవ్ చేసినవి',
    ask_ai_guide: 'AI మార్గదర్శి',
    stream_label: 'సమూహం (స్ట్రీమ్):',
    stage_label: 'ప్రస్తుత తరగతి/దశ:',
    target_career: 'లక్ష్య కెరీర్:',
    jump_to_career: 'లక్ష్య వృత్తిని ఎంచుకోండి...',

    filter_all: 'అన్ని మార్గాలు',
    filter_primary: 'ప్లాన్ A (ప్రధాన)',
    filter_plan_b: 'ప్లాన్ B (ప్రత్యామ్నాయ)',
    filter_locked: 'లాక్ అయినవి',

    state_completed: 'పూర్తయింది',
    state_you_are_here: 'మీరు ఇక్కడ ఉన్నారు',
    state_next_step: 'తక్షణ చర్య (తదుపరి అడుగు)',
    state_locked: 'పరిమితి (లాక్ చేయబడింది)',
    state_plan_b: 'ప్లాన్-బి ప్రత్యామ్నాయం',
    state_available: 'అందుబాటులో ఉంది',

    stage_class_10: '10వ తరగతి (SSC)',
    stage_inter: 'ఇంటర్మీడియట్ (11/12)',
    stage_diploma: '3-ఏళ్ల డిప్లొమా',
    stage_ug: 'డిగ్రీ / బి.టెక్',

    tap_to_inspect: 'అధికారిక నిబంధనల వివరాలు చూడండి',
    what_it_is: 'ఇది ఏమిటి & కోర్సు పరిధి',
    why_it_matters: 'మీ భవిష్యత్తుకు ఇది ఎందుకు ముఖ్యం',
    mandatory_requirements: 'తప్పనిసరి చట్టబద్ధ అర్హతలు',
    timing_window: 'సమయం & దరఖాస్తు కాలం',
    reality_check: 'వాస్తవ పరిశీలన (డిగ్రీ సరిపోదు - నైపుణ్యాల వాస్తవం)',
    actionable_next_step: 'తదుపరి ఆచరణాత్మక అడుగు',
    plan_b_contingency: 'ప్లాన్-బి ప్రత్యామ్నాయ మార్గం',
    statutory_citation: 'అధికారిక గెజిట్ మూలం',
    open_portal: 'అధికారిక పోర్టల్ తెరవండి',
    done_btn: 'పూర్తయింది',
    bookmark_step: 'బుక్‌మార్క్ చేయండి',
    ask_ai_step: 'ఈ అడుగు గురించి AI సలహాదారుని అడగండి',

    stream_mpc_title: 'ఎంపీసీ (గణితం, భౌతికశాస్త్రం, రసాయనశాస్త్రం)',
    stream_mpc_desc: 'ఇంజనీరింగ్, కంప్యూటర్ సైన్స్, ఆర్కిటెక్చర్ మరియు రక్షణ రంగాలకు (NDA) అత్యంత కీలకమైన పునాది.',
    stream_bipc_title: 'బైపీసీ (జీవశాస్త్రం, భౌతికశాస్త్రం, రసాయనశాస్త్రం)',
    stream_bipc_desc: 'వైద్యం (MBBS/BDS), ఫార్మసీ, వ్యవసాయం (Agriculture), నర్సింగ్ మరియు బయోటెక్నాలజీకి ప్రధాన మార్గం.',
    stream_mec_title: 'ఎంఈసీ (గణితం, అర్థశాస్త్రం, వాణిజ్యశాస్త్రం)',
    stream_mec_desc: 'చార్టర్డ్ అకౌంటెన్సీ (CA), డేటా అనలిటిక్స్, ఇన్వెస్ట్‌మెంట్ బ్యాంకింగ్ మరియు బిజినెస్ మేనేజ్‌మెంట్ పునాది.',
    stream_cec_title: 'సీఈసీ (పౌరశాస్త్రం, అర్థశాస్త్రం, వాణిజ్యశాస్త్రం)',
    stream_cec_desc: 'గణితంపై ఎక్కువ ఒత్తిడి లేకుండా కామర్స్, బ్యాంకింగ్, లా (Law), మరియు ప్రభుత్వ ఉద్యోగాల ప్రవేశం.',
    stream_hec_title: 'హెచ్ఈసీ (చరిత్ర, అర్థశాస్త్రం, పౌరశాస్త్రం)',
    stream_hec_desc: 'యూపీఎస్సీ సివిల్ సర్వీసెస్ (IAS/IPS), 5-సంవత్సరాల లా (CLAT), మరియు డిజైన్ రంగాలకు ఉత్తమ మార్గం.',
    stream_poly_title: '3-సంవత్సరాల పాలిటెక్నిక్ డిప్లొమా (ఇంజనీరింగ్)',
    stream_poly_desc: 'ప్రాక్టికల్ ఇంజనీరింగ్ డిప్లొమా. ECET ద్వారా నేరుగా B.Tech 2వ సంవత్సరంలోకి (లేటరల్ ఎంట్రీ) ప్రవేశం!',
    stream_pcmb_title: 'పీసీఎంబీ (భౌతిక, రసాయన, గణిత, జీవశాస్త్రం)',
    stream_pcmb_desc: 'ఇంజనీరింగ్ మరియు మెడికల్ రెండు మార్గాలనూ తెరిచి ఉంచే గరిష్ట అవకాశాల సైన్స్ గ్రూప్.',

    more_title: 'ఉన్నత విద్యా మార్గాలు & నిబంధనలు',
    more_subtitle: 'చట్టబద్ధ గెజిట్ సమాచారం, స్ట్రీమ్ మార్పులు, ప్రవేశ పరీక్షలు మరియు AI సలహాలు.',
    more_switch_matrix: 'కెరీర్ మార్పు మ్యాట్రిక్స్',
    more_switch_matrix_sub: '"నా ఆలోచన మారితే ఏమి చేయాలి?" (NIOS & బ్రిడ్జ్ కోర్సులు)',
    more_exams: 'ప్రవేశ పరీక్షల డైరెక్టరీ',
    more_exams_sub: 'JEE, NEET, EAMCET, ECET, CUET, CLAT కాలపట్టిక',
    more_degree_lookup: 'డిగ్రీ రివర్స్ లూకప్',
    more_degree_lookup_sub: '"నా డిగ్రీతో నేను ఏయే ఉద్యోగాలు చేయగలను?"',
    more_ai_counselor: 'పాత్‌వే AI కౌన్సెలర్',
    more_ai_counselor_sub: 'తెలుగు, ఇంగ్లీష్ & హిందీలో అధికారిక సలహాలు',
    more_preferences: 'ప్రాధాన్యతలు & నియంత్రణలు',
    more_language: 'భాష మార్చండి (Language)',
    more_language_sub: 'యాప్ డిస్‌ప్లే భాషను ఎంచుకోండి',
    more_bookmarks: 'సేవ్ చేసిన అడుగులు',
    more_bookmarks_sub: 'ఆఫ్‌లైన్ నిల్వ ఉన్న గమనికలు',
    more_view_btn: 'చూడండి',
    more_back: '← మెనూకి తిరిగి వెళ్ళండి',

    // Wizard (Forward Path Finder)
    wizard_title: 'విద్యా మార్గదర్శి విజార్డ్',
    wizard_subtitle: 'మీ ప్రస్తుత స్థితి నుండి మీరు ఎక్కడికి వెళ్ళగలరు?',
    wizard_desc: 'మీ ప్రస్తుత విద్యా దశ మరియు గ్రూప్‌ను ఎంచుకోండి. AICTE, UGC, NMC, BIEAP నిబంధనల ప్రకారం చట్టబద్ధమైన డిగ్రీలు, ప్రవేశ పరీక్షలు మరియు ప్లాన్-బి ప్రత్యామ్నాయాలను చూడండి.',
    step1_title: 'దశ 1: మీ ప్రస్తుత విద్యా దశ',
    step2_title: 'దశ 2: విద్యా బోర్డు & ప్రాంతీయ రాష్ట్రం',
    step3_title: 'దశ 3: ఎంచుకున్న గ్రూప్ (సబ్జెక్ట్ స్ట్రీమ్)',
    step4_title: 'దశ 4: మీ కెరీర్ ఆసక్తులు & ప్రాధాన్యతలు',
    step5_title: 'దశ 5: సరిచూసిన రోడ్‌మ్యాప్ ఎంపికలు',
    btn_generate_roadmap: 'పూర్తి రోడ్‌మ్యాప్ రూపొందించండి',
    interests_label: 'మీ కెరీర్ ఆసక్తులను ఎంచుకోండి:',
    interests_tech: 'సాఫ్ట్‌వేర్ & టెక్నాలజీ',
    interests_medical: 'వైద్యం & ఆరోగ్య రంగం',
    interests_finance: 'ఫైనాన్స్ & కామర్స్',
    interests_law: 'చట్టం & పాలన (Law)',
    interests_design: 'డిజైన్ & క్రియేటివ్',
    interests_govt: 'సివిల్ సర్వీసెస్ / ప్రభుత్వ ఉద్యోగాలు',
    interests_core: 'కోర్ ఇంజనీరింగ్ & ఇన్‌ఫ్రా',

    // Careers (Backward Path Finder)
    careers_title: 'లక్ష్య ఉద్యోగం → విద్యా రోడ్‌మ్యాప్',
    careers_subtitle: 'రివర్స్ ట్రేస్ ఇంజిన్',
    careers_desc: 'మీరు ఏ వృత్తిని ఎంచుకోవాలనుకుంటున్నారో తెలుసా? ఉద్యోగం నుండి వెనక్కి చూసి అవసరమైన డిగ్రీలు, ప్రవేశ పరీక్షలు మరియు ఇంటర్మీడియట్ గ్రూప్‌ను తెలుసుకోండి.',
    search_placeholder: 'కెరీర్ వెతకండి (ఉదా: Software Engineer, Doctor, CA, Pilot)...',
    all_industries: 'అన్ని పరిశ్రమలు',
    ind_software: 'సాఫ్ట్‌వేర్ & ఐటీ',
    ind_healthcare: 'వైద్యం & హెల్త్‌కేర్',
    ind_finance: 'ఫైనాన్స్ & ఆడిటింగ్ (CA)',
    ind_law: 'కార్పొరేట్ చట్టం (Law)',
    ind_design: 'డిజైన్ & ప్రొడక్ట్ UX',
    ind_govt: 'సివిల్ సర్వీసెస్ / గవర్నమెంట్',
    btn_trace_roadmap: 'రివర్స్ రోడ్‌మ్యాప్ చూపించు',
    skills_label: 'ముఖ్యమైన నైపుణ్యాలు',
    annual_salary_label: 'ప్రారంభ వేతనం',
    mandatory_degree_label: 'తప్పనిసరి డిగ్రీ',

    // Compare Tab
    compare_title: 'విద్యా మార్గాల ప్రత్యక్ష పోలిక',
    compare_subtitle: 'వ్యవధి, ప్రవేశ పరీక్షల పోటీ, ఖర్చు స్థాయి మరియు ఉద్యోగ అవకాశాల సమగ్ర విశ్లేషణ.',
    compare_preset_mpc_vs_poly: 'ఇంటర్ ఎంపీసీ vs పాలిటెక్నిక్ డిప్లొమా',
    compare_preset_btech_vs_bca: 'బి.టెక్ CSE vs బిసిఏ + ఎంసిఏ',
    compare_preset_mbbs_vs_bpharm: 'ఎంబీబీఎస్ (MBBS) vs బి.ఫార్మసీ',
    compare_preset_ca_vs_bba: 'సిఏ ఫౌండేషన్ vs బిబిఏ ఫిన్‌టెక్',
    duration_label: 'మొత్తం వ్యవధి',
    cost_tier_label: 'ఫీజులు & బడ్జెట్ స్థాయి',
    risk_level_label: 'పోటీ తీవ్రత',
    pros_label: 'ప్రధాన ప్రయోజనాలు',
    cons_label: 'వాస్తవ సవాళ్లు & అవరోధాలు',

    // Demo Personas
    demo_personas_title: 'ప్రదర్శన కోసం ఉదాహరణ విద్యార్థి ప్రొఫైల్స్',
    demo_personas_sub: 'ప్రెజెంటేషన్ సమయంలో తక్షణమే నిజమైన విద్యార్థి పరిస్థితులను పరిశీలించండి',
    persona_rahul: '🎓 రాహుల్ (10వ తరగతి CBSE - MPC కోసం)',
    persona_sneha: '🩺 స్నేహ (12వ బైపీసీ - NEET & మెడికల్)',
    persona_kiran: '⚡ కిరణ్ (డిప్లొమా - ECET లేటరల్ ఎంట్రీ)',
    persona_pooja: '📊 పూజ (12వ ఎంఈసీ - CA & ఫైనాన్స్)',
    persona_arjun: '⚖️ అర్జున్ (12వ హెచ్ఈసీ - లా & సివిల్స్)'
  },
  hi: {
    nav_roadmap: 'रोडमैप',
    nav_wizard: 'मार्गदर्शक',
    nav_careers: 'करियर',
    nav_compare: 'तुलना करें',
    nav_more: 'विकल्प व परीक्षा',

    app_subtitle: 'भारतीय छात्र करियर रोडमैप गाइड',
    parent_mode: 'अभिभावक',
    parent_mode_on: 'अभिभावक मोड ऑन',
    parent_mode_off: 'अभिभावक मोड ऑफ',
    parent_mode_banner: 'अभिभावक दृश्य: कुल समय (वर्षों में), प्रवेश परीक्षा प्रतिस्पर्धा व खर्च का अनुमान',
    saved_steps: 'सुरक्षित',
    ask_ai_guide: 'AI गाइड',
    stream_label: 'विषय समूह (स्ट्रीम):',
    stage_label: 'वर्तमान कक्षा/स्तर:',
    target_career: 'लक्ष्य करियर:',
    jump_to_career: 'लक्ष्य करियर चुनें...',

    filter_all: 'सभी मार्ग',
    filter_primary: 'प्लान A (मुख्य)',
    filter_plan_b: 'प्लान B (विकल्प)',
    filter_locked: 'प्रतिबंधित (लॉक)',

    state_completed: 'पूर्ण हो चुका',
    state_you_are_here: 'आप यहाँ हैं',
    state_next_step: 'तत्काल कार्रवाई (अगला कदम)',
    state_locked: 'प्रतिबंधित (नियम अनुसार)',
    state_plan_b: 'प्लान-बी वैकल्पिक मार्ग',
    state_available: 'उपलब्ध मार्ग',

    stage_class_10: 'कक्षा 10वीं',
    stage_inter: 'कक्षा 11/12वीं (इंटर)',
    stage_diploma: '3-वर्षीय डिप्लोमा',
    stage_ug: 'कॉलेज डिग्री (स्नातक)',

    tap_to_inspect: 'आधिकारिक नियम व विवरण देखें',
    what_it_is: 'यह क्या है और इसका दायरा',
    why_it_matters: 'यह आपके भविष्य के लिए क्यों महत्वपूर्ण है',
    mandatory_requirements: 'अनिवार्य वैधानिक पात्रता शर्तें',
    timing_window: 'समय व आवेदन अवधि',
    reality_check: 'वास्तविकता जांच (डिग्री पर्याप्त नहीं - वास्तविक कौशल)',
    actionable_next_step: 'कार्रवाई योग्य अगला कदम',
    plan_b_contingency: 'आपातकालीन प्लान-बी मार्ग',
    statutory_citation: 'आधिकारिक गजट संदर्भ',
    open_portal: 'आधिकारिक पोर्टल खोलें',
    done_btn: 'संपन्न',
    bookmark_step: 'बुकमार्क करें',
    ask_ai_step: 'इस कदम पर AI काउंसलर से पूछें',

    stream_mpc_title: 'एमपीसी (गणित, भौतिकी, रसायन विज्ञान)',
    stream_mpc_desc: 'इंजीनियरिंग, कंप्यूटर साइंस, आर्किटेक्चर और रक्षा सेवाओं (NDA) का सबसे भरोसेमंद आधार।',
    stream_bipc_title: 'बाईपीसी (जीव विज्ञान, भौतिकी, रसायन विज्ञान)',
    stream_bipc_desc: 'चिकित्सा (MBBS/BDS), फार्मेसी, कृषि (Agriculture), और बायोटेक्नोलॉजी का मुख्य द्वार।',
    stream_mec_title: 'एमईसी (गणित, अर्थशास्त्र, वाणिज्य)',
    stream_mec_desc: 'चार्टर्ड अकाउंटेंसी (CA), डेटा एनालिटिक्स, निवेश बैंकिंग और बिजनेस मैनेजमेंट का आधार।',
    stream_cec_title: 'सीईसी (नागरिक शास्त्र, अर्थशास्त्र, वाणिज्य)',
    stream_cec_desc: 'कठिन गणित के बिना वाणिज्य, बैंकिंग, कानून (Law) और सरकारी सेवाओं में जाने का सीधा मार्ग।',
    stream_hec_title: 'एचईसी (इतिहास, अर्थशास्त्र, नागरिक शास्त्र)',
    stream_hec_desc: 'यूपीएससी सिविल सेवा (IAS/IPS), 5-वर्षीय कानून (CLAT), और डिजाइन के लिए सर्वोत्तम आधार।',
    stream_poly_title: '3-वर्षीय पॉलिटेक्निक डिप्लोमा (इंजीनियरिंग)',
    stream_poly_desc: '10वीं के बाद व्यावहारिक इंजीनियरिंग। लेटरल एंट्री (ECET) द्वारा सीधे B.Tech 2nd Year में प्रवेश!',
    stream_pcmb_title: 'पीसीएमबी (भौतिकी, रसायन, गणित, जीव विज्ञान)',
    stream_pcmb_desc: 'इंजीनियरिंग और मेडिकल दोनों क्षेत्रों के विकल्प खुले रखने वाला दोहरा विज्ञान समूह।',

    more_title: 'उन्नत शैक्षणिक मार्ग एवं नियम',
    more_subtitle: 'आधिकारिक गजट नियम, स्ट्रीम परिवर्तन, प्रवेश परीक्षाएं और AI मार्गदर्शन।',
    more_switch_matrix: 'करियर परिवर्तन मैट्रिक्स',
    more_switch_matrix_sub: '"अगर मेरा विचार बदल जाए तो?" (NIOS और ब्रिजिंग)',
    more_exams: 'प्रवेश परीक्षा निर्देशिका',
    more_exams_sub: 'JEE, NEET, EAMCET, ECET, CUET, CLAT का समय चक्र',
    more_degree_lookup: 'डिग्री रिवर्स लुकअप',
    more_degree_lookup_sub: '"अपनी डिग्री के साथ मैं कौन-से करियर चुन सकता हूँ?"',
    more_ai_counselor: 'पाथवे AI काउंसलर',
    more_ai_counselor_sub: 'हिंदी, तेलुगु और अंग्रेजी में प्रमाणित सलाह',
    more_preferences: 'प्राथमिकताएं एवं सेटिंग्स',
    more_language: 'भाषा चुनें (Language)',
    more_language_sub: 'ऐप की मुख्य भाषा बदलें',
    more_bookmarks: 'सहेजे गए कदम',
    more_bookmarks_sub: 'ऑफ़लाइन बुकमार्क किए गए मील के पत्थर',
    more_view_btn: 'देखें',
    more_back: '← मुख्य मेनू पर वापस',

    // Wizard (Forward Path Finder)
    wizard_title: 'शैक्षणिक मार्गदर्शक विज़ार्ड',
    wizard_subtitle: 'आप अपनी वर्तमान स्थिति से कहाँ जा सकते हैं?',
    wizard_desc: 'अपनी वर्तमान कक्षा और विषय समूह (स्ट्रीम) चुनें। AICTE, UGC, NMC, BIEAP सरकारी नियमों के आधार पर मान्य डिग्रियों, प्रवेश परीक्षाओं और प्लान-बी विकल्पों को जानें।',
    step1_title: 'चरण 1: आपकी वर्तमान शिक्षा अवस्था',
    step2_title: 'चरण 2: शिक्षा बोर्ड और गृह राज्य',
    step3_title: 'चरण 3: चुना गया विषय समूह (स्ट्रीम)',
    step4_title: 'चरण 4: आपकी करियर रुचियां और दिशा',
    step5_title: 'चरण 5: सत्यापित रोडमैप विकल्प',
    btn_generate_roadmap: 'सत्यापित रोडमैप तैयार करें',
    interests_label: 'अपनी करियर रुचियां चुनें:',
    interests_tech: 'सॉफ्टवेयर एवं टेक्नोलॉजी',
    interests_medical: 'स्वास्थ्य एवं चिकित्सा',
    interests_finance: 'फाइनेंस एवं कॉमर्स',
    interests_law: 'कानून एवं शासन (Law)',
    interests_design: 'डिज़ाइन एवं रचनात्मक क्षेत्र',
    interests_govt: 'सिविल सेवा / सरकारी नौकरियां',
    interests_core: 'कोर इंजीनियरिंग एवं इंफ्रास्ट्रक्चर',

    // Careers (Backward Path Finder)
    careers_title: 'लक्ष्य करियर → शैक्षणिक रोडमैप',
    careers_subtitle: 'रिवर्स ट्रेस इंजन',
    careers_desc: 'क्या आप जानते हैं कि आप क्या बनना चाहते हैं? नौकरी की भूमिका से पीछे की ओर काम करके आवश्यक डिग्री, प्रवेश परीक्षाएं, अनिवार्य 11वीं-12वीं स्ट्रीम और कौशल जानें।',
    search_placeholder: 'करियर खोजें (जैसे Software Engineer, Doctor, CA, Pilot)...',
    all_industries: 'सभी उद्योग',
    ind_software: 'सॉफ्टवेयर एवं आईटी',
    ind_healthcare: 'स्वास्थ्य एवं चिकित्सा',
    ind_finance: 'फाइनेंस एवं सीए (CA)',
    ind_law: 'कॉर्पोरेट कानून (Law)',
    ind_design: 'प्रोडक्ट एवं यूएक्स डिज़ाइन',
    ind_govt: 'सिविल सेवा / सरकारी पद',
    btn_trace_roadmap: 'रिवर्स रोडमैप देखें',
    skills_label: 'महत्वपूर्ण कौशल',
    annual_salary_label: 'शुरुआती वेतन',
    mandatory_degree_label: 'अनिवार्य डिग्री',

    // Compare Tab
    compare_title: 'शैक्षणिक मार्गों की सीधी तुलना',
    compare_subtitle: 'अवधि, प्रवेश परीक्षा प्रतिस्पर्धा, खर्च स्तर और करियर परिणामों का व्यापक विश्लेषण।',
    compare_preset_mpc_vs_poly: 'इंटर एमपीसी vs पॉलिटेक्निक डिप्लोमा',
    compare_preset_btech_vs_bca: 'बी.टेक CSE vs बीसीए + एमसीए',
    compare_preset_mbbs_vs_bpharm: 'एमबीबीएस (MBBS) vs बी.फार्मेसी',
    compare_preset_ca_vs_bba: 'सीए फाउंडेशन vs बीबीए फिनटेक',
    duration_label: 'कुल अवधि',
    cost_tier_label: 'फीस एवं बजट स्तर',
    risk_level_label: 'प्रतियोगिता का जोखिम',
    pros_label: 'मुख्य लाभ',
    cons_label: 'वास्तविक चुनौतियां एवं बाधाएं',

    // Demo Personas
    demo_personas_title: 'प्रस्तुति के लिए त्वरित छात्र प्रोफाइल',
    demo_personas_sub: 'प्रस्तुति के दौरान वास्तविक छात्र स्थितियों का तुरंत परीक्षण करें',
    persona_rahul: '🎓 राहुल (10वीं सीबीएसई - एमपीसी के लिए)',
    persona_sneha: '🩺 स्नेहा (12वीं बाईपीसी - नीट एवं मेडिकल)',
    persona_kiran: '⚡ किरण (डिप्लोमा - ईसीईटी लेटरल एंट्री)',
    persona_pooja: '📊 पूजा (12वीं एमईसी - सीए एवं फाइनेंस)',
    persona_arjun: '⚖️ अर्जुन (12वीं एचईसी - कानून एवं सिविल सेवा)'
  },
  ta: {
    nav_roadmap: 'வழிகாட்டி வரைபடம்',
    nav_wizard: 'வழிகாட்டி',
    nav_careers: 'தொழில்கள்',
    nav_compare: 'ஒப்பீடு',
    nav_more: 'மாற்றங்கள் & தேர்வுகள்',

    app_subtitle: 'இந்திய மாணவர் தொழில் வழிகாட்டி',
    parent_mode: 'பெற்றோர்',
    parent_mode_on: 'பெற்றோர் பயன்முறை இயக்கத்தில்',
    parent_mode_off: 'பெற்றோர் பயன்முறை முடக்கம்',
    parent_mode_banner: 'பெற்றோர் பார்வை: காலம் (ஆண்டுகள்), தேர்வு தீவிரம் மற்றும் செலவு மதிப்பீடு',
    saved_steps: 'சேமிக்கப்பட்டவை',
    ask_ai_guide: 'AI வழிகாட்டி',
    stream_label: 'பிரிவு (Stream):',
    stage_label: 'தற்போதைய நிலை:',
    target_career: 'இலக்கு தொழில்:',
    jump_to_career: 'இலக்கு தொழிலைத் தேர்ந்தெடுக்கவும்...',

    filter_all: 'அனைத்து வழிகள்',
    filter_primary: 'திட்டம் A (முதன்மை)',
    filter_plan_b: 'திட்டம் B (மாற்று)',
    filter_locked: 'பூட்டப்பட்டது',

    state_completed: 'முடிந்தது',
    state_you_are_here: 'நீங்கள் இங்கு உள்ளீர்கள்',
    state_next_step: 'உடனடி நடவடிக்கை (அடுத்த படி)',
    state_locked: 'வரம்பிற்குட்பட்டது',
    state_plan_b: 'திட்டம்-B மாற்று வழி',
    state_available: 'கிடைக்கக்கூடியது',

    stage_class_10: '10 ஆம் வகுப்பு',
    stage_inter: '11/12 ஆம் வகுப்பு',
    stage_diploma: '3 ஆண்டு டிப்ளமோ',
    stage_ug: 'கல்லூரி பட்டம்',

    tap_to_inspect: 'விதிமுறைகள் மற்றும் விவரங்களைக் காண்க',
    what_it_is: 'இது என்ன & பாடத்திட்டம்',
    why_it_matters: 'உங்கள் எதிர்காலத்திற்கு இது ஏன் முக்கியம்',
    mandatory_requirements: 'கட்டாய தகுதிகள்',
    timing_window: 'நேரம் மற்றும் விண்ணப்ப காலம்',
    reality_check: 'உண்மை சோதனை (பட்டம் மட்டும் போதாது)',
    actionable_next_step: 'அடுத்த நடவடிக்கை படி',
    plan_b_contingency: 'மாற்று திட்டம்-B வழி',
    statutory_citation: 'அதிகாரப்பூர்வ ஆதார குறிப்பு',
    open_portal: 'அதிகாரப்பூர்வ இணையதளத்தைத் திறக்கவும்',
    done_btn: 'சரி',
    bookmark_step: 'சேமிக்கவும்',
    ask_ai_step: 'இந்த படி பற்றி AI வழிகாட்டியிடம் கேளுங்கள்',

    stream_mpc_title: 'MPC (கணிதம், இயற்பியல், வேதியியல்)',
    stream_mpc_desc: 'பொறியியல், கணினி அறிவியல் மற்றும் தொழில்நுட்பத் துறைகளுக்கான முதன்மை தளம்.',
    stream_bipc_title: 'BiPC (உயிரியல், இயற்பியல், வேதியியல்)',
    stream_bipc_desc: 'மருத்துவம் (MBBS/BDS), மருந்தியல், விவசாயம் மற்றும் உயிரி தொழில்நுட்ப நுழைவு வாயில்.',
    stream_mec_title: 'MEC (கணிதம், பொருளாதாரம், வணிகவியல்)',
    stream_mec_desc: 'சிஏ (CA), தரவு பகுப்பாய்வு மற்றும் வணிக நிதி அடித்தளம்.',
    stream_cec_title: 'CEC (குடிமையியல், பொருளாதாரம், வணிகவியல்)',
    stream_cec_desc: 'வணிகம், வங்கி மற்றும் அரசு வேலைகளுக்கான நேரடி பாதை.',
    stream_hec_title: 'HEC (வரலாறு, பொருளாதாரம், குடிமையியல்)',
    stream_hec_desc: 'சட்டம் (CLAT), வடிவமைப்பு மற்றும் சிவில் சர்வீசஸ் (UPSC) அடித்தளம்.',
    stream_poly_title: '3 ஆண்டு பாலிடெக்னிக் டிப்ளமோ (பொறியியல்)',
    stream_poly_desc: 'நேரடி நடைமுறை பொறியியல். ECET மூலம் நேரடியாக B.Tech 2ஆம் ஆண்டில் சேரலாம்!',
    stream_pcmb_title: 'PCMB (இயற்பியல், வேதியியல், கணிதம், உயிரியல்)',
    stream_pcmb_desc: 'பொறியியல் மற்றும் மருத்துவம் இரண்டிற்கும் வாய்ப்பளிக்கும் இரட்டை அறிவியல் குழு.',

    more_title: 'மேம்பட்ட கல்வி வழிகள் மற்றும் விதிகள்',
    more_subtitle: 'அரசு வர்த்தமானி விதிகள், தேர்வுகள் மற்றும் AI வழிகாட்டல்.',
    more_switch_matrix: 'தொழில் மாற்ற வழிகாட்டி',
    more_switch_matrix_sub: '"எண்ணம் மாறினால் என்ன செய்வது?" (NIOS & பாலப் பாடங்கள்)',
    more_exams: 'நுழைவுத் தேர்வுகள் அடைவு',
    more_exams_sub: 'JEE, NEET, EAMCET, ECET, CUET, CLAT கால அட்டவணை',
    more_degree_lookup: 'பட்டப்படிப்பு நேரடி ஆய்வு',
    more_degree_lookup_sub: '"என் பட்டப்படிப்பைக் கொண்டு நான் என்ன செய்ய முடியும்?"',
    more_ai_counselor: 'AI ஆலோசகர்',
    more_ai_counselor_sub: 'தமிழ், தெலுங்கு, இந்தி மற்றும் ஆங்கிலத்தில் வழிகாட்டல்',
    more_preferences: 'அமைப்புகள்',
    more_language: 'மொழியை மாற்றவும்',
    more_language_sub: 'பயன்பாட்டு காட்சி மொழியைத் தேர்ந்தெடுக்கவும்',
    more_bookmarks: 'சேமிக்கப்பட்ட படிகள்',
    more_bookmarks_sub: 'ஆஃப்லைன் குறிப்புகள்',
    more_view_btn: 'காண்க',
    more_back: '← முதன்மைப் பக்கத்திற்குத் திரும்பு',

    // Wizard (Forward Path Finder)
    wizard_title: 'கல்வி வழிகாட்டி விஸார்ட்',
    wizard_subtitle: 'உங்கள் தற்போதைய நிலையிலிருந்து எங்கு செல்லலாம்?',
    wizard_desc: 'உங்கள் தற்போதைய கல்வி நிலை மற்றும் பாடப்பிரிவை தேர்ந்தெடுக்கவும். AICTE, UGC, NMC அரசு விதிமுறைகளின்படி தகுதியான பட்டங்கள் மற்றும் மாற்று வழிகளை அறிந்து கொள்ளுங்கள்.',
    step1_title: 'படி 1: உங்கள் தற்போதைய கல்வி நிலை',
    step2_title: 'படி 2: கல்வி வாரியம் மற்றும் மாநிலம்',
    step3_title: 'படி 3: தேர்ந்தெடுக்கப்பட்ட பாடப்பிரிவு (Stream)',
    step4_title: 'படி 4: உங்கள் தொழில் ஆர்வங்கள்',
    step5_title: 'படி 5: சரிபார்க்கப்பட்ட வழிகாட்டி வரைபடங்கள்',
    btn_generate_roadmap: 'வழிகாட்டி வரைபடத்தை உருவாக்கு',
    interests_label: 'உங்கள் தொழில் ஆர்வங்களைத் தேர்வுசெய்யவும்:',
    interests_tech: 'மென்பொருள் & தொழில்நுட்பம்',
    interests_medical: 'சுகாதாரம் & மருத்துவம்',
    interests_finance: 'நிதி & வர்த்தகம் (Finance)',
    interests_law: 'சட்டம் & நீதித்துறை (Law)',
    interests_design: 'வடிவமைப்பு & படைப்பாற்றல்',
    interests_govt: 'சிவில் சர்வீசஸ் / அரசுப் பணிகள்',
    interests_core: 'பொறியியல் & உள்கட்டமைப்பு',

    // Careers (Backward Path Finder)
    careers_title: 'இலக்கு தொழில் → கல்வி வரைபடம்',
    careers_subtitle: 'பின்னோக்கு ஆய்வு இன்ஜின்',
    careers_desc: 'நீங்கள் என்னவாக வேண்டும் என்று திட்டமிட்டுள்ளீர்களா? அந்தப் பணியில் இருந்து பின்னோக்கிப் பார்த்து தேவையான பட்டப்படிப்பு, தேர்வுகள் மற்றும் 11-12 ஆம் வகுப்பு பாடப்பிரிவை அறியுங்கள்.',
    search_placeholder: 'தொழில்களைத் தேடுங்கள் (உதாரணம்: Software Engineer, Doctor, CA, Pilot)...',
    all_industries: 'அனைத்து துறைகள்',
    ind_software: 'மென்பொருள் & ஐடி',
    ind_healthcare: 'சுகாதாரம் & மருத்துவம்',
    ind_finance: 'நிதி & ஆடிட்டிங் (CA)',
    ind_law: 'கார்ப்பரேட் சட்டம் (Law)',
    ind_design: 'வடிவமைப்பு & UX',
    ind_govt: 'சிவில் சர்வீசஸ் / அரசு பதவிகள்',
    btn_trace_roadmap: 'பின்னோக்கு வரைபடத்தைக் காட்டு',
    skills_label: 'முக்கிய திறன்கள்',
    annual_salary_label: 'தொடக்க ஊதியம்',
    mandatory_degree_label: 'கட்டாய பட்டம்',

    // Compare Tab
    compare_title: 'கல்வி வழிகளின் நேரடி ஒப்பீடு',
    compare_subtitle: 'கால அளவு, நுழைவுத் தேர்வு போட்டி, செலவு மற்றும் வேலைவாய்ப்பு குறித்த விரிவான ஆய்வு.',
    compare_preset_mpc_vs_poly: 'MPC (மேல்நிலை) vs பாலிடெக்னிக் டிப்ளமோ',
    compare_preset_btech_vs_bca: 'பி.டெக் CSE vs BCA + MCA',
    compare_preset_mbbs_vs_bpharm: 'எம்பிபிஎஸ் (MBBS) vs பி.பார்மசி',
    compare_preset_ca_vs_bba: 'சிஏ பவுண்டேஷன் vs பிபிஏ பின்டெக்',
    duration_label: 'மொத்த கால அளவு',
    cost_tier_label: 'கட்டணம் & பட்ஜெட் நிலை',
    risk_level_label: 'போட்டி தீவிரம்',
    pros_label: 'முதன்மை நன்மைகள்',
    cons_label: 'உண்மை சவால்கள் & தடைகள்',

    // Demo Personas
    demo_personas_title: 'விளக்கக்காட்சிக்கான மாதிரி மாணவர்கள்',
    demo_personas_sub: 'விளக்கக்காட்சியின் போது மாணவர் சூழல்களை உடனடியாக சோதிக்கவும்',
    persona_rahul: '🎓 ராகுல் (10 ஆம் வகுப்பு CBSE - MPC)',
    persona_sneha: '🩺 சினேகா (12 ஆம் வகுப்பு BiPC - NEET)',
    persona_kiran: '⚡ கிரண் (டிப்ளமோ - ECET நேரடி சேர்க்கை)',
    persona_pooja: '📊 பூஜா (12 ஆம் வகுப்பு MEC - CA)',
    persona_arjun: '⚖️ அர்ஜுன் (12 ஆம் வகுப்பு HEC - சட்டம்)'
  }
};

export function getTranslation(lang: LanguageCode): TranslationDictionary {
  return TRANSLATIONS[lang] || TRANSLATIONS.en;
}
