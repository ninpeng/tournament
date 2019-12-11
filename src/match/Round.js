import React from 'react';
import { createUseStyles } from 'react-jss';
import EntryItem from './EntryItem';

const useStyles = createUseStyles({
  round: {
    display: 'flex',
    flexDirection: 'column',
    paddingRight: 50,
  }
});

const Round = ({ matchList, finalRound }) => {

  const classes = useStyles();

  return (
    <div className={classes.round}>
      {matchList.map(matchData => <EntryItem key={matchData.number} data={matchData} finalRound={finalRound} />)}
    </div>
  )
}

export default Round;