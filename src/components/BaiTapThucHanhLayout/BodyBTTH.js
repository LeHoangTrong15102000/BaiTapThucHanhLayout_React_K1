import React, { Component } from 'react';
import BannerBTTH from './BannerBTTH';
import ItemBTTH from './ItemBTTH';

export default class BodyBTTH extends Component {
  render() {
    return <div>
        <BannerBTTH />
        <ItemBTTH />
    </div>;
  }
}
