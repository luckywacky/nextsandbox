import { Sidebar } from '@/components/Sidebar/Sidebar';
import styles from './ChatLayout.module.css';
import { useEffect, useState } from 'react';
import { ReactNode } from 'react';
import { OpenChatsData } from '@/pages/api/getOpenChats';

export const ChatLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [openChats, setOpenChats] = useState<OpenChatsData['openChats']>([]);
  useEffect(() => {
    async function getChats() {
      const response = await fetch('/api/getOpenChats');
      const data = (await response.json()) as OpenChatsData;
      setOpenChats(data.openChats);
    }
    getChats();
  }, []);

  return (
    <div className={styles.chatLayout}>
      <Sidebar
        links={openChats.map((chat) => ({
          href: `chat/${chat.chatId}`,
          label: chat.chatName,
        }))}
      />
      {children}
    </div>
  );
};
