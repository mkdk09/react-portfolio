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
            <WorkItems href={ 'https://github.com/mkdk09/analyze-es-front' } primary={ 'analyze-es' } secondary={ 'エントリーシートの内容を解析するWebアプリ' } />
            <WorkItems href={ 'https://github.com/mkdk09/hiragana-classification' } primary={ 'ひらがな認識' } secondary={ 'ひらがなの手書き文字認識Webアプリ' } />
            <WorkItems href={ 'https://github.com/mkdk09/LexRank' } primary={ 'LexRank' } secondary={ '文章要約アプリ' } />
            <WorkItems href={ 'https://github.com/mkdk09/mnist_kivy' } primary={ 'mnist_kivy' } secondary={ 'Kivyで手書き数字分類' } />
            <WorkItems href={ 'https://github.com/mkdk09/realtime-answer' } primary={ 'realtime-answer' } secondary={ 'リアルタイムアンケートWebアプリ' } />
            <WorkItems href={ 'https://github.com/mkdk09/random_arXiv' } primary={ 'random_arXiv' } secondary={ 'arXivの論文をランダムで表示するCLI' } />
            <WorkItems href={ 'https://github.com/mkdk09/react-portfolio' } primary={ 'react-portfolio' } secondary={ 'ポートフォリオ' } />
          </List>
        </Box>
      </Box>
    </>
  );
}

export default Works;
