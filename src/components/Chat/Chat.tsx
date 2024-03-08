import { Message } from '@/pages/api/getChat';
import styles from './Chat.module.css';

interface ChatProps {
  messages: Message[];
}

export const Chat: React.FC<ChatProps> = ({ messages }) => {
  return (
    <div className={styles.chat}>
      {messages.map((message, i) => (
        <p className={`${styles.message} ${styles[message.type]}`} key={i}>
          {message.text}
        </p>
      ))}
    </div>
  );
};
