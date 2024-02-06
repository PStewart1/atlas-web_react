import React from "react";
import Header from "../Header/Header.js";
import Login from "../Login/Login.js";
import Footer from "../Footer/Footer.js";
import Notifications from "../Notifications/Notifications.js";
import CourseList from "../CourseList/CourseList.js";
import { getLatestNotification } from "../utils/utils.js";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom.js";
import BodySection from "../BodySection/BodySection.js";
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from "./AppContext.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      },
      logOut: () => this.logOut()
    };
    this.login = this.login.bind(this);
    this.logOut = this.logOut.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  };

  handleKeydown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      const { logOut } = this.state;
      logOut();
    }
  };

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  };

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  };

  login(email, password) {
    this.setState({ user: { email, password, isLoggedIn: true } });
  };

  logOut() {
    this.setState({ user: { email: '', password: '', isLoggedIn: false } });
  };

  render() {
    const { displayDrawer, user, logOut } = this.state;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
    ];

    const styles = StyleSheet.create({
      body: {
        margin: '0px',
        height: '500px',
        padding: '2% 3%',
      },
      footer: {
        textAlign: 'center',
        fontStyle: 'italic',
        borderTop: 'solid #e0354b',
        bottom: '0',
        position: 'fixed',
        width: '100%',
      },
    });

    return (
      <AppContext.Provider value={this.state}>
        <Notifications 
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        /> 
        <header className="App-header">
          <Header />
        </header>
        <div className={`App-body ${css(styles.body)}`}>
          {user.isLoggedIn ? 
          <BodySectionWithMarginBottom title='Course list' children={
            <CourseList  listCourses={listCourses}/>
          }/> 
           : 
          <BodySectionWithMarginBottom title='Log in to continue' children={
            <Login login={this.login} />
          } />
          }
          <BodySection title='News from the School' children={<p>Some random news</p>}/>
        </div>
        <footer className={`App-footer ${css(styles.footer)}`}>
          <Footer />
        </footer>
      </AppContext.Provider>
    );
}};

export default App;
