"use client"
import React from 'react';
import { Plus, Filter, Search, MoreVertical } from 'lucide-react';
import styles from './TasksView.module.css';

const tasks = [
  { id: '1', title: 'Update Brand Guidelines', status: 'In Progress', priority: 'High', due: 'Today' },
  { id: '2', title: 'Client Feedback Implementation', status: 'To Do', priority: 'Medium', due: 'Tomorrow' },
  { id: '3', title: 'Q2 Performance Report', status: 'In Progress', priority: 'High', due: 'May 20' },
  { id: '4', title: 'Email Campaign Setup', status: 'Done', priority: 'Low', due: 'Yesterday' },
  { id: '5', title: 'New Onboarding Flow', status: 'To Do', priority: 'Medium', due: 'May 22' },
];

const TasksView = () => {
  return (
    <div className={`${styles.container} animate-fade-in`}>
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1>Task Management</h1>
          <p>Organize and track your optimized workflow.</p>
        </div>
        <button className={styles.addBtn}>
          <Plus size={20} />
          <span>New Task</span>
        </button>
      </div>

      <div className={`${styles.toolbar} glass`}>
        <div className={styles.search}>
          <Search size={18} />
          <input type="text" placeholder="Search tasks..." />
        </div>
        <div className={styles.filters}>
          <button className="glass-hover"><Filter size={16} /> Filter</button>
          <select className="glass-hover">
            <option>All Status</option>
            <option>To Do</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
        </div>
      </div>

      <div className={styles.taskTable}>
        <div className={styles.tableHeader}>
          <span>Task Name</span>
          <span>Status</span>
          <span>Priority</span>
          <span>Due Date</span>
          <span></span>
        </div>
        <div className={styles.tableBody}>
          {tasks.map(task => (
            <div key={task.id} className={`${styles.tableRow} glass-hover`}>
              <span className={styles.taskName}>{task.title}</span>
              <span className={`${styles.status} ${styles[task.status.replace(' ', '').toLowerCase()]}`}>{task.status}</span>
              <span className={`${styles.priority} ${styles[task.priority.toLowerCase()]}`}>{task.priority}</span>
              <span className={styles.due}>{task.due}</span>
              <button className={styles.more}><MoreVertical size={16} /></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TasksView;
