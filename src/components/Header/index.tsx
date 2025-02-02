import React from 'react';
import styles from "./style.module.scss";
import Link from 'next/link';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AbcIcon from '@mui/icons-material/Abc';

const Header = () => {
  return (
    <header className={styles.header}>
        <ul>
            <li>
                <Link href={"/login"}>
                <AccessibilityNewIcon />
                ログイン</Link>
            </li>
            <li>
                <Link href={"/signup"}>
                <AbcIcon />
                登録</Link>
            </li>
        </ul>
    </header>
  );
};

export default Header;