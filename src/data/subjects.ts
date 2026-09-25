import type { Subject } from '../types';

export const SUBJECTS_DATA: Subject[] = [
  {
    id: 'math',
    slug: 'mathematics',
    nameAr: 'الرياضيات',
    nameEn: 'Mathematics',
    category: 'science',
    descriptionAr:
      'تغطية شاملة تبدأ من الجبر والهندسة وحساب المثلثات للقدرات والتحصيلي، وصولاً إلى التفاضل والتكامل المتقدم (Calculus I & II) والجبر الخطي لطلاب الجامعات.',
    descriptionEn:
      'Comprehensive mathematical mastery from algebra, geometry, and trigonometry for Qudrat & Tahsili to advanced Calculus I & II and Linear Algebra for university undergraduates.',
    iconName: 'Calculator',
    image: '/images/first_subject_math.jpg',
    accentColor: '#10B981', // Emerald
    tracks: ['tahsili', 'qudrat', 'university'],
    topics: [
      { titleAr: 'الجبر والدوال والمعادلات الخطية والتربيعية', titleEn: 'Algebra, Functions & Quadratic Equations', lessonsCount: 14 },
      { titleAr: 'الهندسة الإحداثية وحساب المثلثات', titleEn: 'Coordinate Geometry & Trigonometry', lessonsCount: 12 },
      { titleAr: 'المصفوفات والمتجهات والاحتمالات والإحصاء', titleEn: 'Matrices, Vectors & Probability', lessonsCount: 10 },
      { titleAr: 'التفاضل والتكامل وتطبيقاتهما (Calculus)', titleEn: 'Differentiation, Integration & Calculus', lessonsCount: 16 },
    ],
    estimatedHours: 48,
    sampleQuestionCount: 650,
    featured: true,
    isActive: true,
  },
  {
    id: 'physics',
    slug: 'physics',
    nameAr: 'الفيزياء',
    nameEn: 'Physics',
    category: 'science',
    descriptionAr:
      'فهم عميق لقوانين الحركة والنيكانيكا، الكهرومغناطيسية، الضوء والبصريات، والفيزياء الذكية والنووية للتحصيلي والمقررات الجامعية (Phys 101/102).',
    descriptionEn:
      'Intuitive understanding of Newtonian mechanics, electromagnetism, optics, thermodynamics, and modern physics for Tahsili and collegiate Physics 101/102.',
    iconName: 'Zap',
    image: '/images/first_subject_physics.jpg',
    accentColor: '#0EA5E9', // Sky Cyan
    tracks: ['tahsili', 'university'],
    topics: [
      { titleAr: 'الميكانيكا الكلاسيكية وقوانين نيوتن وحفظ الطاقة', titleEn: 'Classical Mechanics & Energy Conservation', lessonsCount: 12 },
      { titleAr: 'الكهرباء الساكنة والتيارية والمغناطيسية', titleEn: 'Electrostatics, Circuits & Magnetism', lessonsCount: 14 },
      { titleAr: 'الأمواج والصوت والبصريات الهندسية', titleEn: 'Waves, Acoustics & Wave Optics', lessonsCount: 10 },
      { titleAr: 'الفيزياء الحديثة ونظرية الكم والفيزياء النووية', titleEn: 'Quantum Mechanics & Modern Physics', lessonsCount: 8 },
    ],
    estimatedHours: 42,
    sampleQuestionCount: 520,
    featured: true,
    isActive: true,
  },
  {
    id: 'chemistry',
    slug: 'chemistry',
    nameAr: 'الكيمياء',
    nameEn: 'Chemistry',
    category: 'science',
    descriptionAr:
      'تبسيط الروابط الكيميائية، الحسابات الكيميائية، المحاليل والأحماض، والكيمياء العضوية الحيوية للتحصيلي وكيمياء السنة التحضيرية (Chem 101).',
    descriptionEn:
      'Demystifying chemical bonding, stoichiometry, thermochemistry, equilibrium, and organic chemistry for Tahsili and collegiate General Chemistry.',
    iconName: 'FlaskConical',
    image: '/images/first_subject_chem.jpg',
    accentColor: '#F59E0B', // Amber
    tracks: ['tahsili', 'university'],
    topics: [
      { titleAr: 'التركيب الذري والجدول الدوري وتدرج الخواص', titleEn: 'Atomic Structure & Periodic Trends', lessonsCount: 10 },
      { titleAr: 'الروابط الكيميائية والحساب الكيميائي والمول', titleEn: 'Chemical Bonding & Stoichiometry', lessonsCount: 12 },
      { titleAr: 'الاتزان الكيميائي وسرعة التفاعل والأحماض والقواعد', titleEn: 'Chemical Equilibrium & Acid-Base Theory', lessonsCount: 14 },
      { titleAr: 'مقدمة في الكيمياء العضوية والمجموعات الوظيفية', titleEn: 'Introductory Organic Chemistry', lessonsCount: 12 },
    ],
    estimatedHours: 40,
    sampleQuestionCount: 480,
    featured: true,
    isActive: true,
  },
  {
    id: 'biology',
    slug: 'biology',
    nameAr: 'الأحياء',
    nameEn: 'Biology',
    category: 'science',
    descriptionAr:
      'دراسة تفاعلية للخلية الحية، علم الوراثة والـ DNA، تصنيف الكائنات الحية، وأجهزة جسم الإنسان مصممة للتذكر السريع والربط المنطقي للتحصيلي والعلوم الصحية.',
    descriptionEn:
      'An interactive study of cellular biology, genetics & DNA, organism taxonomy, and human anatomy tailored for long-term retention in Tahsili and Pre-Med tracks.',
    iconName: 'Dna',
    image: '/images/first_subject_bio.jpg',
    accentColor: '#10B981', // Emerald
    tracks: ['tahsili', 'university'],
    topics: [
      { titleAr: 'تركيب الخلية الحية وعمليات الأيض والتمثيل الضوئي', titleEn: 'Cell Biology, Metabolism & Respiration', lessonsCount: 12 },
      { titleAr: 'علم الوراثة الجزيئية وشفرة الحمض النووي (DNA)', titleEn: 'Molecular Genetics & DNA Replication', lessonsCount: 10 },
      { titleAr: 'أجهزة جسم الإنسان (الدوري، العصبي، الهضمي، المناعي)', titleEn: 'Human Anatomy & Physiological Systems', lessonsCount: 16 },
      { titleAr: 'علم البيئة والتنوع الحيوي وسلوك الكائنات', titleEn: 'Ecology, Biodiversity & Population Dynamics', lessonsCount: 8 },
    ],
    estimatedHours: 38,
    sampleQuestionCount: 550,
    featured: true,
    isActive: true,
  },
  {
    id: 'english',
    slug: 'english',
    nameAr: 'اللغة الإنجليزية',
    nameEn: 'English',
    category: 'verbal',
    descriptionAr:
      'تطوير مهارات القراءة الأكاديمية والمفردات وقواعد اللغة الإنجليزية للقدرات اللغوية (GAT/STEP) ومقررات اللغة الإنجليزية التحضيرية في الجامعات (ENGL 101/102).',
    descriptionEn:
      'Elevating academic reading comprehension, lexical competence, and grammatical syntax for GAT/STEP tests and university preparatory English courses.',
    iconName: 'Languages',
    image: '/images/first_subject_english.jpg',
    accentColor: '#6366F1', // Indigo
    tracks: ['qudrat', 'university'],
    topics: [
      { titleAr: 'القراءة الأكاديمية واستيعاب النصوص العلمية', titleEn: 'Academic Reading & Scientific Context', lessonsCount: 14 },
      { titleAr: 'تراكيب القواعد اللغوية المتقدمة وحل الفراغات', titleEn: 'Advanced Grammar & Sentence Completion', lessonsCount: 12 },
      { titleAr: 'المفردات عالية التكرار في اختبارات قياس والجامعات', titleEn: 'High-Frequency Vocabulary & Collocations', lessonsCount: 15 },
      { titleAr: 'الكتابة الأكاديمية وبناء المقالات والتقارير', titleEn: 'Academic Writing & Essay Structuring', lessonsCount: 10 },
    ],
    estimatedHours: 45,
    sampleQuestionCount: 600,
    featured: true,
    isActive: true,
  },
];
