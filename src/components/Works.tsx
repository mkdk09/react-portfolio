import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'

import WorkItems from './WorkItems'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 770,
    maxWidth: '100%',
  },
}));

const Works: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1}>
          <Typography variant='h5'>
            Works
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1}>
          <List className={classes.root}>
            <WorkItems href={ '#' } primary={ 'Work1' } secondary={ 'Work1です。' } />
            <WorkItems href={ '#' } primary={ 'Work2' } secondary={ 'Work2です。' } />
            <WorkItems href={ '#' } primary={ 'Work3' } secondary={ 'Work3です。' } />
          </List>
        </Box>
      </Box>
    </>
  );
}

export default Works;
