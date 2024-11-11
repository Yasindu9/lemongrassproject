import React from 'react';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const HeaderSection = styled(Box)({
  backgroundColor: '#333333',
  padding: '15px 0',
  display: 'flex',
  justifyContent: 'center',
});

const NavButton = styled(Button)(({ active }) => ({
  color: active ? '#FFFFFF' : '#AAAAAA',
  fontWeight: active ? 'bold' : 'normal',
  fontSize: '1rem',
  margin: '0 15px',
  borderBottom: active ? '2px solid #f1a20e' : 'none',
}));

const MiniBar = ({ activeTab }) => {
  const navigate = useNavigate();

  const handleNavClick = (tab) => {
    if (tab === 'History') {
      navigate('/lemon-grass/history');
    } else if (tab === 'Varieties') {
      navigate('/lemon-grass/varieties');
    }else if (tab === 'Cultivation') {
        navigate('/lemon-grass/Cultivation');
      }else if (tab === 'Products') {
        navigate('/lemon-grass/Products');
      }else if (tab === 'Value') {
        navigate('/lemon-grass/Value');
      }
  };

  return (
    <HeaderSection>
      <NavButton onClick={() => handleNavClick('History')} active={activeTab === 'History'}>
        History
      </NavButton>
      <NavButton onClick={() => handleNavClick('Varieties')} active={activeTab === 'Varieties'}>
        Varieties
      </NavButton>

      <NavButton onClick={() => handleNavClick('Cultivation')} active={activeTab === 'Cultivation'}>
      Cultivation
      </NavButton>
      <NavButton onClick={() => handleNavClick('Products')} active={activeTab === 'Products'}>
      Products
      </NavButton>
      <NavButton onClick={() => handleNavClick('Value')} active={activeTab === 'Value'}>
      Value Addition
      </NavButton>

      {/* Add more buttons as needed */}
    </HeaderSection>
  );
};

export default MiniBar;
