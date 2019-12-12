import React from 'react';
import { createUseStyles } from 'react-jss';
import MatchItem from './MatchItem';

const useStyles = createUseStyles({
  round: {
    display: 'flex',
    flexDirection: 'column',
  }
});

// 대진표의 매치들을 담고 있는 라운드 컴포넌트
const Round = (props) => {

  const classes = useStyles();

  return (
    <div className={classes.round}>
      {props.matchList.map(matchData => <MatchItem key={matchData.number} data={matchData} {...props} />)}
    </div>
  )
}

export default Round;