import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { TrackSelectionProvider } from './context/TrackSelectionContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './sections/HeroSection';
import { TrustBarSection } from './sections/TrustBarSection';
import { TracksSection } from './sections/TracksSection';
import { SubjectExplorerSection } from './sections/SubjectExplorerSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { WhyFirstSection } from './sections/WhyFirstSection';
import { TeachersPreviewSection } from './sections/TeachersPreviewSection';
import { LearningExperienceSection } from './sections/LearningExperienceSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { FaqSection } from './sections/FaqSection';
import { FinalCtaSection } from './sections/FinalCtaSection';

// Modals
import { TrackDetailsModal } from './components/modals/TrackDetailsModal';
import { SubjectDetailsModal } from './components/modals/SubjectDetailsModal';
import { TeacherApplicationModal } from './components/modals/TeacherApplicationModal';
import { TeacherProfileModal } from './components/modals/TeacherProfileModal';
import { FutureAccountModal } from './components/modals/FutureAccountModal';
import { AssessmentQuizModal } from './components/modals/AssessmentQuizModal';

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-slate-950 flex flex-col relative overflow-x-hidden">
      {/* Intelligently Sticky Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1 w-full">
        <HeroSection />
        <TrustBarSection />
        <TracksSection />
        <SubjectExplorerSection />
        <HowItWorksSection />
        <WhyFirstSection />
        <TeachersPreviewSection />
        <LearningExperienceSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Global Interactive Modals */}
      <TrackDetailsModal />
      <SubjectDetailsModal />
      <TeacherApplicationModal />
      <TeacherProfileModal />
      <FutureAccountModal />
      <AssessmentQuizModal />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <TrackSelectionProvider>
        <AppContent />
      </TrackSelectionProvider>
    </LanguageProvider>
  );
};

export default App;
