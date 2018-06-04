import * as React from 'react';
import FormBuilder from 'react-formio/lib/components/FormBuilder';
import './App.css';
import 'formiojs/dist/formio.full.min.css'
// import { formexample } from './config';
import logo from './logo.svg';



class App extends React.Component<{}, {formSchema: any}> {
  constructor(props: any) {
    super(props);
    // this.state = { formSchema: {} };
  }

  public OnFormChange = (updatedSchema: any) => {
   // this.setState({ formSchema: updatedSchema});
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-sm-10">
              <FormBuilder form={{}} onChange={this.OnFormChange} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
