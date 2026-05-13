"use client"
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import styles from './MoodAnalytics.module.css';

const data = [
  { name: 'Mon', mood: 80, stress: 20 },
  { name: 'Tue', mood: 65, stress: 45 },
  { name: 'Wed', mood: 40, stress: 70 },
  { name: 'Thu', mood: 75, stress: 30 },
  { name: 'Fri', mood: 90, stress: 15 },
  { name: 'Sat', mood: 85, stress: 10 },
  { name: 'Sun', mood: 95, stress: 5 },
];

const MoodAnalytics = () => {
  return (
    <div className={`${styles.container} glass animate-fade-in`}>
      <div className={styles.header}>
        <h3>Historical Well-being</h3>
        <p>Mood vs Stress trends over the last 7 days.</p>
      </div>

      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorStress" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--danger)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="var(--danger)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke="var(--text-muted)" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
            />
            <YAxis hide />
            <Tooltip 
              contentStyle={{ 
                background: 'var(--bg-secondary)', 
                border: '1px solid var(--surface-glass-border)',
                borderRadius: 'var(--radius-md)',
                fontSize: '12px'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="mood" 
              stroke="var(--primary)" 
              fillOpacity={1} 
              fill="url(#colorMood)" 
              strokeWidth={3}
            />
            <Area 
              type="monotone" 
              dataKey="stress" 
              stroke="var(--danger)" 
              fillOpacity={1} 
              fill="url(#colorStress)" 
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.insights}>
        <div className={styles.insightItem}>
          <span className={styles.label}>Weekly Morale</span>
          <span className={styles.value}>+12%</span>
        </div>
        <div className={styles.insightItem}>
          <span className={styles.label}>Burnout Risk</span>
          <span className={styles.value} style={{ color: 'var(--accent)' }}>Low</span>
        </div>
      </div>
    </div>
  );
};

export default MoodAnalytics;
