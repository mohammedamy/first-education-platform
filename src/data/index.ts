import { TRACKS_DATA } from './tracks';
import { SUBJECTS_DATA } from './subjects';
import { TEACHERS_DATA } from './teachers';
import { TESTIMONIALS_DATA } from './testimonials';
import { FAQ_DATA } from './faq';
import { STEPS_DATA } from './steps';
import { VALUE_PILLARS } from './features';
import type { Track, Subject, Teacher, Testimonial, FaqItem, StepItem, ValuePillar } from '../types';

export * from './tracks';
export * from './subjects';
export * from './teachers';
export * from './testimonials';
export * from './faq';
export * from './steps';
export * from './features';

// =========================================================================
// DATA ACCESS LAYER (Repository Pattern)
// Designed for seamless migration from local mock data to Supabase/API
// =========================================================================

export const getTracks = async (): Promise<Track[]> => {
  return TRACKS_DATA.filter((t) => t.isActive);
};

export const getTrackById = async (id: string): Promise<Track | undefined> => {
  return TRACKS_DATA.find((t) => t.id === id);
};

export const getTrackBySlug = async (slug: string): Promise<Track | undefined> => {
  return TRACKS_DATA.find((t) => t.slug === slug);
};

export const getSubjects = async (): Promise<Subject[]> => {
  return SUBJECTS_DATA.filter((s) => s.isActive);
};

export const getSubjectById = async (id: string): Promise<Subject | undefined> => {
  return SUBJECTS_DATA.find((s) => s.id === id);
};

export const getSubjectsByTrack = async (trackId: string): Promise<Subject[]> => {
  if (trackId === 'all') return SUBJECTS_DATA;
  return SUBJECTS_DATA.filter((s) => s.tracks.includes(trackId));
};

export const getTeachers = async (): Promise<Teacher[]> => {
  return TEACHERS_DATA;
};

export const getTeachersBySubject = async (subjectId: string): Promise<Teacher[]> => {
  return TEACHERS_DATA.filter((t) => t.subjectId === subjectId);
};

export const getTestimonials = async (): Promise<Testimonial[]> => {
  return TESTIMONIALS_DATA;
};

export const getFaqList = async (category?: string): Promise<FaqItem[]> => {
  if (!category || category === 'all') return FAQ_DATA;
  return FAQ_DATA.filter((f) => f.category === category);
};

export const getSteps = async (): Promise<StepItem[]> => {
  return STEPS_DATA;
};

export const getValuePillars = async (): Promise<ValuePillar[]> => {
  return VALUE_PILLARS;
};
