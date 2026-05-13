"use client"
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import EmotionMonitor from '@/components/EmotionMonitor';
import TaskBoard from '@/components/TaskBoard';
import MoodAnalytics from '@/components/MoodAnalytics';
import TasksView from '@/components/TasksView';
import AnalyticsView from '@/components/AnalyticsView';
import WellbeingView from '@/components/WellbeingView';
import AlertsView from '@/components/AlertsView';
import styles from './page.module.css';

export default function Dashboard() {
  const [currentMood, setCurrentMood] = useState('Neutral');
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <main className={styles.main}>
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className={styles.content}>
        <Header />
        
        <div className={styles.viewContainer}>
          {activeTab === 'Dashboard' && (
            <div className={styles.dashboardGrid}>
              <div className={styles.column}>
                <EmotionMonitor onMoodChange={setCurrentMood} />
              </div>
              <div className={styles.column}>
                <TaskBoard currentMood={currentMood} />
              </div>
              <div className={styles.column}>
                <MoodAnalytics />
                <div className={`${styles.teamAlerts} glass animate-fade-in`}>
                  <h3>Team Morale Alerts</h3>
                  <div className={styles.alertList}>
                    <div className={styles.alertItem}>
                      <div className={styles.alertIcon}>!</div>
                      <div className={styles.alertText}>
                        <p><b>Manager Alert:</b> Sarah may be experiencing high stress.</p>
                        <span>Notify HR?</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Tasks' && <TasksView />}
          {activeTab === 'Analytics' && <AnalyticsView />}
          {activeTab === 'Well-being' && <WellbeingView />}
          {activeTab === 'Alerts' && <AlertsView />}
        </div>
      </div>
    </main>
  );
}
