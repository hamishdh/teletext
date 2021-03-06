import * as React from 'react';
import './sport-home.css';
import { Link } from 'react-router-dom';
import DoubleTextGenerator from '../../helpers/double-text';

export default class SportHome extends React.Component {
  render() {
    return (
      <div className="sport-container">
          <Link to="/303">
          <div className="option">
              <div className="dbl">
                {DoubleTextGenerator.CreateText('View Football Scores')}
              </div>
              <div className="dbl">
                {DoubleTextGenerator.CreateText('303', 'cyan')}
              </div>
            </div>
          </Link>
          <Link to="/324">
            <div className="option">
              <div className="dbl">
                {DoubleTextGenerator.CreateText('View Football Tables')}
              </div>
              <div className="dbl">
                {DoubleTextGenerator.CreateText('324', 'cyan')}
              </div>
            </div>
          </Link>
      </div>
    );
  }
}