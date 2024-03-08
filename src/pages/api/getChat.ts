// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export type Message = {
  type: 'incoming' | 'outgoing';
  text: string;
};

export type ChatData = {
  chat: Message[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatData>
) {
  const query = req.query;

  //fake db connection
  switch (query.chatId) {
    case '1':
      res.status(200).json({
        chat: [
          { type: 'incoming', text: 'hello there!' },
          { type: 'outgoing', text: 'general Kenobi' },
        ],
      });
    case '2':
      res.status(200).json({
        chat: [
          { type: 'incoming', text: 'I have the high ground' },
          { type: 'outgoing', text: 'You underestimate my power!' },
          { type: 'incoming', text: 'lol' },
        ],
      });
    default: {
      res.status(404);
    }
  }
}
