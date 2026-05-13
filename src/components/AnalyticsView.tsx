"use client"
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Info, Download } from 'lucide-react';
import styles from './AnalyticsView.module.css';

const productivityData = [
  { name: 'Mon', score: 75 },
  { name: 'Tue', score: 82 },
  { name: 'Wed', score: 60 },
  { name: 'Thu', score: 95 },
  { name: 'Fri', score: 88 },
  { name: 'Sat', score: 40 },
  { name: 'Sun', score: 30 },
];

const moodDistribution = [
  { name: 'Happy', value: 45, color: 'var(--accent)' },
  { name: 'Neutral', value: 30, color: 'var(--primary)' },
  { name: 'Stressed', value: 20, color: 'var(--warning)' },
  { name: 'Burnout', value: 5, color: 'var(--danger)' },
];

const AnalyticsView = () => {
  return (
    <div className={`${styles.container} animate-fade-in`}>
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1>Advanced Analytics</h1>
          <p>In-depth insights into your productivity and emotional trends.</p>
        </div>
        <button className={`${styles.exportBtn} glass glass-hover`}>
          <Download size={18} />
          <span>Export Report</span>
        </button>
      </div>

      <div className={styles.grid}>
        <div className={`${styles.card} glass`}>
          <div className={styles.cardHeader}>
            <h3>Productivity Index</h3>
            <Info size={16} />
          </div>
          <div className={styles.chart}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} axisLine={false} tickLine={false} />
                <YAxis stroke="var(--text-muted)" fontSize={12} axisLine={false} tickLine={false} />
                <Tooltip 
                  cursor={{fill: 'rgba(255,255,255,0.05)'}}
                  contentStyle={{ background: 'var(--bg-secondary)', border: 'none', borderRadius: '8px' }}
                />
                <Bar dataKey="score" fill="var(--primary)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className={`${styles.card} glass`}>
          <div className={styles.cardHeader}>
            <h3>Mood Distribution</h3>
            <Info size={16} />
          </div>
          <div className={styles.chart}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={moodDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {moodDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ background: 'var(--bg-secondary)', border: 'none', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className={styles.legend}>
            {moodDistribution.map(m => (
              <div key={m.name} className={styles.legendItem}>
                <div className={styles.dot} style={{ background: m.color }}></div>
                <span>{m.name} ({m.value}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsView;
