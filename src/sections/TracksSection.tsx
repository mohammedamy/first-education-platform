import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTrackSelection } from '../context/TrackSelectionContext';
import { SectionHeader } from '../components/ui/SectionHeader';
import { TrackCard } from '../components/cards/TrackCard';
import { TRACKS_DATA } from '../data/tracks';
import type { Track } from '../types';

export const TracksSection: React.FC = () => {
  const { t } = useLanguage();
  const { selectedTrackId, setSelectedTrackId, setActiveTrackModal } = useTrackSelection();

  const handleSelectTrack = (track: Track) => {
    setSelectedTrackId(track.id);
    const element = document.querySelector('#subjects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewDetails = (track: Track) => {
    setActiveTrackModal(track);
  };

  return (
    <section id="tracks" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.tracks.sectionBadge}
          title={t.tracks.title}
          subtitle={t.tracks.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
          {TRACKS_DATA.map((track) => (
            <TrackCard
              key={track.id}
              track={track}
              isSelected={selectedTrackId === track.id}
              onSelect={() => handleSelectTrack(track)}
              onViewDetails={() => handleViewDetails(track)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
