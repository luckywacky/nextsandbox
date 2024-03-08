// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export type OpenChatsData = {
  openChats: { chatId: string; chatName: string }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<OpenChatsData>
) {
  res.status(200).json({
    openChats: [
      { chatId: '1', chatName: 'firstChat' },
      { chatId: '2', chatName: 'secondChat' },
    ],
  });
}
