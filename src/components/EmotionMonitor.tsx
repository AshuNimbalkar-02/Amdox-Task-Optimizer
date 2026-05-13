"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Camera, Send, Smile, Frown, Meh, AlertCircle } from 'lucide-react';
import styles from './EmotionMonitor.module.css';

const emotions = [
  { label: 'Neutral', icon: <Meh size={24} />, color: 'var(--text-secondary)' },
  { label: 'Happy', icon: <Smile size={24} />, color: 'var(--accent)' },
  { label: 'Stressed', icon: <AlertCircle size={24} />, color: 'var(--warning)' },
  { label: 'Burnout', icon: <Frown size={24} />, color: 'var(--danger)' },
];

const EmotionMonitor = ({ onMoodChange }: { onMoodChange: (mood: string) => void }) => {
  const [currentMood, setCurrentMood] = useState('Neutral');
  const [inputText, setInputText] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

  // Initialize Camera
  useEffect(() => {
    async function setupCamera() {
      if (typeof window !== 'undefined' && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { width: 640, height: 480 } 
          });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        } catch (err) {
          console.error("Error accessing webcam:", err);
        }
      }
    }
    setupCamera();
  }, []);
  const handleTextAnalysis = () => {
    if (!inputText) return;
    // Mock analysis logic
    const lower = inputText.toLowerCase();
    let newMood = 'Neutral';
    if (lower.includes('good') || lower.includes('great') || lower.includes('happy')) newMood = 'Happy';
    else if (lower.includes('tired') || lower.includes('lot') || lower.includes('hard')) newMood = 'Stressed';
    else if (lower.includes('hate') || lower.includes('quit') || lower.includes('too much')) newMood = 'Burnout';
    
    setCurrentMood(newMood);
    onMoodChange(newMood);
    setInputText('');
  };

  const handleMoodSelect = (mood: string) => {
    setCurrentMood(mood);
    onMoodChange(mood);
  };

  return (
    <div className={`${styles.container} glass animate-fade-in`}>
      <div className={styles.header}>
        <h3>Real-Time Emotion Monitor</h3>
        <span className={styles.liveBadge}>LIVE</span>
      </div>

      <div className={styles.videoContainer}>
        <div className={styles.videoOverlay}>
          <div className={`${styles.moodIndicator} glass`}>
            {emotions.find(e => e.label === currentMood)?.icon}
            <span style={{ color: emotions.find(e => e.label === currentMood)?.color }}>
              {currentMood} Detected
            </span>
          </div>
          <div className={styles.scanline}></div>
        </div>
        <video 
          ref={videoRef} 
          autoPlay 
          muted 
          playsInline 
          className={styles.videoStream}
        />
        {!videoRef.current?.srcObject && (
          <div className={styles.cameraPlaceholder}>
            <Camera size={48} className={styles.cameraIcon} />
            <p>Initializing Camera...</p>
          </div>
        )}
      </div>

      <div className={styles.textAnalysis}>
        <label>How are you feeling right now?</label>
        <div className={`${styles.inputWrapper} glass`}>
          <input 
            type="text" 
            placeholder="Type your thoughts..." 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleTextAnalysis()}
          />
          <button onClick={handleTextAnalysis} className={styles.sendBtn}>
            <Send size={18} />
          </button>
        </div>
      </div>

      <div className={styles.quickSelect}>
        <p>Manual Override (for demo):</p>
        <div className={styles.moodGrid}>
          {emotions.map((m) => (
            <button 
              key={m.label} 
              onClick={() => handleMoodSelect(m.label)}
              className={`${styles.moodBtn} ${currentMood === m.label ? styles.activeMood : ''} glass-hover`}
            >
              {m.icon}
              <span>{m.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmotionMonitor;
