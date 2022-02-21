import React, { Component } from 'react'

export default class DataBind extends Component {

    state = {
        isLogin: false,
    }


    printMessage = () => {
        if(this.state.isLogin) {
            return <h1>Welcome Le Hoang Trong</h1>
        }

        return ;
    }

    handleLogin = () => {
        this.setState({
            isLogin: true,
        })        
    }

    // Chỉ có state thay đổi thì giao diện nó mới load lại thôi
  render() {
    return (
      <div>
        <button onClick={this.handleLogin}>Đăng Nhập</button>
        {this.printMessage()}
      </div>
    )
  }
}
