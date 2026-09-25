import type { FaqItem } from '../types';

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    questionAr: 'ما هي First؟',
    questionEn: 'What is First?',
    answerAr:
      'First هي منصة تعليمية سعودية متطورة تهدف إلى مساعدة الطلاب على التفوق في اختبارات قياس الوطنية (التحصيلي والقدرات) ومقررات السنة التحضيرية والسنوات التخصصية الجامعية عبر مسارات دراسية منظمة، تدريب مكثف، ومعلمين متخصصين.',
    answerEn:
      'First is a modern Saudi educational platform built to empower students to excel in national standardized testing (Tahsili & Qudrat) and collegiate university STEM subjects through structured study pathways, deliberate practice, and expert mentors.',
  },
  {
    id: 'faq-2',
    category: 'general',
    questionAr: 'لمن تناسب المنصة؟',
    questionEn: 'Who is the platform designed for?',
    answerAr:
      'تناسب طلاب وطالبات المرحلة الثانوية (الصفوف الأول والثاني والثالث الثانوي) المستعدين لاختبارات القدرات والتحصيلي، بالإضافة إلى طلاب وطالبات الجامعات السعودية في السنوات التحضيرية والتخصصات العلمية والصحية والهندسية.',
    answerEn:
      'It is tailored for high school students (grades 10 through 12) targeting high percentiles in Qudrat and Tahsili, as well as university undergraduates in preparatory year STEM, health, and engineering majors.',
  },
  {
    id: 'faq-3',
    category: 'tracks',
    questionAr: 'ما المسارات المتاحة حالياً؟',
    questionEn: 'What tracks are currently available?',
    answerAr:
      'ينطلق الإصدار التأسيسي بثلاثة مسارات رئيسية: مسار التحصيلي العلمي، مسار القدرات العامة (الكمي واللغوي)، ومسار طلاب الجامعات. وقد صُممت بنية المنصة بحيث تتيح إضافة مسارات أخرى مستقبلاً بكل سهولة.',
    answerEn:
      'Phase 1 launches with three core tracks: Scientific Tahsili, General Aptitude (Qudrat), and University Undergraduates. The system architecture is built to seamlessly expand to additional specialized tracks in future phases.',
  },
  {
    id: 'faq-4',
    category: 'tracks',
    questionAr: 'ما المواد المتوفرة في المنصة؟',
    questionEn: 'What subjects are provided on the platform?',
    answerAr:
      'تضم المنصة مبدئياً 5 مواد محورية: الرياضيات، الفيزياء، الكيمياء، الأحياء، واللغة الإنجليزية، موزعة حسب متطلبات كل مسار دراسي.',
    answerEn:
      'The platform initially features five core foundational disciplines: Mathematics, Physics, Chemistry, Biology, and Academic English, mapped appropriately to each academic track.',
  },
  {
    id: 'faq-5',
    category: 'learning',
    questionAr: 'هل يمكنني تغيير المسار بعد اختياره؟',
    questionEn: 'Can I change my chosen track later?',
    answerAr:
      'نعم بالتأكيد. تتيح لك المنصة مرونة التنقل بين المسارات والمواد الدراسية المختلفة وفقاً لخطتك الأكاديمية والجدول الزمني لاختباراتك.',
    answerEn:
      'Yes, absolutely. The platform offers full flexibility to switch tracks or enroll in multiple disciplines tailored to your personal testing timeline.',
  },
  {
    id: 'faq-6',
    category: 'learning',
    questionAr: 'هل توجد دروس وجلسات مع معلمين متخصصين؟',
    questionEn: 'Are there interactive lessons with specialized mentors?',
    answerAr:
      'نعم، ترتكز فلسفة First على التوجيه الأكاديمي الحقيقي من خلال محاضرات مباشرة وورش عمل تفاعلية ومعلمين ذوي خبرة يفهمون طبيعة أسئلة الاختبارات السعودية بدقة.',
    answerEn:
      'Yes. The pedagogy of First centers on verified human mentorship, combining live masterclasses, interactive office hours, and deep pedagogical guidance from experienced instructors.',
  },
  {
    id: 'faq-7',
    category: 'tracks',
    questionAr: 'هل يمكن إضافة مواد ومساقات جديدة مستقبلاً؟',
    questionEn: 'Can new subjects and tracks be added in the future?',
    answerAr:
      'بكل تأكيد. تم بناء البنية البرمجية لمنصة First لتكون قابلة للتوسع الفوري لإضافة مواد مثل علوم الحاسب، البرمجة، الإحصاء، المحاسبة، والمواد الطبية والهندسية دون أي انقطاع في تجربة المستخدم.',
    answerEn:
      'Yes. The underlying data model allows instantaneous expansion to add subjects like Computer Science, Programming, Statistics, Accounting, and advanced Pre-Med curricula without altering core architecture.',
  },
  {
    id: 'faq-8',
    category: 'accounts',
    questionAr: 'هل ستتوفر حسابات مخصصة للطلاب وأولياء الأمور والمعلمين؟',
    questionEn: 'Will dedicated student, parent, and teacher portals be available?',
    answerAr:
      'نعم، تتضمن خارطة طريق المنصة إطلاق بوابات متخصصة: بوابة الطالب لمتابعة التقدم والتمارين، بوابة ولي الأمر لمتابعة تقارير الإنجاز والأداء، وبوابة المعلم لإدارة المحتوى والصفوف.',
    answerEn:
      'Yes. Our platform roadmap includes dedicated interfaces: a Student Cockpit for drills and lectures, a Parent Portal for weekly mastery analytics, and a Teacher Console for class management.',
  },
  {
    id: 'faq-9',
    category: 'learning',
    questionAr: 'هل ستتوفر دورات مسجلة ومكتبة تدريبات رقمية؟',
    questionEn: 'Will on-demand recorded courses and digital question banks be offered?',
    answerAr:
      'نعم، سيتم تفعيل مكتبة شاملة من الدروس المسجلة عالية الجودة المقسمة لمقاطع قصيرة مركزة، مصحوبة ببنوك أسئلة ذكية تدرب الطالب على الحل تحت الوقت المحدد.',
    answerEn:
      'Yes. An extensive on-demand video vault of micro-lectures alongside an adaptive question bank will be integrated in subsequent launch phases.',
  },
  {
    id: 'faq-10',
    category: 'payments',
    questionAr: 'هل ستتوفر وسائل دفع إلكترونية؟',
    questionEn: 'Will electronic payment methods be available?',
    answerAr:
      'ستتم إضافة وسائل الدفع المحلية المناسبة في مرحلة لاحقة، بما يضمن تجربة اشتراك ميسرة وآمنة تدعم الخيارات الشائعة في المملكة العربية السعودية.',
    answerEn:
      'Appropriate local Saudi payment methods will be integrated in a subsequent phase, ensuring a seamless and secure subscription checkout tailored for the Kingdom.',
  },
];
