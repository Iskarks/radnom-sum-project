import { Box, Typography, Paper } from '@mui/material'

function DonePage() {
  return (
    <Box 
      sx={{ 
        width: '100%',
        height: '100%',
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #A8E6CF 0%, #88D8A3 25%, #68C97A 50%, #4CAF50 75%, #388E3C 100%)',
        padding: '20px'
      }}
    >
      <Paper 
        sx={{ 
          padding: '60px',
          maxWidth: '700px',
          width: '100%',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(76, 175, 80, 0.3)',
          background: 'rgba(255, 255, 255, 0.95)',
          textAlign: 'center'
        }}
      >
        <Typography 
          variant="h3"
          sx={{ 
            color: '#2E7D32',
            fontWeight: 'bold'
          }}
        >
          Промокод применен!
        </Typography>
      </Paper>
    </Box>
  )
}

export default DonePage
