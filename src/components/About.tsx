import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const About: React.FC = () => {
  return (
    <>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1}>
          <Typography variant='h5' >
            About
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1}>
          <Typography variant='body1' align='left'>
            大阪の大学院生です。<br />
            好きな言語・フレームワークはPython,TypeScriptとDjango,Reactです。
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default About;
