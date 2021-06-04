import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex"
    },
    item: {
      border: "1px solid blue",
      flexBasis: "33%",
      maxWidth: "33%"
    },
    itemFlexGrow: {
      flexGrow: 0,
      border: "1px solid red"
    }
  }));

function Resume() {
    const classes = useStyles();

    return (
        <div>
            <h3> Ex 3: Normal Flexbox with 33% flex-basis and 33% max-width </h3>
            <div className={classes.container}>
                <div className={classes.item}>item 1</div>
                <div className={classes.item}> item 2 </div>
                <div className={classes.item}> item 3 </div>
            </div>
        </div>
    )
}

export default Resume
