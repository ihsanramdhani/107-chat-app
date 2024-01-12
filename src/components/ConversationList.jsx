import Logo from './Logo';

const ConversationList = ({
  conversations,
  currentUser,
  onConversationSelected,
  currentConversationId,
}) => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', padding: '0 16px' }}
    >
      {/* header */}
      <div
        style={{
          display: 'flex',
          padding: '32px 13px',
        }}
      >
        <div
          style={{
            marginRight: 'auto',
            color: '#252525',
            fontSize: '32px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
          }}
        >
          Messages
        </div>
        <button
          onClick={() => {
            console.log('add message button clicked');
          }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '36px',
            height: '36px',
            borderRadius: '30px',
            backgroundColor: '#2A7FFF',
            color: '#FFFFFF',
            fontSize: '30px',
            border: 'none',
          }}
        >
          +
        </button>
      </div>
      {/* search bar */}
      <div
        style={{
          display: 'flex',
          padding: '15px 16px',
          borderRadius: '10px',
          backgroundColor: 'rgba(167, 181, 196, 0.15)',
          marginBottom: '12px',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '24px',
            height: '24px',
            backgroundImage: 'url(/magnifier_glass.svg)',
            marginRight: '16px',
          }}
        ></div>
        <input
          type="text"
          placeholder="Search"
          onChange={() => {}}
          style={{
            border: 'none',
            width: '100%',
            backgroundColor: 'rgba(167, 181, 196, 0.15)',
          }}
        />
      </div>
      {/* conversation list*/}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        {conversations.map(conversation => {
          const bgColor =
            conversation.conversation_id == currentConversationId
              ? '#C2DAFF'
              : '#FFFFFF';
          return (
            <div
              key={conversation.conversation_id}
              style={{
                display: 'flex',
                padding: '13px 8px',
                backgroundColor: bgColor,
                borderRadius: '10px',
                alignItems: 'center',
              }}
              onClick={() =>
                onConversationSelected(conversation.conversation_id)
              }
            >
              <div
                style={{
                  marginRight: '24px',
                }}
              >
                <Logo initialName="SA" widthLogo="50px" heightLogo="50px" />
              </div>
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    marginRight: 'auto',
                  }}
                >
                  <div
                    style={{
                      marginBottom: '4px',
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#252525',
                    }}
                  >
                    ATO - Sasahara
                  </div>
                  <div
                    style={{
                      color: '#8A8A8A',
                      fontSize: '16px',
                      fontWeight: 400,
                    }}
                  >
                    {
                      conversation.messages
                        .filter(message => {
                          return message.name != currentUser.name;
                        })
                        .toReversed()[0].english_text
                    }
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      marginBottom: '4px',
                    }}
                  >
                    9.00 am
                  </div>
                  <div
                    style={{
                      backgroundImage: 'url(/notification.svg)',
                      backgroundRepeat: 'no-repeat',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '20px',
                      height: '20px',
                      color: '#FFFFFF',
                      padding: '3px 7px',
                    }}
                  >
                    1
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConversationList;
