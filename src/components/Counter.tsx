import { Button, Box, Typography } from '@mui/material'
import useCounter from '../hooks/useCounter'

interface CounterProps {
  initialValue?: number
}

function Counter({ initialValue }: CounterProps) {
  const { counterValue, incrementCounter, decrementCounter, resetCounter } = useCounter(initialValue)

  return (
    <Box sx={{ padding: 2, margin: 2, border: '1px solid #ccc', borderRadius: 2, textAlign: 'center' }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Count: {counterValue}
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
        <Button variant="contained" onClick={incrementCounter}>
          +1
        </Button>
        <Button variant="contained" onClick={decrementCounter}>
          -1
        </Button>
        <Button variant="outlined" onClick={resetCounter}>
          Reset
        </Button>
      </Box>
    </Box>
  )
}

export default Counter
