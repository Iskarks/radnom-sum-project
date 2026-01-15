import React, { useState, useEffect } from 'react'
import { Box, Button, Typography, Paper, List, ListItem, ListItemText } from '@mui/material'

function Stopwatch() {
  const [time, setTime] = useState(0)
  const [active, setActive] = useState(false)
  const [timerSpeed, setTimerSpeed] = useState(1)
  const [completedLaps, setCompletedLaps] = useState([])

  useEffect(() => {
    let intervalTimer = null
    
    if (active) {
      intervalTimer = setInterval(() => {
        setTime(previousTime => previousTime + (1 * timerSpeed))
      }, 1000)
    }

    return () => {
      if (intervalTimer) {
        clearInterval(intervalTimer)
      }
    }
  }, [active, timerSpeed])

  const startButton = () => {
    setActive(true)
  }

  const stopButton = () => {
    setActive(false)
  }

  const resetButton = () => {
    setActive(false)
    setTime(0)
    setCompletedLaps([])
    setTimerSpeed(1)
  }

  const lapButton = () => {
    const currentLap = {
      number: completedLaps.length + 1,
      time: getTimeString(time)
    }
    setCompletedLaps(previousLaps => [...previousLaps, currentLap])
  }

  const speedUp = () => {
    if (timerSpeed < 2) {
      setTimerSpeed(previousSpeed => previousSpeed * 2)
    }
  }

  const slowDown = () => {
    if (timerSpeed > 0.5) {
      setTimerSpeed(previousSpeed => previousSpeed / 2)
    }
  }

  const getTimeString = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const secs = Math.floor(totalSeconds % 60)
    
    const hoursStr = hours.toString().padStart(2, '0')
    const minutesStr = minutes.toString().padStart(2, '0')
    const secondsStr = secs.toString().padStart(2, '0')
    
    return `${hoursStr}:${minutesStr}:${secondsStr}`
  }

  return (
    <Paper elevation={3} sx={{ padding: 4, minWidth: 400, maxWidth: 600 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
        <Typography variant="h3" component="div" sx={{ fontFamily: 'monospace', fontWeight: 'bold' }}>
          {getTimeString(time)}
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          {!active ? (
            <Button variant="contained" color="primary" onClick={startButton}>
              Запустить
            </Button>
          ) : (
            <Button variant="contained" color="secondary" onClick={stopButton}>
              Остановить
            </Button>
          )}
          
          <Button variant="outlined" onClick={resetButton}>
            Сбросить
          </Button>

          {active && (
            <Button variant="outlined" color="info" onClick={lapButton}>
              Круг
            </Button>
          )}
        </Box>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Button 
            variant="outlined" 
            onClick={slowDown}
            disabled={timerSpeed <= 0.5}
          >
            Замедлить
          </Button>
          
          <Typography variant="body1">
            Скорость: {timerSpeed}x
          </Typography>
          
          <Button 
            variant="outlined" 
            onClick={speedUp}
            disabled={timerSpeed >= 2}
          >
            Ускорить
          </Button>
        </Box>

        {completedLaps.length > 0 && (
          <Box sx={{ width: '100%', mt: 2 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Круги:
            </Typography>
            <List>
              {completedLaps.map((lap) => (
                <ListItem key={lap.number}>
                  <ListItemText 
                    primary={`Круг ${lap.number}: ${lap.time}`}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Box>
    </Paper>
  )
}

export default Stopwatch
