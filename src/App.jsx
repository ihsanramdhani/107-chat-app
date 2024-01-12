import Sidebar from './components/Sidebar';
import ConversationList from './components/ConversationList';
import ChatWindow from './components/ChatWindow';
import './App.css';
import { useEffect, useState } from 'react';
import sampleConversations from './data';

function App() {
  const [conversations, setConversations] = useState([]);
  const [currentConversationId, setCurrentConversationId] = useState(null);
  const [currentUser] = useState({
    name: 'John Doe',
    company_id: '107',
  });

  useEffect(() => {
    setConversations(sampleConversations);
    setCurrentConversationId(sampleConversations[1].conversation_id);
  }, []);

  const addMessage = (originalMessage, translatedMessage) => {
    setConversations(prevConversations => {
      return prevConversations.map(prevConversation => {
        if (prevConversation.conversation_id == currentConversationId) {
          return {
            ...prevConversation,
            messages: [
              ...prevConversation.messages,
              {
                name: currentUser.name,
                english_text: originalMessage,
                japanese_text: translatedMessage,
                created_at: new Date().toISOString(),
              },
            ],
          };
        } else {
          return prevConversation;
        }
      });
    });
  };

  const handleTranslate = text => {
    return text + ' translated';
  };

  const selectCurrentConversation = conversationId => {
    setCurrentConversationId(conversationId);
  };

  return (
    <main>
      <Sidebar/>
      <ConversationList
        conversations={conversations}
        currentUser={currentUser}
        onConversationSelected={selectCurrentConversation}
        currentConversationId={currentConversationId}
      />
      <ChatWindow
        messages={
          conversations?.find(conversation => {
            return conversation.conversation_id == currentConversationId;
          })?.messages
        }
        onNewMessage={addMessage}
        currentUser={currentUser}
        translateFunc={handleTranslate}
      />
    </main>
  );
}

export default App;
