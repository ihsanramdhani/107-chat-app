const ChatBubble = ({
  englishText,
  japaneseText,
  timestamp,
  backgroundColor,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '409px' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '10px',
          backgroundColor: backgroundColor,
          padding: '8px 12px',
        }}
      >
        <div>{englishText}</div>
        <div
          style={{
            display: 'block',
            width: 'auto',
            height: '1px',
            background: '#A7B5C4',
            margin: '8px 0',
          }}
        ></div>
        <div>{japaneseText}</div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '4px',
        }}
      >
        <div
          onClick={() => {
            console.log('show original clicked');
          }}
          style={{ display: 'flex' }}
        >
          <div
            style={{
              backgroundImage: 'url(/chatGptMonokrom.svg)',
              backgroundRepeat: 'no-repeat',
              display: 'flex',
              width: '20px',
              height: '20px',
              marginRight: '8px',
            }}
          ></div>
          <div>Show original</div>
        </div>
        <div>{timestamp}</div>
      </div>
    </div>
  );
};

export default ChatBubble;
