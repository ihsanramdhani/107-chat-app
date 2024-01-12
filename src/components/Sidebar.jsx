import Logo from './Logo';

const Sidebar = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '20px',
      }}
    >
      {/* logo */}
      <div
        style={{
          color: '#2A7FFF',
          fontSize: '24px',
          fontWeight: 700,
          marginBottom: '32px',
        }}
      >
        <Logo initialName={107} widthLogo="60px" heightLogo="60px" />
      </div>
      {/* menu */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            marginBottom: 'auto',
          }}
        >
          {/* message icon */}
          <div
            onClick={() => {}}
            style={{
              display: 'flex',
              width: '72px',
              height: '56px',
              padding: '8px 12px',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(167, 181, 196, 0.15)',
              borderRadius: '10px',
            }}
          >
            <img src="/message_icon.svg" alt="message icon" />
          </div>
          {/* contact icon */}
          <div
            onClick={() => {}}
            style={{
              display: 'flex',
              width: '72px',
              height: '56px',
              padding: '8px 12px',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src="/contact_icon.svg" alt="message icon" />
          </div>
          {/* chat gpt icon*/}
          <div
            onClick={() => {}}
            style={{
              display: 'flex',
              width: '72px',
              height: '56px',
              padding: '8px 12px',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src="/chatGpt_icon.svg" alt="message icon" />
          </div>
        </div>
        {/* setting icon*/}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '8px 12px',
          }}
        >
          <div
            onClick={() => {}}
            style={{
              display: 'flex',
              width: '72px',
              height: '56px',
              padding: '8px 12px',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src="/setting_icon.svg" alt="message icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
