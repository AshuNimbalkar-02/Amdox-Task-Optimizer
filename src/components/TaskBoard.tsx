"use client"
import React, { useMemo } from 'react';
import { CheckCircle2, Circle, Clock, Briefcase, Zap, Coffee, Brain } from 'lucide-react';
import styles from './TaskBoard.module.css';

interface Task {
  id: string;
  title: string;
  category: string;
  duration: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'todo' | 'doing' | 'done';
  complexity: 'Hard' | 'Medium' | 'Easy';
}

const allTasks: Task[] = [
  { id: '1', title: 'Refactor Auth Logic', category: 'Dev', duration: '2h', priority: 'High', status: 'todo', complexity: 'Hard' },
  { id: '2', title: 'Design System Update', category: 'Design', duration: '1.5h', priority: 'Medium', status: 'doing', complexity: 'Medium' },
  { id: '3', title: 'Check Emails', category: 'Admin', duration: '30m', priority: 'Low', status: 'todo', complexity: 'Easy' },
  { id: '4', title: 'Team Sync Meeting', category: 'Management', duration: '1h', priority: 'High', status: 'todo', complexity: 'Medium' },
  { id: '5', title: 'Document API Endpoints', category: 'Dev', duration: '1h', priority: 'Medium', status: 'todo', complexity: 'Medium' },
  { id: '6', title: 'Quick UI Tweaks', category: 'Design', duration: '45m', priority: 'Low', status: 'todo', complexity: 'Easy' },
];

const TaskBoard = ({ currentMood }: { currentMood: string }) => {
  const recommendedTasks = useMemo(() => {
    switch (currentMood) {
      case 'Happy':
        // High energy tasks
        return allTasks.filter(t => t.complexity === 'Hard' || t.priority === 'High');
      case 'Stressed':
        // Medium complexity, organized tasks
        return allTasks.filter(t => t.complexity === 'Medium');
      case 'Burnout':
        // Low energy, easy tasks
        return allTasks.filter(t => t.complexity === 'Easy' || t.category === 'Admin');
      default:
        return allTasks;
    }
  }, [currentMood]);

  return (
    <div className={`${styles.container} glass animate-fade-in`}>
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h3>Smart Task Optimizer</h3>
          <p>AI-Driven recommendations based on your <b>{currentMood}</b> state.</p>
        </div>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statVal}>{recommendedTasks.length}</span>
            <span className={styles.statLabel}>Suggested</span>
          </div>
        </div>
      </div>

      <div className={styles.advice}>
        {currentMood === 'Happy' && (
          <div className={`${styles.alert} ${styles.alertSuccess}`}>
            <Zap size={18} />
            <span>Peak performance detected! Great time for complex problem-solving.</span>
          </div>
        )}
        {currentMood === 'Stressed' && (
          <div className={`${styles.alert} ${styles.alertWarning}`}>
            <Brain size={18} />
            <span>Moderate stress detected. Focus on structured, familiar tasks.</span>
          </div>
        )}
        {currentMood === 'Burnout' && (
          <div className={`${styles.alert} ${styles.alertDanger}`}>
            <Coffee size={18} />
            <span>High fatigue detected. We recommend light admin tasks or a 15-min break.</span>
          </div>
        )}
      </div>

      <div className={styles.taskList}>
        {recommendedTasks.map(task => (
          <div key={task.id} className={`${styles.taskItem} glass glass-hover`}>
            <div className={styles.taskStatus}>
              {task.status === 'done' ? <CheckCircle2 size={20} className={styles.doneIcon} /> : <Circle size={20} />}
            </div>
            <div className={styles.taskContent}>
              <div className={styles.taskHeader}>
                <span className={styles.taskTitle}>{task.title}</span>
                <span className={`${styles.complexity} ${styles[task.complexity.toLowerCase()]}`}>
                  {task.complexity}
                </span>
              </div>
              <div className={styles.taskMeta}>
                <div className={styles.metaItem}>
                  <Briefcase size={14} />
                  <span>{task.category}</span>
                </div>
                <div className={styles.metaItem}>
                  <Clock size={14} />
                  <span>{task.duration}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.viewAllBtn}>View All Tasks</button>
    </div>
  );
};

export default TaskBoard;
