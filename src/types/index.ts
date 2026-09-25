export type Language = 'ar' | 'en';

export type Direction = 'rtl' | 'ltr';

export interface LocalizedString {
  ar: string;
  en: string;
}

export interface TrackStat {
  labelAr: string;
  labelEn: string;
  value: string;
}

export interface Track {
  id: string;
  slug: string;
  nameAr: string;
  nameEn: string;
  taglineAr: string;
  taglineEn: string;
  descriptionAr: string;
  descriptionEn: string;
  iconName: string;
  image: string;
  accentColor: string;
  badgeAr: string;
  badgeEn: string;
  subjects: string[]; // Subject IDs
  targetAudienceAr: string;
  targetAudienceEn: string;
  featuresAr: string[];
  featuresEn: string[];
  ctaAr: string;
  ctaEn: string;
  stats: TrackStat[];
  isActive: boolean;
  order: number;
}

export interface SubjectTopic {
  titleAr: string;
  titleEn: string;
  lessonsCount: number;
}

export interface Subject {
  id: string;
  slug: string;
  nameAr: string;
  nameEn: string;
  category: 'core' | 'science' | 'quantitative' | 'verbal' | 'humanities';
  descriptionAr: string;
  descriptionEn: string;
  iconName: string;
  image: string;
  accentColor: string;
  tracks: string[]; // Track IDs
  topics: SubjectTopic[];
  estimatedHours: number;
  sampleQuestionCount: number;
  featured: boolean;
  isActive: boolean;
}

export interface Teacher {
  id: string;
  nameAr: string;
  nameEn: string;
  titleAr: string;
  titleEn: string;
  subjectId: string;
  subjectNameAr: string;
  subjectNameEn: string;
  trackIds: string[];
  avatar: string;
  specialtyAr: string;
  specialtyEn: string;
  experienceAr: string;
  experienceEn: string;
  ratingPlaceholder: string;
  studentsCountPlaceholder: string;
  isDemo: boolean;
  demoBadgeAr: string;
  demoBadgeEn: string;
}

export interface CourseLesson {
  id: string;
  titleAr: string;
  titleEn: string;
  durationMinutes: number;
  isFreePreview: boolean;
}

export interface Course {
  id: string;
  titleAr: string;
  titleEn: string;
  slug: string;
  trackId: string;
  subjectId: string;
  teacherId: string;
  descriptionAr: string;
  descriptionEn: string;
  level: 'foundation' | 'intermediate' | 'advanced';
  status: 'available' | 'upcoming' | 'concept';
  totalHours: number;
  lessonsCount: number;
  lessons: CourseLesson[];
}

export interface Testimonial {
  id: string;
  studentNameAr: string;
  studentNameEn: string;
  trackAr: string;
  trackEn: string;
  targetSchoolOrMajorAr: string;
  targetSchoolOrMajorEn: string;
  quoteAr: string;
  quoteEn: string;
  scoreHighlightAr?: string;
  scoreHighlightEn?: string;
  avatar: string;
  isPrototype: boolean;
  prototypeNoticeAr: string;
  prototypeNoticeEn: string;
}

export interface FaqItem {
  id: string;
  questionAr: string;
  questionEn: string;
  answerAr: string;
  answerEn: string;
  category: 'general' | 'tracks' | 'learning' | 'accounts' | 'payments';
}

export interface StepItem {
  number: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  badgeAr: string;
  badgeEn: string;
  iconName: string;
}

export interface ValuePillar {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  iconName: string;
  tagAr: string;
  tagEn: string;
}

// ==========================================
// FUTURE ARCHITECTURE ENTITIES (PHASES 2 - 10)
// Anticipating future database schemas
// ==========================================

export interface StudentProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  gradeLevel: 'secondary_1' | 'secondary_2' | 'secondary_3' | 'university';
  universityName?: string;
  schoolName?: string;
  city: string;
  targetExamDate?: string;
  enrolledTrackIds: string[];
  enrolledSubjectIds: string[];
  enrolledCourseIds: string[];
  overallProgressPercentage: number;
  streakDays: number;
  createdAt: string;
}

export interface ParentProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  childrenIds: string[];
  notificationPreferences: {
    weeklyReport: boolean;
    examAlerts: boolean;
    attendanceNotice: boolean;
  };
}

export interface TeacherProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  qualifications: string[];
  bio: string;
  subjectsOffered: string[];
  tracksTaught: string[];
  verifiedStatus: 'pending' | 'verified' | 'rejected';
  hourlyRateSar?: number;
}

export interface EducationalMaterial {
  id: string;
  title: string;
  type: 'pdf_summary' | 'mindmap' | 'formula_sheet' | 'practice_sheet';
  subjectId: string;
  courseId?: string;
  fileUrl: string;
  accessRule: 'free' | 'subscription_only';
}

export interface ExamQuestion {
  id: string;
  subjectId: string;
  trackId: string;
  promptAr: string;
  promptEn: string;
  optionsAr: string[];
  optionsEn: string[];
  correctOptionIndex: number;
  explanationAr: string;
  explanationEn: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Exam {
  id: string;
  titleAr: string;
  titleEn: string;
  trackId: string;
  subjectId: string;
  durationMinutes: number;
  totalQuestions: number;
  passingScorePercentage: number;
}

export type PaymentProviderType =
  | 'mada'
  | 'visa_mastercard'
  | 'apple_pay'
  | 'stc_pay'
  | 'tamara'
  | 'tabby';

export interface PaymentProviderConfig {
  id: PaymentProviderType;
  nameAr: string;
  nameEn: string;
  logo: string;
  isSaudiLocal: boolean;
  enabled: boolean;
  phase: number;
}
