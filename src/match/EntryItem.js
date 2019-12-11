import React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

const nameWidth = 300;
const entryHeight = 40 + 3;// height: 40, padding 2 + 1

const useStyles = createUseStyles({
  entryBox: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    padding: props => `${props.padding}px 0px`,
  },
  entryNumber: {
    display: 'inline-block',
    width: 20,
  },
  entryContent: {
    display: 'inline-block',
    width: nameWidth + 34,
    // height: 80,
    // border: '2px solid #3A58B7',
    // borderRadius: 6,
  },
  firstEntry: {
    border: '2px solid #3A58B7',
    borderBottom: '1px solid #3A58B7',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  secondEntry: {
    border: '2px solid #3A58B7',
    borderTop: '1px solid #3A58B7',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
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
    color: '#3A58B7',
    boxSizing: 'border-box',
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
  },
  entryVictory: {
    background: props => props.finalRound ? '#FF7F00' : '#3A58B7',
  },
  entryLose: {
    background: '#393C43',
  }
});

const EntryItem = ({ data, finalRound }) => {

  const { r } = data.id;
  const padding = Math.pow(2, r-1) * (entryHeight + 20) - entryHeight;

  const classes = useStyles({ padding, finalRound });

  return (
    <div className={classes.entryBox}>
      <div className={classes.entryNumber}>{data.number}</div>
      <div className={classes.entryContent}>
        <div className={classes.firstEntry}>
          <div className={classes.entryName}>
            <span className={classes.entrySeed}>{data.seed[0]}</span>
            <span>{data.participant[0].name}</span>
          </div>
          <div className={classNames(classes.entryVictoryCount, data.score[0] > data.score[1] ? classes.entryVictory : classes.entryLose)}>{data.score[0]}</div>
        </div>
        <div className={classes.secondEntry}>
          <div className={classes.entryName}>
            <span className={classes.entrySeed}>{data.seed[1]}</span>
            <span>{data.participant[1].name}</span>
          </div>
          <div className={classNames(classes.entryVictoryCount, data.score[0] < data.score[1] ? classes.entryVictory : classes.entryLose)}>{data.score[1]}</div>
        </div>
      </div>
    </div>
  );
}

export default EntryItem;
