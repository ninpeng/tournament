import React from 'react';
import { createUseStyles } from 'react-jss';

const nameWidth = 300;

const useStyles = createUseStyles({
  entryBox: {
    // position: 'absolute',
    // top: props => props.top,
    left: props => props.left,
    display: 'flex',
    alignItems: 'center',
    color: 'white',
  },
  entryNumber: {
    display: 'inline-block',
    width: 20,
  },
  entryContent: {
    display: 'inline-block',
    // width: nameWidth + 30,
    // height: 80,
    border: '2px solid #3A58B7',
    borderRadius: 6,
  },
  firstEntry: {
    borderBottom: '1px solid #3A58B7',
  },
  secondEntry: {
    borderTop: '1px solid #3A58B7',
  },
  entryName: {
    display: 'inline-block',
    width: nameWidth,
    height: 40,
    padding: 5,
    lineHeight: '30px',
    boxSizing: 'border-box',
    borderRight: '1px solid #3A58B7',
  },
  entrySeed: {
    display: 'inline-block',
    width: 25,
    paddingLeft: 5,
  },
  entryVictoryCount: {
    display: 'inline-block',
    width: 30,
    height: 40,
    padding: 5,
    lineHeight: '30px',
    boxSizing: 'border-box',
    borderLeft: '1px solid #3A58B7',
    textAlign: 'center',
  }
});

const EntryItem = ({ data }) => {
  const max = 4;
  const classes = useStyles({ top: (data.id.m-1) * 120 + (data.id.r > 1 ? max*120 : 0), left: (data.id.r-1) * 400 });
  // console.log(data)

  return (
    <div className={classes.entryBox}>
      <div className={classes.entryNumber}>{data.number}</div>
      <div className={classes.entryContent}>
        <div className={classes.firstEntry}>
          <div className={classes.entryName}>
            <span className={classes.entrySeed}>{data.seed[0]}</span>
            <span>{data.participant[0].name}</span>
          </div>
          <div className={classes.entryVictoryCount}>{data.score[0]}</div>
        </div>
        <div className={classes.secondEntry}>
          <div className={classes.entryName}>
            <span className={classes.entrySeed}>{data.seed[1]}</span>
            <span>{data.participant[1].name}</span>
          </div>
          <div className={classes.entryVictoryCount}>{data.score[1]}</div>
        </div>
      </div>
    </div>
  );
}

export default EntryItem;
