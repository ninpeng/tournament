import React from 'react';
import { createUseStyles } from 'react-jss';
import EntryItem from './EntryItem';

const useStyles = createUseStyles({
  round: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 8,
  }
});

const Round = ({ matchList, index }) => {

  const classes = useStyles(index);

  return (
    <div className={classes.round}>
      {matchList.map(matchData => <EntryItem key={matchData.number} data={matchData} />)}
    </div>
  )
}

export default Round;