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
import { user, logOut, AppContext } from "./AppContext.js";
import { uiReducer } from "../reducers/uiReducer.js";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
  logout
} from "../actions/uiActionCreators.js";


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user,
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
      ],
    };
    // this.login = this.login.bind(this);
    // this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
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

  // login(email, password) {
  //   console.log(email);
  //   this.setState({ user: { email, password, isLoggedIn: true } });
  // };

  // logOut() {
  //   this.setState({ user: { email: '', password: '', isLoggedIn: false } });
  // };

  markNotificationAsRead(id) {
    this.setState({ listNotifications: this.state.listNotifications.filter(notification => notification.id !== id) });
  }

  render() {
    const { user, listNotifications } = this.state;
    const { displayDrawer,
      isLoggedIn,
      displayNotificationDrawer,
      hideNotificationDrawer,
      login
    } = this.props;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
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
      <>
      {/* <AppContext.Provider value={this.state}> */}
        <Notifications 
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={displayNotificationDrawer}
          handleHideDrawer={hideNotificationDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
        /> 
        <header className="App-header">
          <Header />
        </header>
        <div className={`App-body ${css(styles.body)}`}>
          {isLoggedIn ? 
          <BodySectionWithMarginBottom title='Course list' children={
            <CourseList  listCourses={listCourses}/>
          }/> 
           : 
          <BodySectionWithMarginBottom title='Log in to continue' children={
            <Login login={login} />
          } />
          }
          <BodySection title='News from the School' children={<p>Some random news</p>}/>
        </div>
        <footer className={`App-footer ${css(styles.footer)}`}>
          <Footer />
        </footer>
      {/* </AppContext.Provider> */}
      </>
    );
  }
};


App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  // logOut: () => {},
  login: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  // logOut: PropTypes.func,
  login: PropTypes.func,
};


export const mapStateToProps = (state) => {
  // const newState = uiReducer(state, { type: 'default' });
  return {
    isLoggedIn: state.get("isUserLoggedIn"),
    displayDrawer: state.get("isNotificationDrawerVisible"),
  };
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest,
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
