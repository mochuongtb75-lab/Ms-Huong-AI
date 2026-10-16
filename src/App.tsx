import React, { useState } from 'react';
import { TopInfoBar } from './components/layout/TopInfoBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingActions } from './components/layout/FloatingActions';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ProgramsSection } from './components/sections/ProgramsSection';
import { AssistantGridSection } from './components/sections/AssistantGridSection';
import { TrainingMethodSection } from './components/sections/TrainingMethodSection';
import { OutcomesSection } from './components/sections/OutcomesSection';
import { PhilosophySection } from './components/sections/PhilosophySection';
import { FinalCTASection } from './components/sections/FinalCTASection';
import { DocumentModal } from './components/modals/DocumentModal';
import { CourseDetailModal } from './components/modals/CourseDetailModal';
import { Toast } from './components/common/Toast';
import { Course } from './types';

export default function App() {
  const [isDocumentModalOpen, setIsDocumentModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  const showToast = (message: string) => {
    setToastMessage(message);
    setIsToastVisible(true);
  };

  const handleOpenRegisterModal = () => {
    // Open the document/lead modal with focus on registration
    setIsDocumentModalOpen(true);
  };

  const handleSelectCourse = (course: Course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="min-h-screen bg-[#050447] text-white flex flex-col font-sans selection:bg-[#168BFF] selection:text-white">
      {/* 1. Top Info Bar */}
      <TopInfoBar />

      {/* 2. Sticky Navbar with Mobile Menu */}
      <Navbar onOpenDocumentModal={() => setIsDocumentModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* VIII & IX & X. Hero Section with Statistics and Lead Form */}
        <HeroSection
          onOpenDocumentModal={() => setIsDocumentModalOpen(true)}
          onOpenToast={showToast}
        />

        {/* XI. About Section */}
        <AboutSection />

        {/* XII. Training Program Section (9 Courses 3x3 Grid) */}
        <ProgramsSection onSelectCourse={handleSelectCourse} />

        {/* XIII. One Person – One AI Assistant (8 Mini Cards) */}
        <AssistantGridSection />

        {/* XIV. Training Method (4 Steps: 01, 02, 03 [Gold], 04 [Gold]) */}
        <TrainingMethodSection />

        {/* XV. Learning Outcomes (12 Outcomes 3 Columns) */}
        <OutcomesSection onOpenDocumentModal={() => setIsDocumentModalOpen(true)} />

        {/* XVI. AI Is Not Difficult & Philosophy (2 Large Cards) */}
        <PhilosophySection />

        {/* XVII. Final CTA Section (High-impact 4 CTAs) */}
        <FinalCTASection
          onOpenDocumentModal={() => setIsDocumentModalOpen(true)}
          onOpenRegisterModal={handleOpenRegisterModal}
        />
      </main>

      {/* XVIII. Footer (3 Columns + Bottom Bar) */}
      <Footer onOpenRegisterModal={handleOpenRegisterModal} />

      {/* XIX. Floating Action Buttons (Desktop: Zalo, Hotline, BackToTop; Mobile: Sticky Bottom Bar) */}
      <FloatingActions
        onOpenDocumentModal={() => setIsDocumentModalOpen(true)}
        onOpenRegisterModal={handleOpenRegisterModal}
      />

      {/* Modals & Dialogs */}
      <DocumentModal
        isOpen={isDocumentModalOpen}
        onClose={() => setIsDocumentModalOpen(false)}
        onSuccess={() => showToast('Đăng ký nhận tài liệu thành công! MS HƯƠNG AI sẽ liên hệ sớm.')}
      />

      <CourseDetailModal
        course={selectedCourse}
        isOpen={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onSuccess={() => showToast('Đăng ký khóa học thành công! MS HƯƠNG AI sẽ liên hệ sớm.')}
      />

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
      />
    </div>
  );
}
