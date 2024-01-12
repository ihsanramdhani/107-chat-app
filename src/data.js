// const sampleConversations = [
//   {
//     speaker: 'Ato',
//     japanese_text: '日本語のメッセージ',
//     english_text: 'Japanese message',
//     isUser: true,
//   },
//   {
//     speaker: '107',
//     english_text: 'English message',
//     japanese_text: '英語のメッセージ',
//     isUser: false,
//   },
// ];

const sampleConversations = [
  {
    conversation_id: 1,
    messages: [
      {
        id: 0,
        japanese_text: 'こんにちは',
        english_text: 'Hello',
        name: 'John Doe',
        company_id: '107',
        chatroom: 'General',
        created_at: '2024-01-11T17:08:41+07:00',
      },
      {
        id: 1,
        japanese_text: 'こんにちは',
        english_text: 'No worries!',
        name: 'ATO - Sasahara ',
        company_id: '107',
        chatroom: 'General',
        created_at: '2024-01-11T17:08:41+07:00',
      },
    ],
  },
  {
    conversation_id: 2,
    messages: [
      {
        id: 1,
        japanese_text: 'こんにちは',
        english_text: "That's great!",
        name: 'ATO - Iwakawa',
        company_id: '107',
        chatroom: 'General',
        created_at: '2024-01-11T17:08:41+07:00',
      },
      {
        id: 2,
        japanese_text: 'それについて私が考えていることをお知らせします',
        english_text: "I'll let you know what I think about it.",
        name: 'ATO - Iwakawa',
        company_id: '107',
        chatroom: 'General',
        created_at: '2024-01-11T17:08:41+07:00',
      },
      {
        id: 3,
        japanese_text: '昨日の書類を修正して私に送ってもらえますか？',
        english_text:
          'Nasuda-san, can you fix the document from yesteday and then send them back to me?',
        name: 'John Doe',
        company_id: '456',
        chatroom: 'General',
        created_at: '2024-01-11T17:08:41+07:00',
      },
      {
        id: 4,
        japanese_text: 'こんにちは',
        english_text: 'Hello, we’re postponing the meeting to 3PM today.',
        name: 'ATO - Iwakawa',
        company_id: '107',
        chatroom: 'General',
        created_at: '2024-01-11T17:08:41+07:00',
      },
      {
        id: 5,
        japanese_text: 'こんにちは',
        english_text: "I'll see what i can do.",
        name: 'ATO - Iwakawa',
        company_id: '107',
        chatroom: 'General',
        created_at: '2024-01-11T17:08:41+07:00',
      },
      {
        id: 6,
        japanese_text: 'こんにちは',
        english_text: 'Thank you for today!',
        name: 'ATO - Iwakawa',
        company_id: '107',
        chatroom: 'General',
        created_at: '2024-01-11T17:08:41+07:00',
      },
      {
        id: 7,
        japanese_text: 'おはようございます',
        english_text: 'Good Morning',
        name: 'John Doe',
        company_id: '456',
        chatroom: 'General',
        created_at: '2024-01-11T17:08:41+07:00',
      },
    ],
  },
  {
    conversation_id: 3,
    messages: [
      {
        id: 1,
        japanese_text: 'こんにちは',
        english_text: 'Hello',
        name: 'John Doe',
        company_id: '107',
        chatroom: 'General',
        created_at: '2024-01-11T17:08:41+07:00',
      },
      {
        id: 2,
        japanese_text: 'お疲れ様',
        english_text: 'Good job 3',
        name: 'Jane Smith',
        company_id: '456',
        chatroom: 'General',
        created_at: '2024-01-11T17:08:41+07:00',
      },
    ],
  },
  {
    conversation_id: 4,
    messages: [
      {
        id: 1,
        japanese_text: 'こんにちは',
        english_text: 'Hello',
        name: 'John Doe',
        company_id: '107',
        chatroom: 'General',
        created_at: '2024-01-11T17:08:41+07:00',
      },
      {
        id: 2,
        japanese_text: 'お疲れ様',
        english_text: 'Good job Good job Good job Good job 4',
        name: 'Jane Smith',
        company_id: '456',
        chatroom: 'General',
        created_at: '2024-01-11T17:08:41+07:00',
      },
    ],
  },
];

export default sampleConversations;
