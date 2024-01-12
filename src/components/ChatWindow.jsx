import { useState } from 'react';
import Logo from './Logo';
import ChatBubble from './ChatBubble';

const ChatWindow = ({ messages, onNewMessage, currentUser, translateFunc }) => {
  const [currentInput, setCurrentInput] = useState('');
  const [translatedInput, setTranslatedInput] = useState('');

  const handleChange = event => {
    setCurrentInput(event.target.value);
    setTranslatedInput(translateFunc(event.target.value));
  };

  const handleSubmit = () => {
    onNewMessage(currentInput, translatedInput);
    setCurrentInput('');
    setTranslatedInput('');
  };

  const getTime = timestamp => {
    let hours = new Date(timestamp).getHours();
    let minutes = new Date(timestamp).getMinutes();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return hours + '.' + minutes;
  };

  const isSameDay = (date1, date2) => {
    const year1 = new Date(date1).getFullYear();
    const month1 = new Date(date1).getMonth();
    const day1 = new Date(date1).getDate();

    const year2 = new Date(date2).getFullYear();
    const month2 = new Date(date2).getMonth();
    const day2 = new Date(date2).getDate();

    return year1 == year2 && month1 == month2 && day1 == day2;
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'space-between',
      }}
    >
      {/* header */}
      <div
        style={{
          backgroundColor: '#f8f8f8',
          display: 'flex',
          gap: '20px',
          marginBottom: '16px',
          marginLeft: '12px',
          boxShadow: '-10px 10px 25px 0px rgba(167, 181, 196, 0.2)',
          height: '80px',
          alignItems: 'center',
        }}
      >
        <Logo initialName="IA" />
        <div>
          <h2 style={{ fontSize: '20px', margin: 0, padding: 0 }}>
            ATO - Iwakawa
          </h2>
          <h4 style={{ margin: 0, marginTop: '4px', fontWeight: 400 }}>
            Online
          </h4>
        </div>
      </div>
      {/* chat box */}
      <div style={{ overflow: 'auto' }}>
        {messages?.map((msg, idx, arr) => {
          const yearMsg = new Date(msg.created_at).getFullYear();
          const monthMsg = new Date(msg.created_at).getMonth();
          const dayMsg = new Date(msg.created_at).getDate();

          const monthNames = [
            'January',
            'February',
            'March',
            'April',
            'Mei',
            'June',
            'July',
            'September',
            'October',
            'November',
            'December',
          ];

          const timeMsg = `${dayMsg} ${monthNames[monthMsg]} ${yearMsg}`;

          // define last msg from specific user on specific date
          const isLastMsg =
            idx == arr.length - 1 ||
            msg.name != arr[idx + 1]?.name ||
            !isSameDay(msg.created_at, arr[idx + 1].created_at);

          return msg.name == currentUser.name ? (
            <>
              {(idx == 0 ||
                !isSameDay(msg.created_at, arr[idx - 1].created_at)) && (
                // timestamp
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '24px 0',
                  }}
                >
                  <div
                    key={idx}
                    style={{
                      borderRadius: '10px',
                      background: '#F8F8F8',
                      color: '#8A8A8A',
                      padding: '4px 24px',
                    }}
                  >
                    {timeMsg}
                  </div>
                </div>
              )}
              <div
                style={{
                  padding: '8px 12px',
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  gap: '12px',
                }}
                key={idx}
              >
                {isLastMsg ? (
                  <Logo initialName="IA" />
                ) : (
                  <div style={{ margin: '20px' }}></div>
                )}
                <ChatBubble
                  englishText={msg.english_text}
                  japaneseText={msg.japanese_text}
                  timestamp={getTime(msg.created_at)}
                  backgroundColor="#C2DBFF" // blue chat bubble
                />
              </div>
            </>
          ) : (
            <>
              {(idx == 0 ||
                !isSameDay(msg.created_at, arr[idx - 1].created_at)) && (
                // timestamp
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '24px 0',
                  }}
                >
                  <div
                    key={idx}
                    style={{
                      borderRadius: '10px',
                      background: '#F8F8F8',
                      color: '#8A8A8A',
                      padding: '4px 24px',
                    }}
                  >
                    {timeMsg}
                  </div>
                </div>
              )}
              <div
                style={{
                  padding: '8px 12px',
                  display: 'flex',
                  gap: '12px',
                }}
                key={idx}
              >
                {isLastMsg ? (
                  <Logo initialName="IA" />
                ) : (
                  <div style={{ margin: '20px' }}></div>
                )}
                <ChatBubble
                  englishText={msg.english_text}
                  japaneseText={msg.japanese_text}
                  timestamp={getTime(msg.created_at)}
                  backgroundColor="#DEDEDE" // gray chat bubble
                />
              </div>
            </>
          );
        })}
      </div>
      {/* input */}

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#F8F8F8',
        }}
      >
        {currentInput.length > 0 && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0 20px',
              paddingTop: '12px',
            }}
          >
            <div>{translatedInput}</div>
            <div
              style={{
                display: 'flex',
                marginTop: '12px',
              }}
            >
              <div
                style={{
                  backgroundImage: 'url(/chatGptColor.svg)',
                  backgroundRepeat: 'no-repeat',
                  display: 'flex',
                  width: '20px',
                  height: '20px',
                  marginRight: '4px',
                }}
              ></div>
              <div>Translate by ChatGPT-4</div>
            </div>
            {/* line */}
            <div
              style={{
                display: 'block',
                height: '1px',
                background: '#8A8A8A',
                marginTop: '12px',
              }}
            ></div>
          </div>
        )}

        <div
          style={{
            display: 'flex',
            padding: '18px 16px',
            gap: '12px',
            alignItems: 'center',
          }}
        >
          <button
            onClick={() => {
              console.log('attachment button clicked');
            }}
            style={{
              backgroundImage: 'url(/attachment_button.svg)',
              backgroundRepeat: 'no-repeat',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '40px',
              height: '40px',
              border: 'none',
            }}
          ></button>
          <div
            style={{
              display: 'flex',
              width: '100%',
              borderRadius: '10px',
              border: '1px solid var(--Grey, #8A8A8A)',
              background: '#FFFFFF',
              padding: '13px 0',
              paddingLeft: '24px',
              paddingRight: '18px',
            }}
          >
            <input
              type="text"
              placeholder="Write something..."
              onChange={handleChange}
              value={currentInput}
              style={{ marginRight: 'auto', border: 'none', width: '80%' }}
            />
            <button
              onClick={handleSubmit}
              style={{
                backgroundImage: 'url(/send_button.svg)',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '32px',
                height: '32px',
                border: 'none',
              }}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
