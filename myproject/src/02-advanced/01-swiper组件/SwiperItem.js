import React, { Component } from 'react'

export default class SwiperItem extends Component {
  render() {
    return (
      <div className="swiper-slide" >
      {/* swiper-slide的里面的内容  */}
        {this.props.children}
      </div>
    )
  }
}
