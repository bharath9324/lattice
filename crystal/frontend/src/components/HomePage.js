import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CreateCompany from "./CreateCompany";
import CreateFeedBackCycle from "./CreateFeedBackCycle";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.createButtons = this.createButtons.bind(this);
  }

  createButtons() {
      return (
        <Grid container spacing={10} pt={3}>
          <Grid item xs={12} align="center">
            <Button color="secondary" variant="contained" to="/create-company" component={Link}>
              Create Company
            </Button>
          </Grid>
          <Grid item xs={12} align="center">
            <Button color="secondary" variant="contained" to="/create-feedback-cycle" component={Link}>
              Create Feedback Cycle
            </Button>
          </Grid>
        </Grid>
      )
  }

  render() {
    return (
      <Router>  
        <Routes>
          <Route exact path="/" element={this.createButtons()}/>
          <Route exact path="/create-company" element={<CreateCompany/>}/>
          <Route exact path="/create-feedback-cycle" element={<CreateFeedBackCycle/>}/>
        </Routes>
      </Router>
      
    );
  }
}