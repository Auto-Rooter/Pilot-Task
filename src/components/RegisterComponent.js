import React from 'react';
import '../assets/css/register.css';

class RegisterComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
        firstNameError: '',
        lastNameError: '',
        emailError: '',
        passwordError: '',
        confirmError: ''
      };
    }
  
    handleFirstNameChange = event => {
      this.setState({ firstName: event.target.value }, () => {
        this.validateFirstName();
      });
    };

    handleLastNameChange = event => {
        this.setState({ lastName: event.target.value }, () => {
          this.validateLastName();
        });
      };
  
    handleEmailChange = event => {
      this.setState({ email: event.target.value }, () => {
        this.validateEmail();
      });
    };
  
    handlePasswordChange = event => {
        this.setState({ password: event.target.value }, () => {
          this.validatePassword();
        });
      };

    handlePasswordConfirmChange = event => {
        this.setState({ passwordConfirm: event.target.value }, () => {
            this.validatePasswordConfirm();
          });
      };
  
      
    validateFirstName = () => {
      const { firstName } = this.state;
      this.setState({
        firstNameError:
        firstName.length > 3 ? null : 'First Name must be longer than 3 characters'
      });
    }


    validateLastName = () => {
        const { lastName } = this.state;
        this.setState({
          lastNameError:
          lastName.length > 3 ? null : 'Last Name must be longer than 3 characters'
        });
      }

 
  
    validateEmail = () => {
      const { email } = this.state;
      const emailRe = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 

      this.setState({
        emailError: emailRe.test(email) ? '' : 'Email must be valid'
      });
    }

    validatePassword = () => {
        const { password } = this.state;
        const passRe = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        this.setState({
          passwordError:
          passRe.test(password) ? null : `Password must be between 6 to 20 characters which \n contain at least one numeric digit, one uppercase and one lowercase letter`
        });
      }

    validatePasswordConfirm = () => {
        const { password, passwordConfirm } = this.state;
        this.setState({
        confirmError: passwordConfirm === password ? null : "Passwords need to be match"
        });
      }
  
    handleSubmit = event => {
      event.preventDefault();
      const { firstNameError, lastNameError, emailError , passwordError, confirmError, firstName, lastName, email} = this.state;

      if(firstNameError || lastNameError || emailError || passwordError || confirmError ){
        alert("Your Information is not Valid");
      }
      else{
          alert(`Your Information : \n 
                First Name: ${firstName} \n 
                Last Name: ${lastName} \n 
                Email: ${email} \n
                Password: 😁`);
            }
    };
    
  
    render() {
      return (

        <div className="card col-12 col-lg-4 login-card mt-5 mr-auto hv-center ">
            <form className="form p-4 " onSubmit={this.handleSubmit} >

             
                <div className="form-group text-left">
                        <label htmlFor="name">Full Name</label>
                        <div class="FullName">
                        <input type="firstName" 
                            className={`form-control ${this.state.firstNameError ? 'is-invalid' : ''} firstName mr-3`} 
                            id="firstname" 
                            placeholder="First Name" 
                            value={this.state.firstName}
                            onChange={this.handleFirstNameChange}
                            onBlur={this.validateFirstName}
                        />
                        


                        <input type="name" 
                        className={`form-control ${this.state.lastNameError ? 'is-invalid' : ''} LastNAme`} 
                        id="lastname" 
                        placeholder="Last Name" 
                        value={this.state.lastName}
                        onChange={this.handleLastNameChange}
                        onBlur={this.state.validateLastName}
                    />
                    <div className='invalid-feedback'>{this.state.firstNameError}</div>
                    <div className='invalid-feedback'>{this.state.lastNameError}</div>
                    </div>
                        
                
                </div>




                <div className="form-group text-left">
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                        className={`form-control ${this.state.emailError ? 'is-invalid' : ''}`}
                        id="email" 
                        placeholder="Enter Email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        onBlur={this.validateEmail} 
                    />
                <div className='invalid-feedback'>{this.state.emailError}</div>
                </div>




                <div className="form-group text-left">
                <label htmlFor="password">Password</label>
                <input type="password" 
                    className={`form-control ${this.state.passwordError ? 'is-invalid' : ''}`}
                    id="password" 
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    onBlur={this.validatePassword} 
                />
                <div className='invalid-feedback'>{this.state.passwordError}</div>
                </div>


                <div className="form-group text-left">
                <input type="password" 
                    className={`form-control ${this.state.confirmError ? 'is-invalid' : ''}`}
                    id="confirmPassword" 
                    placeholder="Confirm Password"
                    value={this.state.passwordConfirm} 
                    onChange={this.handlePasswordConfirmChange}
                    onBlur={this.validatePasswordConfirm} 
                />
                <div className='invalid-feedback'>{this.state.confirmError}</div>
                </div>

  

                  <button type='submit' className='btn btn-block mt-4 submit_btn'>
                   Sign up 
                  </button>
            </form>
            
        </div>
      );
    }
  }
  
  export default RegisterComponent