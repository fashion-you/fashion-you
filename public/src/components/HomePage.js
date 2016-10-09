import React, {Component} from "react";
import {Link} from 'react-router';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>HomePage</h1>
        <Link to="/collocation">搭配</Link>
        <Link to="/communication">互动</Link>
        <Link to="/gossip">八卦</Link>
        <Link to="/makeups">美妆</Link>
        <Link to="/personPage">个人中心</Link>
        <Link to="/popularShare">热门分享</Link>
      </div>
    )
  }
}
