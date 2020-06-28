import React from 'react';

class SimpleForm extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: '',
        gender:'',
        age: '',
      };
    }
  
    componentWillMount() {
      const { steps } = this.props;
      const { name, gender, age } = steps;
      this.setState({ name, gender, age });
    }
  
    render() {
      const { name, gender, age } = this.state;
  
      return (
        <div>
          <h3>Summary</h3>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{name.value}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{gender.value}</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>{age.value}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }



export default SimpleForm;  
  
  