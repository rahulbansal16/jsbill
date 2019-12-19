import React from 'react';
import {Dropdown} from 'semantic-ui-react'
import {Form} from 'semantic-ui-react'
import {Message} from 'semantic-ui-react'

import {
  DateInput,
} from 'semantic-ui-calendar-react';

import 'semantic-ui-css/semantic.min.css';

import './App.css';
import _ from 'lodash'

class App extends React.Component {

  handleChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }


  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      religion:'',
      country:'',
      documents:'',
      error:false,
      errorMessage:'',
      success:false,
      successMessage:''
    }
    this.religionOptions = [
      {
        key: "Hindus",
        text: "Hindus",
        value: "hindus"
      },
      {
        key: "Muslims",
        text: "Muslims",
        value: "muslims"
      },
      {
        key: "Sikhs",
        text: "Sikhs",
        value: "sikhs"
      },
      {
        key: "Jains",
        text: "Jains",
        value: "jains"
      },
      {
        key: "Buddhists",
        text: "Buddhists",
        value: "buddhists"
      },
      {
        key: "Christians",
        text: "Christians",
        value: "christians"
      },
      {
        key: "Other",
        text: "Other",
        value: "other"
      }
    ]
    this.countryOptions = [
      {
        key: "Pakistan",
        text: "Pakistan",
        value: "pakistan"
      },
      {
        key: "Bangladesh",
        text: "Bangladesh",
        value: "bangladesh"
      },
      {
        key: "Afghanistan",
        text: "Afghanistan",
        value: "afghanistan"
      },
      {
        key: "India",
        text: "India",
        value: "india"
      },
      {
        key: "Other",
        text: "Other",
        value: "other"
      }
    ];
    this.yesOrNo = [
      {
        key: "Yes",
        text: "Yes",
        value: "yes"
      },
      {
        key: "No",
        text: "No",
        value: "no"
      }
    ];
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = () => {
    // if (this.)
    this.checkCitizenship();
    this.setState({
      error:true,
      success:true
    });
  }

  checkCitizenship = () => {

      if(this.state.documents.endsWith("yes")){
        this.setState({
          successMessage:"Congrats!! You are Indian",
          success:true
        });
      }
      else {
        if(this.state.religion.endsWith("muslim")){
          this.setState({
            errorMessage:"Oops!! You are an Illegal Immigrant",
            error:true
          });
        }
        else{
          // if(this.state.date.)
        }
      }

  }

  render(){
  return (
    <div>
      <header id="header">Impact of Cab and NRC </header>
      <main id = "main"> 
      <h1>Are you an Indian Citizen?</h1>
      <Form id = "form" error={this.state.error} success={this.state.success} onSubmit={this.onSubmit}>
          
          <Form.Field required>
            <label>
              What's your Religion?
            </label>
            <Dropdown
              placeholder='Religion'
              fluid
              name="religion"
              // multiple
              search
              selection
              value={this.state.religion}
              options={this.religionOptions}
              onChange={this.handleChange}
            />
          </Form.Field>

          <Form.Field required>
            <label>
              What's your origin Country?
            </label>
            <Dropdown
              required
              placeholder='Origin Country'
              fluid
              name="country"
              search
              selection
              value={this.state.country}
              options={this.countryOptions}
              onChange={this.handleChange}
            />
          </Form.Field>


          <Form.Field required>
            <label>
              When did you Migrated to India (only year matters)?
            </label>
            <DateInput
              name="date"
              closable
              hideMobileKeyboard
              startMode="year"
              placeholder="Date"
              value={this.state.date.toString()}
              // iconPosition="left"
              onChange={this.handleChange}
            />
          </Form.Field>
          
          <Form.Field required>
            <label>
              Do you have <a href="">Documents</a> to prove you Ancestor came to India before 1971?
            </label>
            <Dropdown
              placeholder='Documents'
              fluid
              name="documents"
              selection
              value={this.state.documents}
              options={this.yesOrNo}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Message
            error
            header='Could you check something!'
            list={[
              'That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.',
              ]}
          />

          <Message
            success
            header={this.state.successMessage}
            list={
              [this.state.successMessage]
            }
          />
          <Form.Button content='submit'/>
          {/* Submit</Form.Button> */}
      </Form>
      <div>You will get Indian Citizenship</div>
      <div></div>
      </main>
      <footer id="footer">Made with <span style={{color: "#e25555"}}>&#9829;</span> in India</footer>
    </div>
  );
  }

}

export default App;
