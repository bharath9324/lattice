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

export default class CreateCompany extends Component {

  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
    };
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
  }

  sendRequest() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({name: this.state.companyName}),
    };
    fetch("/api/company/", requestOptions);
  }

  handleTextFieldChange(e) {
    this.setState({companyName: e.target.value});
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
            Create A Company
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
            Create a Company
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <FormControl>
            <TextField
              required={true}
              type="text"
              onChange={this.handleTextFieldChange}
            />
            <FormHelperText>
              <div align="center">Company Name</div>
            </FormHelperText>
          </FormControl>
        </Grid>
        {this.createButtons()}
      </Grid>
    );
  }
}