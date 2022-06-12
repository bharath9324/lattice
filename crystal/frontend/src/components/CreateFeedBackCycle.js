import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Collapse } from "@material-ui/core";

export default class CreateFeedBackCycle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      companyId: "",
      cycleDate: "",
      cycleName: ""

    };

    this.handleCompanyTextFieldChange = this.handleCompanyTextFieldChange.bind(this);
    this.handleCycleDateTextFieldChange = this.handleCycleDateTextFieldChange.bind(this);
    this.handleCycleNameTextFieldChange = this.handleCycleNameTextFieldChange.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
  }

  sendRequest() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        company: this.state.companyId,
        cycle_date: this.state.cycleDate,
        cycle_name: this.state.cycleName
      }),
    };
    fetch("/api/feedbackcycle/", requestOptions);
  }

  handleCompanyTextFieldChange(e) {
    this.setState({companyId: e.target.value});
  }

  handleCycleDateTextFieldChange(e) {
    this.setState({cycleDate: e.target.value});
  }

  handleCycleNameTextFieldChange(e) {
    this.setState({cycleName: e.target.value});
  }

  createButtons() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Button
            color="primary"
            variant="contained"
            onClick={this.sendRequest}
          >
            Create Feedback Cycle
          </Button>
        </Grid>
        <Grid item xs={12} align="center">
          <Button color="secondary" variant="contained" to="/" component={Link}>
            Back
          </Button>
        </Grid>
      </Grid>
    );
  }

  render() {
    return (
      <Grid container spacing={10}>
        <Grid item xs={12} align="center">
          <Typography component="h4" variant="h4">
            Create Feedback Cycle
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <FormControl>
            <TextField
              required={true}
              type="text"
              onChange={this.handleCompanyTextFieldChange}
            />
            <FormHelperText>
              <div align="center">Company Id</div>
            </FormHelperText>
            <TextField
              required={true}
              type="text"
              onChange={this.handleCycleDateTextFieldChange}
            />
            <FormHelperText>
              <div align="center">Cycle Date</div>
            </FormHelperText>
            <TextField
              required={true}
              type="text"
              onChange={this.handleCycleNameTextFieldChange}
            />
            <FormHelperText>
              <div align="center">Cycle Name</div>
            </FormHelperText>
          </FormControl>
        </Grid>
        {this.createButtons()}
      </Grid>
    );
  }
}