import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { Divider, Typography } from '@mui/material';

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%", background: '#F0F0F0', height: '60px' }}>
        <Divider/>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
            justifyContent: 'end',
          }}
      >
        <Typography p={2} variant='body2'>2024 Copyright Firmable. All Rights Reserved.</Typography>
      </BottomNavigation>
    </Box>
  );
}
