import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    const imgUrl = require('../../components/images/footer.png');
    const footerStyle = {
    backgroundImage: 'url('+ imgUrl +')',
    backgroundSize: 'cover',
    height: '75px',
    };
    return (
      <div>
        <footer style={footerStyle} className="footer">
          <p>Created by Sean Bush</p>
        </footer>
      </div>
    );
  }
}
 export default Footer;
