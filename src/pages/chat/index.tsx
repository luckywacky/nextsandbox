import { ChatLayout } from '@/layouts/ChatLayout/ChatLayout';
import { ReactElement } from 'react';

export default function Page() {
  return <div>Select open chat in menu</div>;
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <ChatLayout>{page}</ChatLayout>;
};
