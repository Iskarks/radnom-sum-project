import { Link, NavLink, Outlet } from 'react-router-dom'
import { AppBar, Toolbar, Button, Box } from '@mui/material'

function TopBar() {
  return (
    <Box sx={{ minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppBar 
        position="static" 
        sx={{ 
          background: 'linear-gradient(90deg, #FF6B35 0%, #F7931E 50%, #FFD23F 100%)',
          boxShadow: 'none'
        }}
      >
        <Toolbar>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <Button 
              color="inherit" 
              component={Link} 
              to="/"
              sx={{ 
                color: 'white',
                fontWeight: 'bold',
                fontSize: '16px',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }
              }}
            >
              Главная
            </Button>
            <Button 
              color="inherit" 
              component={NavLink} 
              to="/"
              sx={{ 
                color: 'white',
                fontWeight: 'bold',
                fontSize: '16px',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
                '&.active': { backgroundColor: 'rgba(255, 255, 255, 0.3)' }
              }}
            >
              Основная
            </Button>
          </nav>
        </Toolbar>
      </AppBar>
      <Box sx={{ flex: 1, width: '100%', minHeight: 'calc(100vh - 64px)' }}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default TopBar
