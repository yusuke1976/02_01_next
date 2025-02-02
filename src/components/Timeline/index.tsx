import React from "react";
import styles from "./style.module.scss";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

const TimeLine = () => {
  return (
    <div className={styles.timeline}>
      <form>
      {/* <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        /> */}
        <textarea name="" id="" placeholder="本文を入力してください"></textarea>
        <Button size="large" variant="outlined">
          送信
        </Button>
      </form>
    </div>
  );
};

export default TimeLine;