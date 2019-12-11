import React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import { useChangeHover } from './MatchProvider';
const nameWidth = 200;
const lineWidth = 20;
const entryHeight = 40 + 3; // height: 40, padding 2 + 1
const borderColor = '#3A58B7';
const borderColorVictory = '#FF7F00';
const scoreColorLose = '#393C43';

const useStyles = createUseStyles({
  entryBox: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    padding: props => `${props.padding}px 0px`,
    position: 'relative',
    '&:nth-child(odd) $entryTailV': {
      bottom: 0
    },
    '&:nth-child(even) $entryTailV': {
      top: 0
    },
  },
  entryHead: {
    width: lineWidth,
    border: `1px solid ${borderColor}`,
  },
  entryTailH: {
    width: lineWidth,
    border: `1px solid ${borderColor}`,
  },
  entryTailV: {
    position: 'absolute',
    right : 0,
    height: props => props.padding + entryHeight,
    border: `1px solid ${borderColor}`,
    boxSizing: 'border-box',
  },
  entryNumber: {
    width: 20,
    textAlign: 'center',
    color: '#696C73',
  },
  firstEntry: {
    display: 'flex',
    border: `2px solid ${borderColor}`,
    borderBottom: `1px solid ${borderColor}`,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  secondEntry: {
    display: 'flex',
    border: `2px solid ${borderColor}`,
    borderTop: `1px solid ${borderColor}`,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  victoryBorder: {
    borderColor: borderColorVictory,
  },
  entryNameBox: {
    display: 'flex',
    width: nameWidth,
    height: 40,
    padding: 5,
    boxSizing: 'border-box',
    background: '#29292C',
  },
  entryNameBoxVictory: {
    borderRightColor: borderColor,
    background: borderColor,
  },
  entrySeed: {
    lineHeight: '30px',
    width: 20,
    marginRight: 5,
    textAlign: 'center',
    color: '#1A3897',
  },
  entryName: {
    lineHeight: '30px',
    width: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  entryVictoryCount: {
    width: 30,
    height: 40,
    padding: 5,
    lineHeight: '30px',
    boxSizing: 'border-box',
    textAlign: 'center',
    borderLeft: `2px solid ${borderColor}`,
  },
  entryVictory: {
    borderColor: props => props.finalRound && borderColorVictory,
    background: props => props.finalRound ? borderColorVictory : borderColor,
  },
  entryLose: {
    background: scoreColorLose,
  }
});

const EntryItem = ({ data, winnerSeed, firstRound, finalRound }) => {
  
  const [isHover, setHover] = useChangeHover();

  const { r } = data.id;
  const padding = Math.pow(2, r - 1) * (entryHeight + 20) - entryHeight;

  const classes = useStyles({ padding, finalRound });

  const victoryIndex = data.score[0] > data.score[1] ? 0 : 1;

  const isHoverVictoryFirst = isHover && data.seed[0] === winnerSeed;
  const isHoverVictorySecond = isHover && data.seed[1] === winnerSeed;
  const isFinalWinnerFirst = finalRound && victoryIndex === 0
  const isFinalWinnerSecond = finalRound && victoryIndex === 1;

  const handleMouseEnter = (e) => {
    if (Number(e.target.id) === winnerSeed) {
      setHover(true);
    }
  }

  const handleMouseLeave = (e) => {
    if (Number(e.target.id) === winnerSeed) {
      setHover(false);
    }
  }

  return (
    <div className={classes.entryBox}>
      { !firstRound && <div className={classes.entryHead} /> }
      <div className={classes.entryNumber}>{data.number}</div>
      <div>
        <div className={classNames(classes.firstEntry, isFinalWinnerFirst && classes.victoryBorder)}>
          <div id={data.seed[0]} className={classNames(classes.entryNameBox, isHoverVictoryFirst && classes.entryNameBoxVictory)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <span className={classes.entrySeed}>{data.seed[0]}</span>
            <span className={classes.entryName}>{data.participant[0].name}</span>
          </div>
          <div className={classNames(classes.entryVictoryCount, data.score[0] > data.score[1] ? classes.entryVictory : classes.entryLose)}>{data.score[0]}</div>
        </div>
        <div className={classNames(classes.secondEntry, isFinalWinnerSecond && classes.victoryBorder)}>
          <div id={data.seed[1]} className={classNames(classes.entryNameBox, isHoverVictorySecond && classes.entryNameBoxVictory)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <span className={classes.entrySeed}>{data.seed[1]}</span>
            <span className={classes.entryName}>{data.participant[1].name}</span>
          </div>
          <div className={classNames(classes.entryVictoryCount, data.score[0] < data.score[1] ? classes.entryVictory : classes.entryLose)}>{data.score[1]}</div>
        </div>
      </div>
      { !finalRound &&
        <>
          <div className={classes.entryTailH} />
          <div className={classes.entryTailV} />
        </>
      }
    </div>
  );
}

export default EntryItem;
