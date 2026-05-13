"use client"
import React from 'react';
import { Heart, Moon, Wind, Brain, Activity } from 'lucide-react';
import styles from './WellbeingView.module.css';

const WellbeingView = () => {
  const activities = [
    { icon: <Wind size={24} />, title: 'Breathing Exercise', duration: '5 min', description: 'Box breathing to lower cortisol.' },
    { icon: <Brain size={24} />, title: 'Mental Reset', duration: '10 min', description: 'Guided mindfulness session.' },
    { icon: <Activity size={24} />, title: 'Micro-Stretch', duration: '3 min', description: 'Quick physical release for desk workers.' },
  ];

  return (
    <div className={`${styles.container} animate-fade-in`}>
      <div className={styles.header}>
        <h1>Personal Well-being</h1>
        <p>Holistic health tracking and AI-powered recovery suggestions.</p>
      </div>

      <div className={styles.scoreSection}>
        <div className={`${styles.scoreCard} glass`}>
          <div className={styles.scoreHeader}>
            <Heart className={styles.heartIcon} />
            <span>Well-being Score</span>
          </div>
          <div className={styles.scoreValue}>84<span>/100</span></div>
          <p>You're doing great! Your stress levels are 15% lower than last week.</p>
        </div>
        
        <div className={styles.metricsGrid}>
          <div className={`${styles.metricItem} glass`}>
            <Moon size={20} />
            <div className={styles.metricContent}>
              <span className={styles.metricLabel}>Sleep Quality</span>
              <span className={styles.metricVal}>7.5h (Optimal)</span>
            </div>
          </div>
          <div className={`${styles.metricItem} glass`}>
            <Activity size={20} />
            <div className={styles.metricContent}>
              <span className={styles.metricLabel}>Physical Activity</span>
              <span className={styles.metricVal}>4.2k Steps</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.recommendations}>
        <h3>Suggested Recovery</h3>
        <div className={styles.activityGrid}>
          {activities.map((act, i) => (
            <div key={i} className={`${styles.activityCard} glass glass-hover`}>
              <div className={styles.actIcon}>{act.icon}</div>
              <div className={styles.actInfo}>
                <div className={styles.actHeader}>
                  <h4>{act.title}</h4>
                  <span className={styles.duration}>{act.duration}</span>
                </div>
                <p>{act.description}</p>
              </div>
              <button className={styles.startBtn}>Start</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WellbeingView;
