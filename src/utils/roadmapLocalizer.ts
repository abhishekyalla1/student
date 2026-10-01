import { PathwayGraph, PathwayNode, LanguageCode } from '../types/pathway';

// Comprehensive localized overrides for all verified nodes
interface LocalizedNodeData {
  title?: string;
  subtitle?: string;
  stageName?: string;
  lockReason?: string;
  details?: {
    whatItIs?: string;
    whyItMatters?: string;
    mandatoryRequirements?: string;
    whenToDoIt?: string;
    nextStep?: string;
    alternativeRoute?: string;
    realityCheck?: string;
  };
}

const TELUGU_NODE_MAP: Record<string, LocalizedNodeData> = {
  // Class 10 Foundation
  'stage_class_10': {
    title: '10వ తరగతి (సెకండరీ స్కూల్ సర్టిఫికెట్)',
    subtitle: 'విద్యా పునాది బోర్డు పరీక్ష (SSC / CBSE)',
    stageName: 'దశ 1: విద్యా పునాది',
    details: {
      whatItIs: 'రాష్ట్ర లేదా సెంట్రల్ బోర్డు ద్వారా గుర్తింపు పొందిన 10వ తరగతి (SSC/CBSE) వార్షిక పరీక్ష. [OFFICIAL]',
      whyItMatters: 'ఇంటర్మీడియట్ స్ట్రీమ్స్ (MPC/BiPC/MEC) లేదా 3-సంవత్సరాల పాలిటెక్నిక్ డిప్లొమాకు తప్పనిసరి ప్రవేశ అర్హత.',
      mandatoryRequirements: 'గణితం, సైన్స్, సాంఘిక శాస్త్రం మరియు భాషలలో ఉత్తీర్ణత.',
      whenToDoIt: 'మార్చి - ఏప్రిల్ పరీక్షల కాలం. మే నెలలో ఫలితాలు.',
      nextStep: 'మీ కెరీర్ లక్ష్యాల ప్రకారం ఇంటర్మీడియట్ గ్రూప్ (MPC/BiPC/MEC) లేదా పాలిటెక్నిక్ డిప్లొమాను ఎంచుకోండి.',
      alternativeRoute: 'ప్రాక్టికల్ ఇంజనీరింగ్ నైపుణ్యాలు కావాలనుకుంటే 3-సంవత్సరాల పాలిటెక్నిక్ డిప్లొమా (POLYCET ద్వారా) ఎంచుకోవచ్చు.'
    }
  },
  'step_10': {
    title: '10వ తరగతి (బోర్డు పరీక్ష)',
    subtitle: 'విద్యా పునాది మరియు ప్రాథమిక అర్హత',
    stageName: 'దశ 1: విద్యా పునాది',
    details: {
      whatItIs: 'గుర్తింపు పొందిన సెకండరీ బోర్డు పరీక్ష.',
      whyItMatters: 'తదుపరి ఉన్నత విద్యకు తప్పనిసరి చట్టబద్ధమైన పునాది.',
      mandatoryRequirements: 'కనీస ఉత్తీర్ణత మార్కులు.',
      whenToDoIt: 'వార్షిక మార్చి-ఏప్రిల్ పరీక్షలు.',
      nextStep: 'లక్ష్య వృత్తికి అవసరమైన ఇంటర్మీడియట్ గ్రూప్‌లో చేరడం.'
    }
  },

  // MPC Nodes
  'MPC': {
    title: 'ఇంటర్మీడియట్ ఎంపీసీ (గణితం, భౌతిక, రసాయన శాస్త్రం)',
    subtitle: 'గణితం, భౌతికశాస్త్రం, రసాయనశాస్త్రం',
    stageName: 'దశ 2: హయ్యర్ సెకండరీ / ఇంటర్మీడియట్',
    details: {
      whatItIs: 'భారతదేశంలో ఇంజనీరింగ్, ఆర్కిటెక్చర్, ప్యూర్ సైన్సెస్ మరియు కంప్యూటింగ్ రంగాలకు అధికారిక పునాది.',
      whyItMatters: 'దాదాపు 90% సాంకేతిక మరియు ప్రభుత్వ సాంకేతిక ఉద్యోగాల ప్రవేశానికి మార్గం సుగమం చేస్తుంది.',
      mandatoryRequirements: '10వ తరగతిలో ఉత్తీర్ణత (CBSE/ICSE/SSC). [OFFICIAL]',
      whenToDoIt: '10వ తరగతి ఫలితాల వెనువెంటనే (మే - జూలై).',
      nextStep: 'జూనియర్ ఇంటర్ ప్రారంభంలోనే JEE Main మరియు రాష్ట్ర EAPCET ప్రవేశ పరీక్షలకు ప్రణాళిక సిద్ధం చేసుకోండి.',
      alternativeRoute: 'ప్రాక్టికల్ వర్క్‌షాప్ అనుభవం కావాలనుకుంటే 3-ఏళ్ల పాలిటెక్నిక్ డిప్లొమా.',
      realityCheck: 'ఎంపీసీ వల్ల దాదాపు అన్ని డిగ్రీలు తెరిచి ఉంటాయి; కానీ మెడికల్ (MBBS) కోసం బయాలజీ ఉండదు.'
    }
  },
  'node_stream_MPC': {
    title: 'ఇంటర్మీడియట్ ఎంపీసీ (MPC Stream)',
    subtitle: 'గణితం, భౌతికశాస్త్రం, రసాయనశాస్త్రం'
  },
  'node_exam_primary': {
    title: 'జేఈఈ మెయిన్ & రాష్ట్ర ఈఏపీసెట్ / ఎంసెట్',
    subtitle: 'జాతీయ మరియు రాష్ట్ర ఇంజనీరింగ్ ప్రవేశ పరీక్షలు',
    stageName: 'దశ 3: ప్రవేశ పరీక్షల ద్వారం',
    details: {
      whatItIs: 'ఐఐటీ, ఎన్ఐటీ మరియు రాష్ట్ర విశ్వవిద్యాలయాలలో బి.టెక్ సీట్ల కోసం అధికారిక ప్రవేశ పరీక్షలు. [OFFICIAL]',
      whyItMatters: 'మెరిట్ ర్యాంకు ఆధారంగా ప్రభుత్వ ఫీజు రీయింబర్స్‌మెంట్ మరియు అగ్రశ్రేణి కళాశాలల్లో సీటు లభిస్తుంది.',
      mandatoryRequirements: 'ఇంటర్‌లో ఫిజిక్స్, మ్యాథ్స్ ఉత్తీర్ణత. ఎన్ఐటీ/ఐఐటీలకు కనీసం 75% మార్కులు.',
      whenToDoIt: 'జేఈఈ మెయిన్ జనవరి & ఏప్రిల్; రాష్ట్ర ఎంసెట్ మే నెలలో.',
      nextStep: 'వెబ్ కౌన్సెలింగ్ (JoSAA / State Web Counseling) లో పాల్గొనండి.',
      realityCheck: '12 లక్షలకు పైగా విద్యార్థులు జేఈఈ రాస్తారు. కేవలం ఒకే పరీక్షపై ఆధారపడకుండా రాష్ట్ర ఈసెట్ మరియు డీమ్డ్ వర్సిటీల పరీక్షలు కూడా రాయండి.'
    }
  },
  'JEE_MAIN': {
    title: 'జేఈఈ మెయిన్ & రాష్ట్ర ఈఏపీసెట్ (JEE & CET)',
    subtitle: 'నేషనల్ టెస్టింగ్ ఏజెన్సీ (NTA) మరియు రాష్ట్ర కౌన్సిల్ పరీక్షలు'
  },
  'node_primary_degree': {
    title: 'బి.టెక్ కంప్యూటర్ సైన్స్ & ఇంజనీరింగ్ (4 సంవత్సరాలు)',
    subtitle: 'సాఫ్ట్‌వేర్ ఇంజనీరింగ్ ప్రొఫెషనల్ డిగ్రీ',
    stageName: 'దశ 4: గ్రాడ్యుయేషన్ డిగ్రీ',
    details: {
      whatItIs: 'AICTE గుర్తింపు పొందిన 4-సంవత్సరాల ప్రొఫెషనల్ ఇంజనీరింగ్ గ్రాడ్యుయేషన్. [OFFICIAL]',
      whyItMatters: 'గ్లోబల్ టెక్ పరిశ్రమ, ప్రోడక్ట్ కంపెనీలు మరియు ఉన్నత విద్యకు (MS/M.Tech) ప్రధాన ద్వారం.',
      mandatoryRequirements: 'ఇంటర్‌లో ఎంపీసీ ఉత్తీర్ణత + ఈఏపీసెట్ లేదా జేఈఈ ర్యాంకు.',
      whenToDoIt: 'ఆగస్టు నుండి సెమిస్టర్ తరగతులు ప్రారంభం.',
      nextStep: 'డిగ్రీ 1వ సంవత్సరం నుంచే డేటా స్ట్రక్చర్స్, అల్గారిథమ్స్ మరియు వెబ్ డెవలప్‌మెంట్ సాధన ప్రారంభించండి.',
      realityCheck: 'ముఖ్యమైన వాస్తవం: కేవలం కళాశాల డిగ్రీ ఉండటం వల్ల ఉద్యోగం రాదు! నియామకాల్లో మీ గిట్‌హబ్ కోడింగ్ ప్రాజెక్టులు, సమస్య పరిష్కార నైపుణ్యాలు మరియు ఇంటర్న్‌షిప్‌లే కీలకం.'
    }
  },
  'BTECH_CSE': {
    title: 'బి.టెక్ కంప్యూటర్ సైన్స్ & ఇంజనీరింగ్',
    subtitle: 'AICTE గుర్తింపు పొందిన 4-సంవత్సరాల డిగ్రీ'
  },
  'node_skills_bridge': {
    title: 'పరిశ్రమ వాస్తవ నైపుణ్యాల వంతెన (Skills Bridge)',
    subtitle: 'DSA + 2-3 లైవ్ ప్రాజెక్టులు + ఇంటర్న్‌షిప్',
    stageName: 'దశ 5: పరిశ్రమ సన్నద్ధత',
    details: {
      whatItIs: 'కళాశాల సిలబస్ నుండి కార్పొరేట్ ఉద్యోగ అవసరాలకు మధ్య ఉన్న అంతరాన్ని పూడ్చే ఆచరణాత్మక నైపుణ్యాల సాధన.',
      whyItMatters: 'కంపెనీలు మార్కుల కంటే కోడింగ్ పరిష్కారాలు మరియు ప్రదర్శించదగిన ప్రాజెక్టులను చూసి నియామకాలు చేస్తాయి.',
      mandatoryRequirements: 'సమస్య పరిష్కార నైపుణ్యాలు, గిట్‌హబ్ రిపోజిటరీలు మరియు ప్రాక్టికల్ ఇంటర్న్‌షిప్ అనుభవం.',
      whenToDoIt: 'డిగ్రీ 3వ మరియు 4వ సంవత్సరాల కాలంలో.',
      nextStep: 'క్యాంపస్ ఇంటర్వ్యూలు మరియు ఆఫ్-క్యాంపస్ రిఫరల్స్ కోసం సిద్ధం కావాలి.',
      realityCheck: '80% కంటే ఎక్కువ ఇంజనీరింగ్ గ్రాడ్యుయేట్లకు సొంత ప్రాజెక్టులు లేకపోవడం వల్లే క్యాంపస్ ప్లేస్‌మెంట్లలో తిరస్కరణ ఎదురవుతుంది.'
    }
  },
  'step_reality_bridge': {
    title: 'పరిశ్రమ వాస్తవ నైపుణ్యాల వంతెన',
    subtitle: 'డిగ్రీకి అదనంగా ఉద్యోగానికి అవసరమైన ప్రాక్టికల్ నైపుణ్యాలు',
    stageName: 'దశ 5: పరిశ్రమ సన్నద్ధత'
  },
  'node_target_job': {
    title: 'సాఫ్ట్‌వేర్ ఇంజనీర్ / క్లౌడ్ డెవలపర్',
    subtitle: 'ఐటీ ప్రాడక్ట్ కంపెనీలు / టెక్నాలజీ రంగాలు',
    stageName: 'దశ 6: లక్ష్య వృత్తి & కెరీర్',
    details: {
      whatItIs: 'వెబ్, మొబైల్ లేదా ఎంటర్‌ప్రైజ్ సాఫ్ట్‌వేర్ ఉత్పత్తులను నిర్మించే పూర్తి స్థాయి ఇంజనీరింగ్ ఉద్యోగం.',
      whyItMatters: 'సుస్థిరమైన, ఉన్నత వృద్ధి మరియు ఆకర్షణీయమైన జీతభత్యాలు కలిగిన ప్రొఫెషనల్ కెరీర్.',
      mandatoryRequirements: 'బి.టెక్ లేదా బిసిఏ + ప్రూఫ్ ఆఫ్ వర్క్ కోడింగ్ పోర్ట్‌ఫోలియో.',
      whenToDoIt: 'డిగ్రీ చివరి సంవత్సరం క్యాంపస్ లేదా ఆఫ్-క్యాంపస్ ప్లేస్‌మెంట్లు.',
      nextStep: '2-3 సంవత్సరాలలో సీనియర్ డెవలపర్ / టెక్ లీడ్ స్థాయికి ఎదగడం.',
      realityCheck: 'సాంకేతిక పరిజ్ఞానం వేగంగా మారుతున్నందున నిరంతర అభ్యాసం చాలా ముఖ్యం.'
    }
  },
  'SOFTWARE_ENGINEER': {
    title: 'సాఫ్ట్‌వేర్ ఇంజనీర్ (Software Engineer)',
    subtitle: 'ఐటీ ప్రొడక్ట్ & సాఫ్ట్‌వేర్ రంగాలు'
  },
  'step_target_job': {
    stageName: 'దశ 6: గమ్యస్థాన కెరీర్'
  },

  // BiPC Nodes (Medical / Pharma)
  'BiPC': {
    title: 'ఇంటర్మీడియట్ బైపీసీ (జీవ, భౌతిక, రసాయన శాస్త్రం)',
    subtitle: 'బయాలజీ, ఫిజిక్స్, కెమిస్ట్రీ',
    stageName: 'దశ 2: హయ్యర్ సెకండరీ / ఇంటర్మీడియట్',
    details: {
      whatItIs: 'వైద్యం, ఫార్మసీ, బయోటెక్నాలజీ మరియు వ్యవసాయ రంగాలకు అధికారిక మార్గం. [OFFICIAL]',
      whyItMatters: 'భారతదేశంలో నీట్ (NEET) రాయడానికి మరియు క్లినికల్ మెడిసిన్ చదవడానికి జీవశాస్త్రం తప్పనిసరి.',
      mandatoryRequirements: '10వ తరగతి ఉత్తీర్ణత.',
      whenToDoIt: 'మే - జూలై ఇంటర్మీడియట్ ప్రవేశాలు.',
      nextStep: 'మొదటి రోజు నుంచే ఎన్‌సీఈఆర్‌టీ (NCERT) ఆధారిత నీట్ సన్నద్ధత ప్రారంభించండి.',
      alternativeRoute: 'వైద్య ప్రవేశం రాకపోతే బి.ఫార్మసీ, అగ్రికల్చర్ బి.ఎస్సీ లేదా బయోటెక్నాలజీ అద్భుతమైన మార్గాలు.',
      realityCheck: 'గణితం లేనందున సాంప్రదాయ ఇంజనీరింగ్ బ్రాంచీలకు చట్టబద్ధమైన ప్రవేశం ఉండదు.'
    }
  },
  'node_stream_BiPC': {
    title: 'ఇంటర్మీడియట్ బైపీసీ (BiPC Stream)',
    subtitle: 'బయాలజీ, ఫిజిక్స్, కెమిస్ట్రీ'
  },
  'node_neet_exam': {
    title: 'నీట్-యుజి జాతీయ వైద్య ప్రవేశ పరీక్ష (NEET-UG)',
    subtitle: 'నేషనల్ ఎలిజిబిలిటీ కమ్ ఎంట్రన్స్ టెస్ట్',
    stageName: 'దశ 3: ప్రవేశ పరీక్షల ద్వారం',
    details: {
      whatItIs: 'భారతదేశం అంతటా ఎంబీబీఎస్, బీడీఎస్, ఆయుష్ ప్రవేశాలకు ఏకైక చట్టబద్ధమైన పరీక్ష. [OFFICIAL]',
      whyItMatters: 'మెడికల్ కౌన్సిల్ ఆఫ్ ఇండియా (NMC) నిబంధనల ప్రకారం ప్రభుత్వ మరియు ప్రైవేట్ మెడికల్ సీట్లకు ఇది తప్పనిసరి.',
      mandatoryRequirements: 'ఇంటర్‌లో ఫిజిక్స్, కెమిస్ట్రీ, బయాలజీలో కనీసం 50% మార్కులు.',
      whenToDoIt: 'మే మొదటి ఆదివారం వార్షిక పరీక్ష.',
      nextStep: 'MCC జాతీయ లేదా రాష్ట్ర వైద్య కౌన్సెలింగ్‌లో పాల్గొనండి.',
      realityCheck: '20 లక్షల మందికి పైగా విద్యార్థులు రాస్తారు; ప్రభుత్వ ఎంబీబీఎస్ సీట్లు సుమారు 55,000 మాత్రమే ఉన్నాయి. ప్లాన్-బి ప్రత్యామ్నాయాలు తప్పనిసరిగా ఉండాలి.'
    }
  },
  'NEET_UG': {
    title: 'నీట్-యుజి (NEET-UG)',
    subtitle: 'జాతీయ మెడికల్ ప్రవేశ పరీక్ష'
  },
  'node_mbbs': {
    title: 'ఎంబీబీఎస్ - బ్యాచిలర్ ఆఫ్ మెడిసిన్ & సర్జరీ (5.5 సంవత్సరాలు)',
    subtitle: '4.5 ఏళ్ల అకడమిక్ కోర్సు + 1 సంవత్సరం కంపల్సరీ ఇంటర్న్‌షిప్ (CRMI)',
    stageName: 'దశ 4: గ్రాడ్యుయేషన్ డిగ్రీ',
    details: {
      whatItIs: 'NMC గుర్తింపు పొందిన గ్రాడ్యుయేట్ మెడికల్ డిగ్రీ. [OFFICIAL]',
      whyItMatters: 'లైసెన్స్ పొందిన డాక్టర్‌గా రోగులకు చికిత్స అందించే అధికారిక హక్కు.',
      mandatoryRequirements: 'నీట్-యుజి అర్హత ర్యాంకు.',
      whenToDoIt: 'సెప్టెంబర్ - అక్టోబర్ వైద్య తరగతులు ప్రారంభం.',
      nextStep: 'క్లినికల్ పోస్టింగ్స్ మరియు NEXT / NEET-PG స్పెషలైజేషన్ పరీక్షకు సిద్ధం కావడం.',
      realityCheck: 'ఎంబీబీఎస్ తర్వాత స్పెషలైజేషన్ (MD/MS) దాదాపు తప్పనిసరి. పూర్తి స్థాయి సెటిల్‌మెంట్‌కు 27-28 సంవత్సరాల వయస్సు పడుతుంది.'
    }
  },
  'MBBS': {
    title: 'ఎంబీబీఎస్ (MBBS)',
    subtitle: 'క్లినికల్ వైద్య డిగ్రీ (5.5 సంవత్సరాలు)'
  },
  'node_clinical_bridge': {
    title: '1-సంవత్సర కంపల్సరీ రోటేటరీ మెడికల్ ఇంటర్న్‌షిప్ (CRMI)',
    subtitle: 'హాస్పిటల్ వార్డులలో ప్రత్యక్ష వైద్య సేవ అనుభవం',
    stageName: 'దశ 5: ప్రాక్టికల్ లైసెన్సింగ్',
    details: {
      whatItIs: 'ఆస్పత్రిలో అత్యవసర విభాగాలు, సర్జరీ, పీడియాట్రిక్స్ మరియు జనరల్ మెడిసిన్ విభాగాల్లో ప్రత్యక్ష సేవలు.',
      whyItMatters: 'రాష్ట్ర మెడికల్ కౌన్సిల్ పర్మనెంట్ రిజిస్ట్రేషన్ లైసెన్స్ పొందడానికి తప్పనిసరి.',
      mandatoryRequirements: 'ఎంబీబీఎస్ అన్ని సంవత్సరాల పరీక్షలలో ఉత్తీర్ణత.',
      whenToDoIt: 'ఎంబీబీఎస్ 4.5 ఏళ్లు పూర్తయిన తర్వాత.',
      nextStep: 'ప్రాక్టీస్ లైసెన్స్ పొందడం మరియు నీట్ పీజీ (NEET-PG) రాయడం.'
    }
  },
  'node_doctor_job': {
    title: 'రిజిస్టర్డ్ మెడికల్ ప్రాక్టీషనర్ (MBBS Doctor)',
    subtitle: 'ప్రభుత్వ ఆసుపత్రులు / ప్రైవేట్ హెల్త్‌కేర్ నెట్‌వర్క్స్',
    stageName: 'దశ 6: లక్ష్య వృత్తి & కెరీర్',
    details: {
      whatItIs: 'అధీకృత క్లినికల్ డాక్టర్. రోగ నిర్ధారణ, చికిత్స మరియు అత్యవసర వైద్య సేవలు.',
      whyItMatters: 'సమాజంలో అత్యున్నత గౌరవం మరియు శాశ్వత డిమాండ్ ఉన్న వృత్తి.',
      mandatoryRequirements: 'ఎంబీబీఎస్ డిగ్రీ + రాష్ట్ర మెడికల్ కౌన్సిల్ రిజిస్ట్రేషన్ నంబర్.',
      whenToDoIt: 'ఇంటర్న్‌షిప్ పూర్తయిన వెంటనే.',
      nextStep: 'ఎండీ / ఎంఎస్ స్పెషలైజేషన్ లేదా సొంత క్లినిక్ ప్రారంభం.'
    }
  },
  'DOCTOR_MBBS': {
    title: 'వైద్యుడు (MBBS Doctor)',
    subtitle: 'రిజిస్టర్డ్ మెడికల్ ప్రాక్టీషనర్'
  },

  // MEC Nodes (Commerce & Finance)
  'MEC': {
    title: 'ఇంటర్మీడియట్ ఎంఈసీ (గణితం, అర్థశాస్త్రం, వాణిజ్యం)',
    subtitle: 'మ్యాథ్స్, ఎకనామిక్స్, కామర్స్',
    stageName: 'దశ 2: హయ్యర్ సెకండరీ / ఇంటర్మీడియట్',
    details: {
      whatItIs: 'ఫైనాన్స్, చార్టర్డ్ అకౌంటెన్సీ (CA), డేటా అనలిటిక్స్ మరియు బిజినెస్ రంగానికి బలమైన పునాది. [OFFICIAL]',
      whyItMatters: 'గణితంతో కూడిన కామర్స్ కావడంతో ఇన్వెస్ట్‌మెంట్ బ్యాంకింగ్ మరియు యాక్చుయేరియల్ సైన్స్‌కు అత్యుత్తమం.',
      mandatoryRequirements: '10వ తరగతి ఉత్తీర్ణత.',
      whenToDoIt: 'మే - జూలై ప్రవేశాలు.',
      nextStep: 'ఇంటర్ మొదటి సంవత్సరంలోనే ICAI CA ఫౌండేషన్ లేదా CUET ప్రవేశ పరీక్షలకు ప్రణాళిక సిద్ధం చేసుకోండి.',
      alternativeRoute: 'గణితం కష్టంగా అనిపిస్తే సీఈసీ (CEC) గ్రూప్ ఎంచుకోవచ్చు.'
    }
  },
  'node_ca_foundation': {
    title: 'సీఏ ఫౌండేషన్ & సీయూఈటీ కామర్స్ (CA Foundation & CUET)',
    subtitle: 'ICAI జాతీయ పరీక్ష మరియు కేంద్రీయ విశ్వవిద్యాలయాల ఎంట్రన్స్',
    stageName: 'దశ 3: ప్రవేశ పరీక్షల ద్వారం',
    details: {
      whatItIs: 'ఇన్‌స్టిట్యూట్ ఆఫ్ చార్టర్డ్ అకౌంటెంట్స్ ఆఫ్ ఇండియా (ICAI) నిర్వహించే జాతీయ ప్రవేశ పరీక్ష. [OFFICIAL]',
      whyItMatters: 'భారతదేశంలో అత్యున్నత గౌరవప్రదమైన చార్టర్డ్ అకౌంటెన్సీ కోర్సులోకి ప్రవేశానికి మొదటి మెట్టు.',
      mandatoryRequirements: 'ఇంటర్మీడియట్ 12వ తరగతి పరీక్షలకు హాజరైన లేదా ఉత్తీర్ణులైన విద్యార్థులు అర్హులు.',
      whenToDoIt: 'జూన్ మరియు డిసెంబర్ వార్షిక పరీక్షలు.'
    }
  },
  'node_bcom_ca': {
    title: 'బి.కామ్ ఆనర్స్ + సీఏ ఇంటర్మీడియట్ (3-4 సంవత్సరాలు)',
    subtitle: 'అకౌంటింగ్, కార్పొరేట్ టాక్సేషన్ మరియు ఆడిటింగ్ డిగ్రీ',
    stageName: 'దశ 4: ప్రొఫెషనల్ డిగ్రీ',
    details: {
      whatItIs: 'యూజీసీ గుర్తింపు పొందిన కామర్స్ డిగ్రీతో పాటు ICAI చార్టర్డ్ అకౌంటెన్సీ స్థాయి-2 అర్హత.',
      whyItMatters: 'కార్పొరేట్ ఫైనాన్స్, బిగ్-4 ఆడిట్ సంస్థలు మరియు బహుళజాతి కంపెనీలలో విస్తృత అవకాశాలు.',
      mandatoryRequirements: 'ఇంటర్‌లో ఎంఈసీ లేదా సీఈసీ + సీఏ ఫౌండేషన్ ఉత్తీర్ణత.',
      realityCheck: 'సీఏ పాస్ పర్సంటేజీ తక్కువగా ఉంటుంది; కాబట్టి రెగ్యులర్ బి.కామ్ డిగ్రీని సమాంతరంగా పూర్తి చేయడం మంచి రక్షణ.'
    }
  },
  'node_articleship_bridge': {
    title: '3-సంవత్సరాల తప్పనిసరి సీఏ ఆర్టికల్‌షిప్ (Articleship)',
    subtitle: 'ప్రాక్టీసింగ్ చార్టర్డ్ అకౌంటెంట్ వద్ద ప్రాక్టికల్ ట్రైనింగ్',
    stageName: 'దశ 5: ప్రాక్టికల్ శిక్షణ',
    details: {
      whatItIs: 'ఆడిటింగ్, టాక్స్ ఫైలింగ్ మరియు కార్పొరేట్ ఆడిట్లలో ప్రత్యక్ష అనుభవం. [OFFICIAL ICAI]',
      whyItMatters: 'కేవలం పుస్తక జ్ఞానమే కాకుండా నిజమైన క్లయింట్ ఆడిట్లను నిర్వహించే సామర్థ్యం వస్తుంది.'
    }
  },
  'node_ca_job': {
    title: 'చార్టర్డ్ అకౌంటెంట్ (Chartered Accountant - CA)',
    subtitle: 'ఆడిట్ సంస్థలు / కార్పొరేట్ ఫైనాన్షియల్ కంట్రోలర్',
    stageName: 'దశ 6: లక్ష్య వృత్తి & కెరీర్',
    details: {
      whatItIs: 'ICAI సభ్యత్వం కలిగిన అధికారిక చార్టర్డ్ అకౌంటెంట్. బ్యాలెన్స్ షీట్ ఆడిట్ ధృవీకరణ అధికారం.',
      whyItMatters: 'భారతదేశంలో చట్టబద్ధమైన అత్యున్నత ఆర్థిక మరియు పన్ను అధికారం.'
    }
  },
  'CHARTERED_ACCOUNTANT': {
    title: 'చార్టర్డ్ అకౌంటెంట్ (CA)',
    subtitle: 'ICAI సభ్యత్వం కలిగిన ఫైనాన్షియల్ ఆడిటర్'
  },

  // Polytechnic & Lateral Entry
  'POLYTECHNIC': {
    title: '3-సంవత్సరాల పాలిటెక్నిక్ డిప్లొమా (ఇంజనీరింగ్)',
    subtitle: 'వర్క్‌షాప్ నైపుణ్యాలతో కూడిన సాంకేతిక విద్య',
    stageName: 'దశ 2: సాంకేతిక డిప్లొమా',
    details: {
      whatItIs: '10వ తరగతి తర్వాత నేరుగా ఇంజనీరింగ్ డిప్లొమా. ECET ద్వారా నేరుగా B.Tech 2వ సంవత్సరంలోకి ప్రవేశం. [OFFICIAL]',
      whyItMatters: 'ఇంటర్మీడియట్ ఒత్తిడి లేకుండా అంతే సమయంలో (3+3=6 ఏళ్లు) B.Tech పూర్తి చేసే అద్భుతమైన మార్గం.',
      mandatoryRequirements: '10వ తరగతి గణితం & సైన్స్‌లో ఉత్తీర్ణత. POLYCET పరీక్ష.',
      whenToDoIt: '10వ తరగతి ఫలితాల వెనువెంటనే ఏప్రిల్ - మే.',
      nextStep: 'డిప్లొమాలో 60% పైగా సాధించి రాష్ట్ర ఈసెట్ (ECET) కు సిద్ధం కావాలి.',
      realityCheck: 'ఐఐటీలలో నేరుగా ప్రవేశం ఉండదు కానీ అన్ని రాష్ట్ర మరియు ప్రైవేట్ ఇంజనీరింగ్ కళాశాలల్లో పూర్తిగా వర్తిస్తుంది.'
    }
  },
  'node_ecet_exam': {
    title: 'రాష్ట్ర ఈసెట్ ప్రవేశ పరీక్ష (State ECET)',
    subtitle: 'ఇంజనీరింగ్ కామన్ ఎంట్రన్స్ టెస్ట్ - లేటరల్ ఎంట్రీ ప్రవేశం',
    stageName: 'దశ 3: లేటరల్ ఎంట్రీ పరీక్ష',
    details: {
      whatItIs: 'డిప్లొమా విద్యార్థుల కోసం రాష్ట్ర ఉన్నత విద్యా మండలి నిర్వహించే ప్రత్యేక ప్రవేశ పరీక్ష. [OFFICIAL]',
      whyItMatters: 'ఈ పరీక్ష ద్వారా నేరుగా బి.టెక్ 2వ సంవత్సరంలోకి (3వ సెమిస్టర్) ప్రవేశించవచ్చు.'
    }
  },
  'node_btech_lateral': {
    title: 'బి.టెక్ 2వ సంవత్సరం (లేటరల్ ఎంట్రీ ప్రవేశం)',
    subtitle: 'కంప్యూటర్ సైన్స్ లేదా కోర్ ఇంజనీరింగ్ డిగ్రీ (3 సంవత్సరాలు)',
    stageName: 'దశ 4: ఇంజనీరింగ్ డిగ్రీ పూర్తి',
    details: {
      whatItIs: 'డిప్లొమా తర్వాత నేరుగా బి.టెక్ 3వ సెమిస్టర్‌లో చేరి 3 ఏళ్లలో డిగ్రీ పూర్తి చేయడం.',
      whyItMatters: 'మొత్తం సమయం 6 ఏళ్లు (3 ఏళ్లు డిప్లొమా + 3 ఏళ్లు బి.టెక్) మాత్రమే పడుతుంది.',
      realityCheck: 'లేటరల్ ఎంట్రీ విద్యార్థులు 2వ సంవత్సరంలో విశ్వవిద్యాలయ గణితం (M1, M2) సబ్జెక్టులను వేగంగా అధిగమించాలి.'
    }
  },
  'node_alt_diploma': {
    title: 'ప్లాన్-బి: 3-ఏళ్ల పాలిటెక్నిక్ డిప్లొమా',
    subtitle: 'ప్రాక్టికల్ వర్క్‌షాప్ ఇంజనీరింగ్ మార్గం',
    stageName: 'ప్రత్యామ్నాయ మార్గం (Plan-B)',
    details: {
      whatItIs: '10వ తరగతి తర్వాత ప్రాక్టికల్ ఇంజనీరింగ్ డిప్లొమా. ECET ద్వారా B.Tech 2వ సంవత్సరంలోకి నేరుగా ప్రవేశం. [OFFICIAL]',
      whyItMatters: 'ఇంటర్మీడియట్ కోచింగ్ ఒత్తిడి లేకుండా ఇంజనీరింగ్ పూర్తి చేయడానికి అద్భుతమైన మార్గం.'
    }
  },
  'node_alt_bca': {
    title: 'ప్లాన్-బి: బిసిఏ (3 సంవత్సరాలు)',
    subtitle: 'వేగవంతమైన సాఫ్ట్‌వేర్ డిగ్రీ',
    stageName: 'ప్రత్యామ్నాయ మార్గం (Plan-B)',
    details: {
      whatItIs: 'సాఫ్ట్‌వేర్ డెవలప్‌మెంట్ మరియు అప్లికేషన్ ప్రోగ్రామింగ్‌పై దృష్టి సారించే 3-సంవత్సరాల డిగ్రీ.',
      whyItMatters: '4 ఏళ్ల బి.టెక్ కంటే 1 సంవత్సరం తక్కువ సమయం మరియు తక్కువ ఫీజు ఖర్చుతో సాఫ్ట్‌వేర్ రంగంలోకి ప్రవేశం.'
    }
  },
  'node_alt_bpharm': {
    title: 'ప్లాన్-బి: బి.ఫార్మసీ (4 సంవత్సరాలు)',
    subtitle: 'ఔషధ తయారీ & ఫార్మా పరిశ్రమ',
    stageName: 'ప్రత్యామ్నాయ మార్గం (Plan-B)',
    details: {
      whatItIs: 'ఔషధాల తయారీ, ఫార్మకాలజీ మరియు క్వాలిటీ కంట్రోల్ 4-సంవత్సరాల ప్రొఫెషనల్ డిగ్రీ. [OFFICIAL]',
      whyItMatters: 'హైదరాబాద్ మరియు బెంగళూరులోని ఫార్మా హబ్‌లలో వేగంగా కార్పొరేట్ ఉద్యోగాలు పొందే మార్గం.'
    }
  },
  'node_locked_medical': {
    title: 'ఎంబీబీఎస్ (క్లినికల్ మెడిసిన్)',
    subtitle: 'లాక్ చేయబడింది: జీవశాస్త్రం (Biology) అవసరం',
    stageName: 'చట్టబద్ధంగా పరిమితమైన మార్గం (లాక్)',
    lockReason: 'NMC నిబంధనల ప్రకారం 12వ తరగతిలో జీవశాస్త్రం (Biology) లేకుండా NEET-UG రాయడానికి అర్హత ఉండదు. [OFFICIAL]'
  },
  'node_locked_engg': {
    title: 'బి.టెక్ కోర్ ఇంజనీరింగ్',
    subtitle: 'లాక్ చేయబడింది: ఇంటర్‌లో గణితం (Maths) అవసరం',
    stageName: 'చట్టబద్ధంగా పరిమితమైన మార్గం (లాక్)',
    lockReason: 'AICTE నిబంధనల ప్రకారం ఇంటర్‌లో గణితం మరియు భౌతికశాస్త్రం లేకుండా కోర్ ఇంజనీరింగ్‌కు ప్రవేశం ఉండదు. [OFFICIAL]'
  }
};

