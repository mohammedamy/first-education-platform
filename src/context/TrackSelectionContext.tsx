import React, { createContext, useContext, useState } from 'react';
import type { Track, Subject, Teacher } from '../types';

interface TrackSelectionContextType {
  selectedTrackId: string;
  setSelectedTrackId: (id: string) => void;
  activeSubjectModal: Subject | null;
  setActiveSubjectModal: (subject: Subject | null) => void;
  activeTrackModal: Track | null;
  setActiveTrackModal: (track: Track | null) => void;
  activeTeacherModal: Teacher | null;
  setActiveTeacherModal: (teacher: Teacher | null) => void;
  isJoinTeacherModalOpen: boolean;
  setIsJoinTeacherModalOpen: (open: boolean) => void;
  isAssessmentModalOpen: boolean;
  setIsAssessmentModalOpen: (open: boolean) => void;
  futureAccountModal: {
    isOpen: boolean;
    role: 'student' | 'parent' | 'teacher';
  };
  openFutureAccountModal: (role: 'student' | 'parent' | 'teacher') => void;
  closeFutureAccountModal: () => void;
}

const TrackSelectionContext = createContext<TrackSelectionContextType | undefined>(undefined);

export const TrackSelectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedTrackId, setSelectedTrackId] = useState<string>('all');
  const [activeSubjectModal, setActiveSubjectModal] = useState<Subject | null>(null);
  const [activeTrackModal, setActiveTrackModal] = useState<Track | null>(null);
  const [activeTeacherModal, setActiveTeacherModal] = useState<Teacher | null>(null);
  const [isJoinTeacherModalOpen, setIsJoinTeacherModalOpen] = useState<boolean>(false);
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState<boolean>(false);
  const [futureAccountModal, setFutureAccountModal] = useState<{
    isOpen: boolean;
    role: 'student' | 'parent' | 'teacher';
  }>({
    isOpen: false,
    role: 'student',
  });

  const openFutureAccountModal = (role: 'student' | 'parent' | 'teacher') => {
    setFutureAccountModal({ isOpen: true, role });
  };

  const closeFutureAccountModal = () => {
    setFutureAccountModal((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <TrackSelectionContext.Provider
      value={{
        selectedTrackId,
        setSelectedTrackId,
        activeSubjectModal,
        setActiveSubjectModal,
        activeTrackModal,
        setActiveTrackModal,
        activeTeacherModal,
        setActiveTeacherModal,
        isJoinTeacherModalOpen,
        setIsJoinTeacherModalOpen,
        isAssessmentModalOpen,
        setIsAssessmentModalOpen,
        futureAccountModal,
        openFutureAccountModal,
        closeFutureAccountModal,
      }}
    >
      {children}
    </TrackSelectionContext.Provider>
  );
};

export const useTrackSelection = (): TrackSelectionContextType => {
  const context = useContext(TrackSelectionContext);
  if (!context) {
    throw new Error('useTrackSelection must be used within a TrackSelectionProvider');
  }
  return context;
};
