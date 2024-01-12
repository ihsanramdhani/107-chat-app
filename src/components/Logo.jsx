const Logo = ({ initialName, widthLogo = '40px', heightLogo = '40px' }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'end' }}>
      <div
        style={{
          backgroundColor: '#C2DBFF',
          borderRadius: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          outline: '2px solid #2A7FFF',
          width: widthLogo,
          height: heightLogo,
        }}
      >
        {initialName}
      </div>
    </div>
  );
};

export default Logo;
