import Link from 'next/link';
import styles from './Sidebar.module.css';

interface SidebarProps {
  links: { label: string; href: string }[];
}

export const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  return (
    <div className={styles.sidebar}>
      <Link href="/">Home</Link>
      <h2>Open Chats:</h2>
      {links.map((link, i) => (
        <Link href={`/${link.href}`} key={i}>
          {link.label}
        </Link>
      ))}
    </div>
  );
};
