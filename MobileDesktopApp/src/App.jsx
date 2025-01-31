import React from 'react';

const App = () => {
  return (
    <div style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{color:'#1D347A', fontStyle:'Bold', padding: '20px'}}>Welcome to Git-Ting Started App!</h1>
      <p>Click the buttons below to visit the Github repository and 
        HNG Hire page.
      </p>
      {/* Github Repository Button */}
      <a 
        href="https://github.com/YOUR_GITHUB_USERNAME/git-ting-started-mobile" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', marginRight: '10px' }}
        >
        <button style={{ padding: '10px 20px', fontSize: '16px', fontWeight: 'bold', backgroundColor: 'aqua', color: 'black', cursor: 'pointer' }}>
          Visit Github Repository
        </button>
        </a>
        {/* HNG Hire Button */}
        <a 
          href="http://hng.tech/hire/react-native-developers" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
          >
            <button style={{ padding: '10px 20px', fontSize: '16px', fontWeight:'Bold', cursor: 'pointer', backgroundColor: 'aqua', color: 'black', }}>
              HNG Hire Page
            </button>
          </a>
    </div>
  );
}

export default App;
