"use client"
import React from 'react';
import { LayoutDashboard, Target, BarChart3, Bell, Settings, LogOut, HeartPulse } from 'lucide-react';
import styles from './Sidebar.module.css';

const Sidebar = ({ activeTab, onTabChange }: { activeTab: string, onTabChange: (tab: string) => void }) => {
  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { icon: <Target size={20} />, label: 'Tasks' },
    { icon: <BarChart3 size={20} />, label: 'Analytics' },
    { icon: <HeartPulse size={20} />, label: 'Well-being' },
    { icon: <Bell size={20} />, label: 'Alerts' },
  ];

  return (
    <aside className={`${styles.sidebar} glass`}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>A</div>
        <span className={styles.logoText}>Amdox AI</span>
      </div>
      
      <nav className={styles.nav}>
        {navItems.map((item, index) => (
          <button 
            key={index} 
            onClick={() => onTabChange(item.label)}
            className={`${styles.navItem} ${activeTab === item.label ? styles.active : ''} glass-hover`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className={styles.footer}>
        <button className={`${styles.navItem} glass-hover`}>
          <Settings size={20} />
          <span>Settings</span>
        </button>
        <button className={`${styles.navItem} glass-hover`}>
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
