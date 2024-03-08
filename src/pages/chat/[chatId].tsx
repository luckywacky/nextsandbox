import { useRouter } from 'next/router';
import { ChatLayout } from '@/layouts/ChatLayout/ChatLayout';
import { ReactElement, useEffect, useState } from 'react';
import { ChatData } from '../api/getChat';
import { Chat } from '@/components/Chat/Chat';

export default function Page() {
  const router = useRouter();
  const [chatMessages, setChatMessages] = useState<ChatData['chat']>([]);

  useEffect(() => {
    async function getChat() {
      const response = await fetch(
        `/api/getChat?chatId=${router.query.chatId}`
      );
      const data = (await response.json()) as ChatData;
      setChatMessages(data.chat);
    }

    if (router.query.chatId) {
      getChat();
    }
  }, [router.query]);

  return (
    <div>
      <Chat messages={chatMessages} />
    </div>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <ChatLayout>{page}</ChatLayout>;
};
