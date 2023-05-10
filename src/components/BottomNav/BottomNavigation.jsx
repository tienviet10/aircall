import React from 'react';
import './BottomNavigation.css';
import { AiFillSetting } from 'react-icons/ai';
import {
  BsFillPersonFill,
  BsRecordCircle,
  BsTelephoneFill,
} from 'react-icons/bs';
import { CgMenuGridO } from 'react-icons/cg';

class BottomNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.setState({ activeIndex: index });
    this.props.handleTabChange(index);
  }

  render() {
    const { activeIndex } = this.state;
    return (
      <div className="bottom-nav">
        <div
          className={`bottom-nav-item ${activeIndex === 0 ? 'active' : ''}`}
          onClick={() => this.handleClick(0)}
        >
          <BsTelephoneFill size={20} />
        </div>
        <div
          className={`bottom-nav-item ${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => this.handleClick(1)}
        >
          <BsFillPersonFill />
        </div>
        <div
          className="bottom-nav-item bottom-nav-item--large"
          onClick={() => this.handleClick(2)}
        >
          <CgMenuGridO />
        </div>
        <div
          className={`bottom-nav-item ${activeIndex === 3 ? 'active' : ''}`}
          onClick={() => this.handleClick(3)}
        >
          <AiFillSetting />
        </div>
        <div
          className={`bottom-nav-item ${activeIndex === 4 ? 'active' : ''}`}
          onClick={() => this.handleClick(4)}
        >
          <BsRecordCircle />
        </div>
      </div>
    );
  }
}

export default BottomNavigation;
