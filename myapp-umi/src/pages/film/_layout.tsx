import React, { Component } from 'react'
import { Redirect } from 'umi'

export default class Film extends Component {
    render() {
        if (location.pathname === "/film" || location.pathname === "/film/") {
            return <Redirect to={"/film/nowpyling"}></Redirect>
        }
        // console.log(location.pathname)

        return (
            <div>
                Film
                <div style={{ "background": "orange", height: "200px" }}>轮播图</div>
                {this.props.children}
            </div>
        )
    }


}