const HINDI_NODE_MAP: Record<string, LocalizedNodeData> = {
  // Class 10 Foundation
  'stage_class_10': {
    title: 'कक्षा 10वीं (माध्यमिक विद्यालय परीक्षा)',
    subtitle: 'शैक्षणिक नींव बोर्ड परीक्षा (CBSE / SSC / ICSE)',
    stageName: 'चरण 1: शैक्षणिक नींव',
    details: {
      whatItIs: 'मान्यता प्राप्त बोर्ड द्वारा आयोजित 10वीं कक्षा (SSC/CBSE) वार्षिक परीक्षा। [OFFICIAL]',
      whyItMatters: 'हायर सेकेंडरी स्ट्रीम (MPC/BiPC/Commerce) अथवा 3-वर्षीय पॉलिटेक्निक डिप्लोमा के लिए अनिवार्य पात्रता।',
      mandatoryRequirements: 'गणित, विज्ञान, सामाजिक अध्ययन और भाषाओं में उत्तीर्ण अंक।',
      whenToDoIt: 'फरवरी - अप्रैल परीक्षा सत्र। मई में परिणाम।',
      nextStep: 'अपने करियर लक्ष्यों के अनुसार इंटरमीडिएट विषय समूह या 3-वर्षीय पॉलिटेक्निक चुनें।',
      alternativeRoute: 'व्यावहारिक इंजीनियरिंग कौशल के लिए 3-वर्षीय पॉलिटेक्निक डिप्लोमा (POLYCET द्वारा) चुनें।'
    }
  },
  'step_10': {
    title: 'कक्षा 10वीं (बोर्ड परीक्षा)',
    subtitle: 'शैक्षणिक नींव और बुनियादी पात्रता',
    stageName: 'चरण 1: शैक्षणिक नींव',
    details: {
      whatItIs: 'मान्यता प्राप्त माध्यमिक बोर्ड परीक्षा।',
      whyItMatters: 'आगे की उच्च शिक्षा के लिए अनिवार्य कानूनी आधार।',
      mandatoryRequirements: 'न्यूनतम उत्तीर्ण अंक।',
      whenToDoIt: 'वार्षिक बोर्ड परीक्षा सत्र।',
      nextStep: 'करियर के अनुकूल 11वीं-12वीं स्ट्रीम का चयन।'
    }
  },

  // MPC Nodes
  'MPC': {
    title: 'इंटरमीडिएट एमपीसी (गणित, भौतिकी, रसायन विज्ञान)',
    subtitle: 'गणित, भौतिकी, रसायन विज्ञान',
    stageName: 'चरण 2: उच्च माध्यमिक / इंटरमीडिएट',
    details: {
      whatItIs: 'भारत भर में इंजीनियरिंग, आर्किटेक्चर, शुद्ध विज्ञान और कंप्यूटिंग का मुख्य आधार।',
      whyItMatters: 'लगभग 90% तकनीकी डिग्री और रक्षा सेवाओं (NDA) के दरवाजे खोलता है।',
      mandatoryRequirements: 'कक्षा 10वीं उत्तीर्ण (CBSE/ICSE/राज्य बोर्ड)। [OFFICIAL]',
      whenToDoIt: '10वीं के परिणामों के तुरंत बाद (मई - जुलाई)।',
      nextStep: '11वीं कक्षा के शुरू होते ही जेईई मेन और राज्य सीईटी की तैयारी की योजना बनाएं।',
      alternativeRoute: 'व्यावहारिक तकनीकी प्रशिक्षण के लिए 3-वर्षीय पॉलिटेक्निक डिप्लोमा।'
    }
  },
  'node_stream_MPC': {
    title: 'इंटरमीडिएट एमपीसी (MPC Stream)',
    subtitle: 'गणित, भौतिकी, रसायन विज्ञान'
  },
  'node_exam_primary': {
    title: 'जेईई मेन व राज्य स्तरीय इंजीनियरिंग सीईटी (JEE Main & CET)',
    subtitle: 'राष्ट्रीय एवं राज्य स्तरीय प्रवेश परीक्षाएं',
    stageName: 'चरण 3: प्रवेश परीक्षा द्वार',
    details: {
      whatItIs: 'एनआईटी, ट्रिपल आईटी और राज्य के शीर्ष कॉलेजों में प्रवेश के लिए राष्ट्रीय परीक्षा। [OFFICIAL]',
      whyItMatters: 'रैंक के आधार पर सरकारी फीस प्रतिपूर्ति और प्रतिष्ठित संस्थानों में प्रवेश मिलता है।',
      mandatoryRequirements: '12वीं में भौतिकी और गणित अनिवार्य। एनआईटी के लिए न्यूनतम 75% अंक।',
      whenToDoIt: 'जेईई मेन सत्र 1 जनवरी, सत्र 2 अप्रैल; राज्य सीईटी मई में।',
      nextStep: 'केंद्रीय सीट काउंसलिंग (JoSAA / राज्य काउंसलिंग) में भाग लें।'
    }
  },
  'JEE_MAIN': {
    title: 'जेईई मेन व राज्य सीईटी',
    subtitle: 'राष्ट्रीय और राज्य स्तरीय इंजीनियरिंग प्रवेश परीक्षा'
  },
  'node_primary_degree': {
    title: 'बी.टेक कंप्यूटर साइंस एंड इंजीनियरिंग (4 वर्ष)',
    subtitle: 'सॉफ्टवेयर इंजीनियरिंग प्रोफेशनल स्नातक डिग्री',
    stageName: 'चरण 4: स्नातक डिग्री (ग्रेजुएशन)',
    details: {
      whatItIs: 'AICTE द्वारा मान्यता प्राप्त 4-वर्षीय प्रोफेशनल इंजीनियरिंग डिग्री। [OFFICIAL]',
      whyItMatters: 'ग्लोबल टेक इंडस्ट्री, प्रोडक्ट कंपनियों और उच्च शिक्षा (MS/M.Tech) का मुख्य मार्ग।',
      mandatoryRequirements: '12वीं एमपीसी उत्तीर्ण + जेईई या राज्य सीईटी रैंक।',
      whenToDoIt: 'काउंसलिंग के बाद अगस्त से कॉलेज सत्र प्रारंभ।',
      nextStep: 'प्रथम वर्ष से ही डेटा स्ट्रक्चर्स, एल्गोरिदम और वेब प्रोजेक्ट्स बनाना शुरू करें।',
      realityCheck: 'महत्वपूर्ण सच्चाई: सिर्फ कॉलेज डिग्री होना सॉफ्टवेयर इंजीनियर बनने की गारंटी नहीं है। वास्तविक नौकरियों के लिए हल किए गए डीएसए प्रश्न, गिटहब पर लाइव प्रोजेक्ट्स और इंटर्नशिप अनिवार्य हैं!'
    }
  },
  'BTECH_CSE': {
    title: 'बी.टेक कंप्यूटर साइंस (CSE)',
    subtitle: 'AICTE मान्यता प्राप्त 4-वर्षीय इंजीनियरिंग डिग्री'
  },
  'node_skills_bridge': {
    title: 'उद्योग कौशल व पोर्टफोलियो ब्रिज (Skills Bridge)',
    subtitle: 'DSA + 2-3 लाइव प्रोजेक्ट्स + इंटर्नशिप्स',
    stageName: 'चरण 5: उद्योग तत्परता',
    details: {
      whatItIs: 'कॉलेज पाठ्यक्रम और उद्योग की अपेक्षाओं के बीच के अंतर को पाटने वाला व्यावहारिक प्रशिक्षण।',
      whyItMatters: 'कंपनियां अंकतालिका के बजाय गिटहब प्रोजेक्ट्स और कोडिंग कौशल देखकर नौकरी देती हैं।',
      mandatoryRequirements: 'समस्या समाधान कौशल, लाइव प्रोजेक्ट्स और टेक्निकल इंटर्नशिप।',
      whenToDoIt: 'डिग्री के तीसरे और चौथे वर्ष के दौरान।',
      nextStep: 'कैंपस प्लेसमेंट तकनीकी राउंड और ऑफ-कैंपस जॉब्स के लिए तैयार हों।'
    }
  },
  'step_reality_bridge': {
    title: 'उद्योग कौशल व पोर्टफोलियो ब्रिज',
    subtitle: 'नौकरी के लिए आवश्यक व्यावहारिक कौशल',
    stageName: 'चरण 5: उद्योग तत्परता'
  },
  'node_target_job': {
    title: 'सॉफ्टवेयर इंजीनियर / क्लाउड डेवलपर',
    subtitle: 'आईटी प्रोडक्ट कंपनियां / तकनीकी क्षेत्र',
    stageName: 'चरण 6: लक्ष्य करियर',
    details: {
      whatItIs: 'वेब, मोबाइल या सिस्टम सॉफ्टवेयर बनाने का पूर्णकालिक इंजीनियरिंग पद।',
      whyItMatters: 'उच्च विकास, अंतरराष्ट्रीय अवसर और प्रतिस्पर्धी वेतन वाली स्थायी नौकरी।',
      mandatoryRequirements: 'बी.टेक या बीसीए + हल किए गए कोडिंग प्रोजेक्ट्स।',
      whenToDoIt: 'ग्रेजुएशन का अंतिम वर्ष।'
    }
  },
  'SOFTWARE_ENGINEER': {
    title: 'सॉफ्टवेयर इंजीनियर (Software Engineer)',
    subtitle: 'आईटी प्रोडक्ट व सॉफ्टवेयर क्षेत्र'
  },
  'step_target_job': {
    stageName: 'चरण 6: लक्ष्य करियर'
  },

  // BiPC Nodes (Medical / Pharma)
  'BiPC': {
    title: 'इंटरमीडिएट बाईपीसी (जीव विज्ञान, भौतिकी, रसायन विज्ञान)',
    subtitle: 'बायोलॉजी, फिजिक्स, केमिस्ट्री',
    stageName: 'चरण 2: उच्च माध्यमिक / इंटरमीडिएट',
    details: {
      whatItIs: 'चिकित्सा (MBBS), फार्मेसी, बायोटेक्नोलॉजी और कृषि विज्ञान का आधिकारिक मार्ग। [OFFICIAL]',
      whyItMatters: 'भारत में नीट (NEET) और क्लिनिकल मेडिसिन के लिए 12वीं में बायोलॉजी होना अनिवार्य है।',
      mandatoryRequirements: '10वीं कक्षा उत्तीर्ण।',
      whenToDoIt: 'मई - जुलाई में प्रवेश।'
    }
  },
  'node_stream_BiPC': {
    title: 'इंटरमीडिएट बाईपीसी (BiPC Stream)',
    subtitle: 'बायोलॉजी, फिजिक्स, केमिस्ट्री'
  },
  'node_neet_exam': {
    title: 'नीट-यूजी राष्ट्रीय मेडिकल प्रवेश परीक्षा (NEET-UG)',
    subtitle: 'नेशनल एलिजिबिलिटी कम एंट्रेंस टेस्ट',
    stageName: 'चरण 3: प्रवेश परीक्षा द्वार',
    details: {
      whatItIs: 'भारत भर में एमबीबीएस, बीडीएस और आयुष पाठ्यक्रमों में प्रवेश की एकमात्र वैधानिक परीक्षा। [OFFICIAL]',
      whyItMatters: 'एनएमसी नियमों के अनुसार सरकारी और निजी मेडिकल कॉलेज की सीटों के लिए अनिवार्य।',
      mandatoryRequirements: '12वीं में भौतिकी, रसायन और जीव विज्ञान में न्यूनतम 50% अंक।',
      whenToDoIt: 'मई का प्रथम रविवार।'
    }
  },
  'NEET_UG': {
    title: 'नीट-यूजी (NEET-UG)',
    subtitle: 'राष्ट्रीय चिकित्सा प्रवेश परीक्षा'
  },
  'node_mbbs': {
    title: 'एमबीबीएस - चिकित्सा एवं शल्य चिकित्सा स्नातक (5.5 वर्ष)',
    subtitle: '4.5 वर्ष शैक्षणिक पाठ्यक्रम + 1 वर्ष अनिवार्य इंटर्नशिप (CRMI)',
    stageName: 'चरण 4: स्नातक मेडिकल डिग्री',
    details: {
      whatItIs: 'एनएमसी मान्यता प्राप्त क्लिनिकल मेडिकल डिग्री। [OFFICIAL]',
      whyItMatters: 'मरीजों का इलाज करने और डॉक्टर के रूप में स्वतंत्र प्रैक्टिस करने का कानूनी अधिकार।'
    }
  },
  'MBBS': {
    title: 'एमबीबीएस (MBBS)',
    subtitle: 'क्लिनिकल चिकित्सा स्नातक डिग्री'
  },
  'node_clinical_bridge': {
    title: '1-वर्षीय अनिवार्य रोटेटरी मेडिकल इंटर्नशिप (CRMI)',
    subtitle: 'अस्पताल वार्डों में व्यावहारिक क्लिनिकल अनुभव',
    stageName: 'चरण 5: मेडिकल लाइसेंसिंग',
    details: {
      whatItIs: 'इमरजेंसी, सर्जरी और जनरल मेडिसिन वार्डों में वास्तविक रोगी देखभाल प्रशिक्षण।',
      whyItMatters: 'राज्य मेडिकल काउंसिल में स्थायी रजिस्ट्रेशन नंबर प्राप्त करने के लिए अनिवार्य।'
    }
  },
  'node_doctor_job': {
    title: 'पंजीकृत मेडिकल प्रैक्टिशनर (MBBS Doctor)',
    subtitle: 'सरकारी अस्पताल / कॉर्पोरेट हेल्थकेयर नेटवर्क',
    stageName: 'चरण 6: लक्ष्य करियर',
    details: {
      whatItIs: 'प्राधिकृत क्लिनिकल डॉक्टर। रोगी परीक्षण, निदान और चिकित्सा उपचार।'
    }
  },
  'DOCTOR_MBBS': {
    title: 'चिकित्सक (MBBS Doctor)',
    subtitle: 'पंजीकृत मेडिकल प्रैक्टिशनर'
  },

  // MEC Nodes (Commerce & Finance)
  'MEC': {
    title: 'इंटरमीडिएट एमईसी (गणित, अर्थशास्त्र, वाणिज्य)',
    subtitle: 'मैथ्स, इकोनॉमिक्स, कॉमर्स',
    stageName: 'चरण 2: उच्च माध्यमिक / इंटरमीडिएट',
    details: {
      whatItIs: 'फाइनेंस, चार्टर्ड अकाउंटेंसी (CA), डेटा एनालिटिक्स और निवेश बैंकिंग का आधार। [OFFICIAL]',
      whyItMatters: 'गणित के साथ वाणिज्य होने से भविष्य के आधुनिक वित्तीय करियर के लिए सबसे श्रेष्ठ।'
    }
  },
  'node_ca_foundation': {
    title: 'सीए फाउंडेशन व सीयूईटी कॉमर्स (CA Foundation & CUET)',
    subtitle: 'ICAI राष्ट्रीय परीक्षा एवं केंद्रीय विश्वविद्यालय प्रवेश',
    stageName: 'चरण 3: प्रवेश परीक्षा द्वार'
  },
  'node_bcom_ca': {
    title: 'बी.कॉम ऑनर्स + सीए इंटरमीडिएट (3-4 वर्ष)',
    subtitle: 'अकाउंटिंग, कॉर्पोरेट टैक्स और ऑडिटिंग डिग्री',
    stageName: 'चरण 4: प्रोफेशनल डिग्री'
  },
  'node_articleship_bridge': {
    title: '3-वर्षीय अनिवार्य सीए आर्टिकलशिप (Articleship)',
    subtitle: 'चार्टर्ड अकाउंटेंट फर्म में वास्तविक ऑडिट अनुभव',
    stageName: 'चरण 5: व्यावहारिक प्रशिक्षण'
  },
  'node_ca_job': {
    title: 'चार्टर्ड अकाउंटेंट (Chartered Accountant - CA)',
    subtitle: 'ऑडिट फर्म / कॉर्पोरेट फाइनेंशियल कंट्रोलर',
    stageName: 'चरण 6: लक्ष्य करियर'
  },
  'CHARTERED_ACCOUNTANT': {
    title: 'चार्टर्ड अकाउंटेंट (CA)',
    subtitle: 'ICAI सदस्य एवं वित्तीय ऑडिटर'
  },

  // Polytechnic & Lateral Entry
  'POLYTECHNIC': {
    title: '3-वर्षीय पॉलिटेक्निक डिप्लोमा (इंजीनियरिंग)',
    subtitle: 'व्यावहारिक कार्यशाला कौशल के साथ तकनीकी शिक्षा',
    stageName: 'चरण 2: तकनीकी डिप्लोमा',
    details: {
      whatItIs: '10वीं के बाद व्यावहारिक इंजीनियरिंग। लेटरल एंट्री (ECET) द्वारा सीधे B.Tech 2nd Year में प्रवेश! [OFFICIAL]',
      whyItMatters: 'बिना अत्यधिक कोचिंग तनाव के कुल 6 वर्षों (3+3) में बी.टेक पूरा करने का शानदार मार्ग।'
    }
  },
  'node_ecet_exam': {
    title: 'राज्य ईसीईटी प्रवेश परीक्षा (State ECET)',
    subtitle: 'इंजीनियरिंग कॉमन एंट्रेंस टेस्ट - लेटरल एंट्री प्रवेश',
    stageName: 'चरण 3: लेटरल एंट्री परीक्षा'
  },
  'node_btech_lateral': {
    title: 'बी.टेक द्वितीय वर्ष (लेटरल एंट्री प्रवेश)',
    subtitle: 'कंप्यूटर साइंस अथवा कोर इंजीनियरिंग डिग्री (3 वर्ष)',
    stageName: 'चरण 4: इंजीनियरिंग डिग्री पूर्णता'
  },
  'node_alt_diploma': {
    title: 'प्लान-बी: 3-वर्षीय पॉलिटेक्निक डिप्लोमा',
    subtitle: 'व्यावहारिक इंजीनियरिंग तकनीकी मार्ग',
    stageName: 'वैकल्पिक मार्ग (Plan-B)'
  },
  'node_alt_bca': {
    title: 'प्लान-बी: बीसीए (3 वर्ष)',
    subtitle: 'त्वरित सॉफ्टवेयर करियर डिग्री',
    stageName: 'वैकल्पिक मार्ग (Plan-B)'
  },
  'node_alt_bpharm': {
    title: 'प्लान-बी: बी.फार्मेसी (4 वर्ष)',
    subtitle: 'फार्मास्युटिकल एवं दवा निर्माण उद्योग',
    stageName: 'वैकल्पिक मार्ग (Plan-B)'
  },
  'node_locked_medical': {
    title: 'एमबीबीएस (क्लिनिकल मेडिसिन)',
    subtitle: 'प्रतिबंधित: 12वीं में जीव विज्ञान (Biology) अनिवार्य',
    stageName: 'प्रतिबंधित मार्ग (लॉक)',
    lockReason: 'NMC नियमों के अनुसार 12वीं में भौतिकी, रसायन और जीव विज्ञान (PCB) के बिना नीट परीक्षा की पात्रता नहीं है।'
  },
  'node_locked_engg': {
    title: 'बी.टेक कोर इंजीनियरिंग',
    subtitle: 'प्रतिबंधित: 12वीं में गणित (Maths) अनिवार्य',
    stageName: 'प्रतिबंधित मार्ग (लॉक)',
    lockReason: 'AICTE नियमों के अनुसार 12वीं में गणित और भौतिकी के बिना कोर इंजीनियरिंग में प्रवेश नहीं दिया जा सकता।'
  }
};

