import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  TextField, 
  Typography, 
  Link, 
  Paper 
} from '@mui/material';

const LoginForm = () => {
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const toggleForm = () => {
    setIsForgotPassword(!isForgotPassword);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        backgroundImage: `url('../src/assets/images/loginBG.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'left',
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingRight: '50px',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: '100%',
            maxWidth: '500px',
            p: '40px',
            backgroundColor: 'rgba(255, 255, 255, 0.15)', 
            borderRadius: '10px',
            backdropFilter: 'blur(10px)', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)', 
            height:"360px"
          }}
        >
          <Typography
            variant="h4"
            sx={{ 
              fontWeight: 'bold', 
              mb: 3, 
              textAlign: 'center', 
              color: 'white', 
              fontSize:"24px"
            }}
          >
            {isForgotPassword ? 'Forgot Password' : 'Login'}
          </Typography>

          {isForgotPassword ? (
            <>
              <TextField 
                label="Email" 
                variant="outlined" 
                fullWidth 
                sx={{
                  mb: 2, 
                  input: { color: 'white' }, 
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' }, 
                    '&:hover fieldset': { borderColor: '#fff' }, // Hover Color
                    '&.Mui-focused fieldset': { borderColor: '#fff' }, // Focus Color
                  },
                  '& .MuiInputLabel-root': {
                    color: 'white', 
                    '&.Mui-focused': { color: '#fff' } // Label Focus Color
                  }
                }} 
              />
              <TextField 
                label="Verification Code" 
                variant="outlined" 
                fullWidth 
                sx={{
                  mb: 2, 
                  input: { color: 'white' }, 
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' }, 
                    '&:hover fieldset': { borderColor: '#fff' }, 
                    '&.Mui-focused fieldset': { borderColor: '#fff' }
                  },
                  '& .MuiInputLabel-root': {
                    color: 'white', 
                    '&.Mui-focused': { color: '#fff' } 
                  }
                }} 
              />
              <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: 'white', 
                  color: '#1f70a7', 
                  '&:hover': { backgroundColor: '#f0f0f0' }, 
                  fontWeight: 'bold' 
                }} 
                fullWidth
              >
               Forgot Password
              </Button>
              <Link 
               
               sx={{ 
                 display: 'block', 
                 textAlign: 'center', 
                 mt: 2, 
                 cursor: 'pointer', 
                 color: 'white' 
               }}
             >
               Resend Verification Code
             </Link>
              <Link 
                onClick={toggleForm}
                sx={{ 
                  display: 'block', 
                  textAlign: 'center', 
                  mt: 2, 
                  cursor: 'pointer', 
                  color: 'white' 
                }}
              >
                Back to Login
              </Link>
         
            </>
          ) : (
            <>
              <TextField 
                label="Email" 
                variant="outlined" 
                fullWidth 
                sx={{
                  mb: 2, 
                  input: { color: 'white' }, 
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' }, 
                    '&:hover fieldset': { borderColor: '#fff' }, 
                    '&.Mui-focused fieldset': { borderColor: '#fff' }
                  },
                  '& .MuiInputLabel-root': {
                    color: 'white', 
                    '&.Mui-focused': { color: '#fff' } 
                  }
                }} 
              />
              <TextField 
                label="Password" 
                type="password" 
                variant="outlined" 
                fullWidth 
                sx={{
                  mb: 2, 
                  input: { color: 'white' }, 
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' }, 
                    '&:hover fieldset': { borderColor: '#fff' }, 
                    '&.Mui-focused fieldset': { borderColor: '#fff' }
                  },
                  '& .MuiInputLabel-root': {
                    color: 'white', 
                    '&.Mui-focused': { color: '#fff' } 
                  }
                }} 
              />
              <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: 'white', 
                  color: '#1f70a7', 
                  '&:hover': { backgroundColor: '#f0f0f0' }, 
                  fontWeight: 'bold' 
                }} 
                fullWidth
              >
                Login
              </Button>
              <Link 
                onClick={toggleForm}
                sx={{ 
                  display: 'block', 
                  textAlign: 'center', 
                  mt: 2, 
                  cursor: 'pointer', 
                  color: 'white' 
                }}
              >
                Forgot Password?
              </Link>
            </>
          )}
        </Paper>
      </Box>
    </Box>
  );
};

export default LoginForm;
