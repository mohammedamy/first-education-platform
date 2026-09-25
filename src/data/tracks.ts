import type { Track } from '../types';

export const TRACKS_DATA: Track[] = [
  {
    id: 'tahsili',
    slug: 'tahsili',
    nameAr: 'التحصيلي',
    nameEn: 'Tahsili',
    taglineAr: 'التأسيس العلمي الاستراتيجي والتفوق في اختبار التحصيلي',
    taglineEn: 'Strategic scientific foundation and excellence in the Tahsili exam',
    descriptionAr:
      'مسار متكامل مصمم خصيصاً لطلاب المرحلة الثانوية لخوض اختبار التحصيلي بثقة تامة. يشمل تفكيك مفاهيم العلوم الأربعة، التدريب على أحدث التجميعات، واستراتيجيات الحل السريع.',
    descriptionEn:
      'A comprehensive track designed for high school seniors to conquer the Tahsili exam with complete mastery. Covers core scientific foundations, past paper drills, and high-speed solving strategies.',
    iconName: 'Atom',
    image: '/images/first_track_tahsili.jpg',
    accentColor: '#10B981', // Emerald
    badgeAr: 'الأكثر طلباً للثانوية',
    badgeEn: 'High School Essential',
    subjects: ['math', 'physics', 'chemistry', 'biology'],
    targetAudienceAr: 'طلاب وطالبات الصف الثالث الثانوي والراغبين في تحسين درجاتهم للقبول الجامعي',
    targetAudienceEn: 'High school seniors and graduates aiming for top university admission percentiles',
    featuresAr: [
      'تغطية منهجية شاملة لمقررات الأحياء، الكيمياء، الفيزياء، والرياضيات',
      'تدريب مكثف على أنماط أسئلة قياس وأسرار استبعاد الخيارات',
      'بنوك أسئلة ذكية متدرجة الصعوبة مع شروحات بالفيديو',
      'محاكاة للاختبار الفعلي تحت ضغط الوقت',
    ],
    featuresEn: [
      'Comprehensive syllabus coverage across Biology, Chemistry, Physics, and Mathematics',
      'Rigorous practice on Qiyas exam patterns and elimination techniques',
      'Smart difficulty-tiered question banks with video solutions',
      'Timed full-length mock exams simulating the real test atmosphere',
    ],
    ctaAr: 'ابدأ مسار التحصيلي',
    ctaEn: 'Start Tahsili Track',
    stats: [
      { labelAr: 'المواد الأساسية', labelEn: 'Core Subjects', value: '4 مواد' },
      { labelAr: 'مستهدف الدرجة', labelEn: 'Target Score', value: '+95' },
      { labelAr: 'نماذج التمارين', labelEn: 'Practice Drills', value: 'بنوك متجددة' },
    ],
    isActive: true,
    order: 1,
  },
  {
    id: 'qudrat',
    slug: 'qudrat',
    nameAr: 'القدرات',
    nameEn: 'Qudrat',
    taglineAr: 'بناء المهارات الكمية واللغوية وتفكيك أنماط الحل الذكي',
    taglineEn: 'Building quantitative and verbal agility to master Qiyas aptitude tests',
    descriptionAr:
      'مسار يركز على تنمية التفكير التحليلي والمنطقي لاختبار القدرات العامة (القسمين الكمي واللفظي/اللغة الإنجليزية). يعلمك كيف تفكر بالطريقة التي صُمم بها الاختبار لاختصار وقت الحل بدقة متناهية.',
    descriptionEn:
      'A track dedicated to cultivating analytical, quantitative, and linguistic problem-solving for the General Aptitude Test (Qudrat). Master mental shortcuts, logic patterns, and precision under time pressure.',
    iconName: 'BrainCircuit',
    image: '/images/first_track_qudrat.jpg',
    accentColor: '#0EA5E9', // Sky/Cyan
    badgeAr: 'أساس القبول الجامعي',
    badgeEn: 'Foundation for Admissions',
    subjects: ['math', 'english'],
    targetAudienceAr: 'طلاب الصف الأول والثاني والثالث الثانوي (المسار العلمي والمسار العام)',
    targetAudienceEn: 'High school students (10th to 12th grade) preparing for general aptitude exams',
    featuresAr: [
      'قوانين سريعة وتقنيات ذهنية لحل المسائل الرياضية والكمية في ثوانٍ',
      'استيعاب المقروء والتناظر اللفظي واستراتيجيات المفردات الإنجليزية',
      'تدريب مركز على التجميعات الحديثة المعتمدة وتحليل الأخطاء الشائعة',
      'خطة مخصصة تركز على نقاط الضعف الفردية لكل طالب',
    ],
    featuresEn: [
      'Mental math shortcuts and rapid quantitative reasoning tricks',
      'Verbal comprehension, contextual analogies, and English vocabulary mastery',
      'Intensive drill sessions on verified question trends and common traps',
      'Personalized study roadmaps targeting individual student blind spots',
    ],
    ctaAr: 'ابدأ مسار القدرات',
    ctaEn: 'Start Qudrat Track',
    stats: [
      { labelAr: 'الأقسام المتاحة', labelEn: 'Core Areas', value: 'كمي / لغوي' },
      { labelAr: 'استراتيجيات الحل', labelEn: 'Strategies', value: 'حل ذهني سريع' },
      { labelAr: 'مستهدف النسبة', labelEn: 'Target Percentile', value: 'أعلى 5%' },
    ],
    isActive: true,
    order: 2,
  },
  {
    id: 'university',
    slug: 'university',
    nameAr: 'طلاب الجامعات',
    nameEn: 'University Students',
    taglineAr: 'دعم المقررات التأسيسية والتخصصية لرفع المعدل التراكمي (GPA)',
    taglineEn: 'Academic support across foundational STEM courses to elevate your collegiate GPA',
    descriptionAr:
      'مسار أكاديمي مخصص لطلاب السنة التحضيرية والسنوات التخصصية في الجامعات السعودية (مثل جامعة الملك سعود، جامعة الملك فهد للبترول والمعادن، جامعة الملك عبد العزيز وغيرها). صُمم لتبسيط المقررات المعقدة وضمان أعلى الدرجات في الاختبارات الفصلية والنهائية.',
    descriptionEn:
      'An academic track tailored for preparatory year and undergraduate students across Saudi universities (KSU, KFUPM, KAU, PNU, etc.). Demystifies challenging STEM courses to secure top letter grades.',
    iconName: 'GraduationCap',
    image: '/images/first_track_university.jpg',
    accentColor: '#8B5CF6', // Purple/Violet
    badgeAr: 'السنة التحضيرية والتخصص',
    badgeEn: 'Prep Year & Undergrad',
    subjects: ['english', 'math', 'physics', 'chemistry', 'biology'],
    targetAudienceAr: 'طلاب وطالبات السنة الأولى المشتركة والكليات العلمية والهندسية والصحية',
    targetAudienceEn: 'University freshmen, preparatory year students, and STEM majors across the Kingdom',
    featuresAr: [
      'شرح مبسط لمقررات التفاضل والتكامل والفيزياء الجامعية العامة',
      'تقوية مهارات اللغة الإنجليزية الأكاديمية والمصطلحات التخصصية',
      'حلول نموذجية لاختبارات الأعوام السابقة (Past Exams) للجامعات السعودية',
      'جلسات مراجعة مكثفة قبل الميدتيرم والفاينل',
    ],
    featuresEn: [
      'Crystal-clear explanations of University Calculus, General Physics, and Chemistry',
      'Mastery of Academic English and specialized technical terminology',
      'Detailed walkthroughs of past exams and midterms from leading Saudi universities',
      'High-yield cram and revision bootcamps before midterms and finals',
    ],
    ctaAr: 'ابدأ المسار الجامعي',
    ctaEn: 'Start University Track',
    stats: [
      { labelAr: 'المواد المدعومة', labelEn: 'Supported Subjects', value: '5 مقررات أساسية' },
      { labelAr: 'الجامعات المستهدفة', labelEn: 'Universities', value: 'كافة جامعات المملكة' },
      { labelAr: 'مستهدف المعدل', labelEn: 'GPA Target', value: '4.75+ / 5.0' },
    ],
    isActive: true,
    order: 3,
  },
];