export function localizeGraph(graph: PathwayGraph, lang: LanguageCode): PathwayGraph {
  if (lang === 'en') return graph;

  const nodeMap = lang === 'te' ? TELUGU_NODE_MAP : lang === 'hi' ? HINDI_NODE_MAP : {};

  const localizedNodes = graph.nodes.map(node => {
    // 1. Check exact node.id
    let override = nodeMap[node.id];

    // 2. If not found, check dataRef.id
    if (!override && node.dataRef?.id) {
      override = nodeMap[node.dataRef.id];
    }

    // 3. If not found and it's a stream node with code
    if (!override && node.id.startsWith('node_stream_')) {
      const streamKey = node.id.replace('node_stream_', '');
      override = nodeMap[streamKey];
    }

    if (!override) {
      // Default stage localization if no full override exists
      let localizedStageName = node.stageName;
      if (lang === 'te') {
        if (node.stageName.includes('Stage 1')) localizedStageName = 'దశ 1: విద్యా పునాది';
        else if (node.stageName.includes('Stage 2')) localizedStageName = 'దశ 2: ఇంటర్మీడియట్ / హయ్యర్ సెకండరీ';
        else if (node.stageName.includes('Stage 3')) localizedStageName = 'దశ 3: ప్రవేశ పరీక్షల ద్వారం';
        else if (node.stageName.includes('Stage 4')) localizedStageName = 'దశ 4: గ్రాడ్యుయేషన్ డిగ్రీ';
        else if (node.stageName.includes('Stage 5')) localizedStageName = 'దశ 5: పరిశ్రమ నైపుణ్యాల వంతెన';
        else if (node.stageName.includes('Stage 6')) localizedStageName = 'దశ 6: లక్ష్య వృత్తి & కెరీర్';
        else if (node.stageName.includes('Alternative')) localizedStageName = 'ప్రత్యామ్నాయ మార్గం (Plan-B)';
        else if (node.stageName.includes('Restricted')) localizedStageName = 'చట్టబద్ధంగా పరిమితమైన మార్గం (లాక్)';
      } else if (lang === 'hi') {
        if (node.stageName.includes('Stage 1')) localizedStageName = 'चरण 1: शैक्षणिक नींव';
        else if (node.stageName.includes('Stage 2')) localizedStageName = 'चरण 2: उच्च माध्यमिक / इंटरमीडिएट';
        else if (node.stageName.includes('Stage 3')) localizedStageName = 'चरण 3: प्रवेश परीक्षाएं';
        else if (node.stageName.includes('Stage 4')) localizedStageName = 'चरण 4: स्नातक डिग्री';
        else if (node.stageName.includes('Stage 5')) localizedStageName = 'चरण 5: उद्योग कौशल व ब्रिज';
        else if (node.stageName.includes('Stage 6')) localizedStageName = 'चरण 6: लक्ष्य करियर';
        else if (node.stageName.includes('Alternative')) localizedStageName = 'वैकल्पिक मार्ग (Plan-B)';
        else if (node.stageName.includes('Restricted')) localizedStageName = 'प्रतिबंधित मार्ग (लॉक)';
      }

      return {
        ...node,
        stageName: localizedStageName
      };
    }

    return {
      ...node,
      title: override.title || node.title,
      subtitle: override.subtitle || node.subtitle,
      stageName: override.stageName || node.stageName,
      lockReason: override.lockReason || node.lockReason,
      details: {
        ...node.details,
        ...(override.details || {})
      }
    };
  });

  // Localize graph summary and title
  let localizedTitle = graph.title;
  let localizedSummary = graph.summary;

  if (lang === 'te') {
    if (graph.title.includes('MPC')) localizedTitle = 'ప్రమాణీకరించబడిన విద్యా మార్గం: ఇంటర్మీడియట్ ఎంపీసీ (MPC)';
    else if (graph.title.includes('BiPC')) localizedTitle = 'ప్రమాణీకరించబడిన విద్యా మార్గం: ఇంటర్మీడియట్ బైపీసీ (BiPC)';
    else if (graph.title.includes('MEC')) localizedTitle = 'ప్రమాణీకరించబడిన విద్యా మార్గం: ఇంటర్మీడియట్ ఎంఈసీ (MEC)';
    else if (graph.title.includes('Polytechnic') || graph.title.includes('POLYTECHNIC')) localizedTitle = 'ప్రమాణీకరించబడిన విద్యా మార్గం: 3-ఏళ్ల పాలిటెక్నిక్ డిప్లొమా';
    else if (graph.title.includes('Reverse Trace')) localizedTitle = graph.title.replace('Reverse Trace: Target', 'లక్ష్య వృత్తి రివర్స్ రోడ్‌మ్యాప్:');

    localizedSummary = 'అధికారిక నిబంధనలు (AICTE, NMC, UGC, BIEAP), ప్రవేశ పరీక్షలు, వాస్తవ పరిశీలన మరియు ప్లాన్-బి ప్రత్యామ్నాయాలతో కూడిన సంపూర్ణ మార్గదర్శకం.';
  } else if (lang === 'hi') {
    if (graph.title.includes('MPC')) localizedTitle = 'सत्यापित शैक्षणिक रोडमैप: इंटरमीडिएट एमपीसी (MPC)';
    else if (graph.title.includes('BiPC')) localizedTitle = 'सत्यापित शैक्षणिक रोडमैप: इंटरमीडिएट बाईपीसी (BiPC)';
    else if (graph.title.includes('MEC')) localizedTitle = 'सत्यापित शैक्षणिक रोडमैप: इंटरमीडिएट एमईसी (MEC)';
    else if (graph.title.includes('Polytechnic') || graph.title.includes('POLYTECHNIC')) localizedTitle = 'सत्यापित शैक्षणिक रोडमैप: 3-वर्षीय पॉलिटेक्निक डिप्लोमा';
    else if (graph.title.includes('Reverse Trace')) localizedTitle = graph.title.replace('Reverse Trace: Target', 'लक्ष्य करियर रिवर्स रोडमैप:');

    localizedSummary = 'सरकारी नियमों (AICTE, NMC, UGC), प्रवेश परीक्षाओं, वास्तविकता जांच और प्लान-बी विकल्पों के साथ संपूर्ण रोडमैप।';
  }

  return {
    ...graph,
    title: localizedTitle,
    summary: localizedSummary,
    nodes: localizedNodes
  };
}
