import React from 'react';
import {Dropdown} from 'semantic-ui-react'
import {Form} from 'semantic-ui-react'
import {Message} from 'semantic-ui-react'

import {
  DateInput,
} from 'semantic-ui-calendar-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends React.Component {

  handleChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value,
        error:false,
        success:false 
      });
    }
  }


  constructor(props){
    super(props);
    this.state = {
      date: "10-10-2019",
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
  }

  checkCitizenship = () => {

      if(this.state.documents.endsWith("yes")){
        this.setState({
          successMessage:"Congrats!! You have Indian Citizenship" ,
          success:true
        });
      }
      else {
        if(this.state.religion.endsWith("muslims")){
          this.setState({
            errorMessage:"It's not clear about your fate. You may get the Citizenship from the other process",
            error:true
          });
        }
        else{
          if(this.getDate(this.state.date) < 2015){
            if ( this.state.country === "pakistan" || this.state.country === "bangladesh" || this.state.country === "afghanistan"){
              this.setState({
                successMessage:"You will get Citizenship by 2021",
                success:true
              });
            }
            else {
              this.setState({
                successMessage:"You may get Citizenship but not through CAA",
                success:true
              });
            }

          } else {
            this.setState({
              successMessage:"You may get Citizenship but not through CAA.",
              success:true
            });
          }
        }
      }

  }

  getDate(str){
      return parseInt(str.substr(str.length-4,4))
  }
  
  render(){
  return (
    <div id = "app">
      <header id="header"><h1 id ="h1">CAA and NRC</h1></header>
      <main id = "main"> 
      <h3 id = "impact">How does CAA and NRC impact?</h3>
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
              Do you have <a href="https://www.google.com/search?q=documents+that+needs+to+be+shown+for+CAA&rlz=1C1CHBF_enIN793IN793&oq=docum&aqs=chrome.0.69i59j69i57j0l2j69i60l3j69i65.2143j0j4&sourceid=chrome&ie=UTF-8">Documents</a> to prove you Ancestor came to India before 1971?
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
            header='You are an illegal migrant!!'
            list={
                [this.state.errorMessage]
              }
          />

          <Message
            success
            // header={this.state.successMessage}
            header = "Congrats!!"
            list={
              [this.state.successMessage]
            }
          />
          <Form.Button content='submit'/>
          {/* Submit</Form.Button> */}
      </Form>
      </main>
      <h4>Got some feedback or correction, Use this link</h4>

      <footer id="footer">
        <div class = "footer-item">
          Made with <span style={{color: "#e25555"}}>&#9829;</span> in India
        </div>
        <div class = "footer-item" style={{color: "#e25555"}}>
          Some info presented might be incomplete and wrong, Please consider a lawyer for more details.
        </div>
      </footer>
    </div>
  );
  }

}

export default App;
