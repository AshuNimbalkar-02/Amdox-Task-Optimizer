"use client"
import React from 'react';
import { Bell, ShieldAlert, AlertTriangle, CheckCircle2, Trash2 } from 'lucide-react';
import styles from './AlertsView.module.css';

const alerts = [
  { id: 1, type: 'danger', title: 'High Burnout Risk', message: 'User "Alex" has shown prolonged stress patterns over 4 hours.', time: '10 mins ago', action: 'Notify HR' },
  { id: 2, type: 'warning', title: 'Unusual Work Hours', message: 'Late night activity detected for 3 consecutive days.', time: '2 hours ago', action: 'Suggest Break' },
  { id: 3, type: 'info', title: 'System Update', message: 'Emotion models updated to version 2.4 for better accuracy.', time: '5 hours ago', action: 'View Details' },
];

const AlertsView = () => {
  return (
    <div className={`${styles.container} animate-fade-in`}>
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1>Alerts Center</h1>
          <p>Critical notifications and system alerts regarding team well-being.</p>
        </div>
        <button className={styles.clearBtn}>
          <Trash2 size={18} />
          <span>Clear All</span>
        </button>
      </div>

      <div className={styles.statsRow}>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statVal}>02</span>
          <span className={styles.statLabel}>Active Warnings</span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statVal}>15</span>
          <span className={styles.statLabel}>Resolved Today</span>
        </div>
      </div>

      <div className={styles.alertList}>
        {alerts.map(alert => (
          <div key={alert.id} className={`${styles.alertCard} glass`}>
            <div className={`${styles.iconWrapper} ${styles[alert.type]}`}>
              {alert.type === 'danger' ? <ShieldAlert size={24} /> : <AlertTriangle size={24} />}
            </div>
            <div className={styles.alertContent}>
              <div className={styles.alertHeader}>
                <h4>{alert.title}</h4>
                <span className={styles.time}>{alert.time}</span>
              </div>
              <p>{alert.message}</p>
              <div className={styles.actions}>
                <button className={styles.primaryAction}>{alert.action}</button>
                <button className={styles.secondaryAction}>Dismiss</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsView;
