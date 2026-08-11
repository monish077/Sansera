import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductSegments } from './components/ProductSegments';
import { AutomationSection } from './components/AutomationSection';
import { FacilitiesMap } from './components/FacilitiesMap';
import { SustainabilitySection } from './components/SustainabilitySection';
import { SustainabilityPage } from './components/SustainabilityPage';
import { InvestorPortal } from './components/InvestorPortal';
import { Footer } from './components/Footer';

// Modals
import { RfqModal } from './components/RfqModal';
import { ContactModal } from './components/ContactModal';
import { InvestorModal } from './components/InvestorModal';
import { EsgModal } from './components/EsgModal';
import { OemOnboardingModal } from './components/OemOnboardingModal';
import { PlantAuditModal } from './components/PlantAuditModal';
import { CustomMachineModal } from './components/CustomMachineModal';

import { ProductItem } from './types';

export default function App() {
  // Navigation & Page View State
  const [currentView, setCurrentView] = useState<'home' | 'sustainability'>('home');

  // Modal Visibility States
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isInvestorOpen, setIsInvestorOpen] = useState(false);
  const [isEsgOpen, setIsEsgOpen] = useState(false);
  const [isOemOpen, setIsOemOpen] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [isMachineOpen, setIsMachineOpen] = useState(false);

  const [selectedRfqProduct, setSelectedRfqProduct] = useState<ProductItem | null>(null);

  const handleOpenSustainabilityPage = () => {
    setCurrentView('sustainability');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Global 3D Scroll Reveal & Parallax observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    const targets = document.querySelectorAll('.reveal, .reveal-3d');
    targets.forEach((el) => observer.observe(el));

    // Mousemove 3D card tilt handler
    const handleMouseMove = (e: MouseEvent) => {
      const tiltCards = document.querySelectorAll<HTMLElement>('.tilt-3d-card, .tilt-3d-card-light');
      tiltCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        ) {
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const rx = ((y - rect.height / 2) / (rect.height / 2)) * -6;
          const ry = ((x - rect.width / 2) / (rect.width / 2)) * 6;
          card.style.setProperty('--rx', `${rx.toFixed(2)}deg`);
          card.style.setProperty('--ry', `${ry.toFixed(2)}deg`);
        } else {
          card.style.setProperty('--rx', '0deg');
          card.style.setProperty('--ry', '0deg');
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [currentView]);

  const handleOpenRfq = (product?: ProductItem) => {
    setSelectedRfqProduct(product || null);
    setIsRfqOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const elem = document.getElementById(sectionId);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const elem = document.getElementById(sectionId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (currentView === 'sustainability') {
    return (
      <div className="min-h-screen bg-white text-[#1d1d1f] font-sans antialiased">
        <SustainabilityPage
          onBackToHome={handleBackToHome}
          onOpenRfq={() => handleOpenRfq()}
          onOpenEsgReport={() => setIsEsgOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Modals */}
        <RfqModal
          isOpen={isRfqOpen}
          onClose={() => setIsRfqOpen(false)}
          initialProduct={selectedRfqProduct}
        />
        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
        <EsgModal
          isOpen={isEsgOpen}
          onClose={() => setIsEsgOpen(false)}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] selection:bg-[#1d1d1f] selection:text-white font-sans antialiased">
      
      {/* Navigation Header */}
      <Navbar
        onOpenRfq={() => handleOpenRfq()}
        onOpenFinancials={() => handleScrollToSection('investors')}
        onOpenSustainabilityPage={handleOpenSustainabilityPage}
      />

      {/* Hero Section */}
      <Hero
        onOpenRfq={() => handleOpenRfq()}
        onExploreSolutions={() => handleScrollToSection('about')}
        onOpenShowroom={() => handleScrollToSection('product-segments')}
      />

      {/* Storytelling Section */}
      <AboutSection
        onOpenFacilities={() => handleScrollToSection('facilities')}
        onOpenRfq={() => handleOpenRfq()}
      />

      {/* OUR PRODUCT SEGMENTS */}
      <ProductSegments
        onOpenRfq={() => handleOpenRfq()}
      />

      {/* In-House Automation & SPM Building */}
      <AutomationSection
        onOpenRfq={() => handleOpenRfq()}
        onOpenCustomMachine={() => setIsMachineOpen(true)}
      />

      {/* Global Manufacturing Footprint & Plant Audit */}
      <FacilitiesMap
        onOpenRfq={() => handleOpenRfq()}
        onOpenPlantAudit={() => setIsAuditOpen(true)}
      />

      {/* ESG & Sustainability */}
      <SustainabilitySection
        onOpenRfq={() => handleOpenRfq()}
        onOpenEsgReport={() => setIsEsgOpen(true)}
        onOpenSustainabilityPage={handleOpenSustainabilityPage}
      />

      {/* Investor Relations Portal */}
      <InvestorPortal
        onOpenRfq={() => handleOpenRfq()}
        onOpenInvestorDesk={() => setIsInvestorOpen(true)}
      />

      {/* Corporate Footer & Get in Touch */}
      <Footer
        onOpenRfq={() => handleOpenRfq()}
        onOpenFinancials={() => handleScrollToSection('investors')}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* ─── ENTERPRISE MODALS & DESKS ─── */}
      
      {/* 1. Request Engineering RFQ Modal */}
      <RfqModal
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
        initialProduct={selectedRfqProduct}
      />

      {/* 2. Get in Touch Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* 3. Contact Investor Desk Modal */}
      <InvestorModal
        isOpen={isInvestorOpen}
        onClose={() => setIsInvestorOpen(false)}
      />

      {/* 4. Request ESG Report Modal */}
      <EsgModal
        isOpen={isEsgOpen}
        onClose={() => setIsEsgOpen(false)}
      />

      {/* 5. Onboard as OEM Client Modal */}
      <OemOnboardingModal
        isOpen={isOemOpen}
        onClose={() => setIsOemOpen(false)}
      />

      {/* 6. Schedule Plant Audit Modal */}
      <PlantAuditModal
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
      />

      {/* 7. Inquire About Custom Machine Building Modal */}
      <CustomMachineModal
        isOpen={isMachineOpen}
        onClose={() => setIsMachineOpen(false)}
      />

    </div>
  );
}
