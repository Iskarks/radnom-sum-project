import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextField, Box, Typography, Paper } from '@mui/material'

function InputPage() {
  const [whatUserTyped, setWhatUserTyped] = useState('')
  const goTo = useNavigate()

  useEffect(() => {
    const userInput = whatUserTyped.trim()
    if (userInput === 'ЛЕТО2026') {
      goTo('activated')
    }
  }, [whatUserTyped, goTo])

  return (
    <Box 
      sx={{ 
        width: '100%',
        height: '100%',
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #FFE5B4 0%, #FFCC80 25%, #FFB74D 50%, #FFA726 75%, #FF9800 100%)',
        padding: '20px'
      }}
    >
      <Paper 
        sx={{ 
          padding: '40px',
          maxWidth: '600px',
          width: '100%',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(255, 152, 0, 0.3)',
          background: 'rgba(255, 255, 255, 0.95)'
        }}
      >
        <Typography 
          variant="h4" 
          gutterBottom
          sx={{ 
            color: '#FF6B35',
            fontWeight: 'bold',
            marginBottom: '30px',
            textAlign: 'center'
          }}
        >
          Введите промокод
        </Typography>
        <TextField
          fullWidth
          label="Промокод"
          variant="outlined"
          value={whatUserTyped}
          onChange={(event) => setWhatUserTyped(event.target.value)}
          sx={{ 
            marginTop: '20px',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#FFB74D',
                borderWidth: '2px'
              },
              '&:hover fieldset': {
                borderColor: '#FF9800'
              },
              '&.Mui-focused fieldset': {
                borderColor: '#FF6B35'
              }
            },
            '& .MuiInputLabel-root': {
              color: '#FF9800'
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#FF6B35'
            }
          }}
        />
      </Paper>
    </Box>
  )
}

export default InputPage
