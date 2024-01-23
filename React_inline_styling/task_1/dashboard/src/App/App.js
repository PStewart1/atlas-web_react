import React from "react";
// import "./App.css";
import Header from "../Header/Header.js";
import Login from "../Login/Login.js";
import Footer from "../Footer/Footer.js";
import Notifications from "../Notifications/Notifications.js";
import CourseList from "../CourseList/CourseList.js";
import PropTypes from 'prop-types';
import { getLatestNotification } from "../utils/utils.js";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom.js";
import BodySection from "../BodySection/BodySection.js";
import { StyleSheet, css } from 'aphrodite';

class App extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      const { logOut } = this.props;
      logOut();
    }
  };
  render() {
    const { isLoggedIn } = this.props;
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
      CourseListContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      },
    
      th: {
        border: '1px solid grey',
        borderCollapse: 'collapse',
      }
    });

    return (
      <React.Fragment>
      <Notifications listNotifications={listNotifications}/> 
      <div className="App">
        <Header />
        {isLoggedIn ? 
        <BodySectionWithMarginBottom title='Course list' children={
          <CourseList className={css(styles.CourseListContainer, styles.th)} listCourses={listCourses}/>
        }/> 
        :
        <BodySectionWithMarginBottom title='Log in to continue' children={<Login/>} />
        }
        <BodySection title='News from the School' children={<p>Some random news</p>}/>
        <Footer />
      </div>
      </React.Fragment>
    );
}};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};
App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};



export default App;
