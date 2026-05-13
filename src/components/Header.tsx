"use client"
import React from 'react';
import { Search, User, ChevronDown } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.searchBar} glass`}>
        <Search size={18} className={styles.searchIcon} />
        <input type="text" placeholder="Search tasks, analytics..." className={styles.searchInput} />
      </div>

      <div className={styles.profileArea}>
        <div className={styles.statusIndicator}>
          <div className={styles.pulse}></div>
          <span>AI Monitoring Active</span>
        </div>
        
        <div className={`${styles.profile} glass glass-hover`}>
          <div className={styles.avatar}>
            <User size={20} />
          </div>
          <div className={styles.userInfo}>
            <span className={styles.userName}>John Doe</span>
            <span className={styles.userRole}>Product Designer</span>
          </div>
          <ChevronDown size={16} />
        </div>
      </div>
    </header>
  );
};

export default Header;
