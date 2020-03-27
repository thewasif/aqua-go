import React from "react";
import { connect } from "react-redux";
import Layout from "../components/Layout/";
import {
  Paper,
  Button,
  Select,
  ButtonGroup,
  FormControl,
  InputLabel,
  FormHelperText,
  Typography
} from "@material-ui/core";
import DailyStats from "../components/DailyStats";
import { Add, HistoryRounded } from "@material-ui/icons";
import CircularProgressBar from "../components/ProgressBar/CircularProgressBar";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changeCup = this.changeCup.bind(this);
    this.addCup = this.addCup.bind(this);
    this.revertCup = this.revertCup.bind(this);
  }
  changeCup(e) {
    this.props.change(e.target.value);
  }
  addCup() {
    let achievedTarget = this.props.achievedTarget;
    let dailyTarget = this.props.dailyTarget;
    let cup = this.props.cup;
    if (achievedTarget >= dailyTarget) {
      console.log("Target Achieved...!");
    } else {
      this.props.setAchievedTarget(achievedTarget + cup);
    }
  }
  revertCup() {
    let achievedTarget = this.props.achievedTarget;
    let cup = this.props.cup;
    if (achievedTarget <= 0) {
      console.log("What....?");
    } else {
      this.props.setAchievedTarget(achievedTarget - cup);
    }
  }
  render() {
    let cup = this.props.cup;
    let dailyTarget = this.props.dailyTarget;
    let achievedTarget = this.props.achievedTarget;
    let percentage = Math.floor((achievedTarget / dailyTarget) * 100);
    percentage =
      Math.floor((achievedTarget / dailyTarget) * 100) > 100 ? 100 : percentage;
    return (
      <Layout title="Home">
        <Paper
          elevation={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: 12,
            padding: 20,
            width: "85%"
          }}
        >
          <div>
            <CircularProgressBar
              percentage={percentage}
              sqSize={200}
              strokeWidth={20}
            />
          </div>

          <DailyStats remaining={achievedTarget} target={dailyTarget} />

          <ButtonGroup>
            <Button
              color="primary"
              size="large"
              style={{ marginTop: 10 }}
              onClick={this.addCup}
            >
              <Add /> Add
            </Button>
            <Button
              size="large"
              style={{ marginTop: 10 }}
              onClick={this.revertCup}
            >
              <HistoryRounded /> Revert
            </Button>
          </ButtonGroup>
        </Paper>

        <Paper
          elevation={4}
          style={{
            marginTop: 12,
            padding: 20,
            width: "85%"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Typography variant="subtitle">Switch Cup</Typography>
            <FormControl style={{ marginLeft: "auto" }}>
              <InputLabel>Amount</InputLabel>
              <Select defaultValue={cup} onChange={this.changeCup}>
                <option value={250}>250ml</option>
                <option value={300}>300ml</option>
                <option value={350}>350ml</option>
              </Select>
              <FormHelperText>mls per click</FormHelperText>
            </FormControl>
          </div>
        </Paper>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    change: val => dispatch({ type: "CHANGE", cup: val }),
    setAchievedTarget: val =>
      dispatch({ type: "SET_ACHIEVED_TARGET", achievedTarget: val })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
