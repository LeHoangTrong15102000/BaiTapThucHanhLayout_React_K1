import React, { Component } from 'react';
import DataFilms from '../Data/DataFilms.json';

export default class RenderLoopExercise extends Component {
  // data để render ra giao diện
  // trước khi mà làm react thì phải dàn giao diện và layout trước sau đó đi vào code

  // Bước 1 : Xây dựng giao diện

  // Bước 2 : Xây dựng hàm render films ra giao diện
  // DataFilms nằm ngoài thì nó là biến toàn cục nên không sử dụng this

  renderFilms = () => {
    let contentFilms = DataFilms.map((film, index) => {
      return (
        <div className="col-3" key={index}>
          <div
            className="card text-white bg-primary"
            style={{ width: '200px' }}
          >
            <img
              style={{ width: '200px', height: '300px' }}
              className="card-img-top"
              src={film.hinhAnh}
              alt={film.tenPhim}
            />
            <div className="card-body">
              <h4 style={{ fontSize: '17px' }} className="card-title">
                {film.tenPhim}
              </h4>
              <p styl={{ fontSize: '13px' }} className="card-text">
                {film.moTa}
              </p>
            </div>
          </div>
        </div>
      );
    });

    return contentFilms;
  };
  render() {
    // biến thì phải khai báo ở bên trong chỉ có thuộc tính mới khai báo ở ngoài
    // Nên import file Json bên ngoài vào thay vì phải đưa vào trong Components

    return (
      // Tại vì nó chưa có nội dung nên để minHeight: 2000px, còn khi có nội dung rồi thì nó sẽ co giãn theo nội dung
      <div
        style={{
          backgroundImage: 'url(./background/avanger.jpg)',
          minHeight: '2000px',

          // maxWidth: '100%',
        }}
      >
        <div style={{ backgroundColor: 'rgba(0,0,0,.5)', minHeight: '2000px' }}>
          <nav
            className="navbar navbar-expand-sm navbar-dark"
            style={{ backgroundColor: 'rgba(87,83,149,0.8)' }}
          >
            <a className="navbar-brand" href="#">
              CYBERLEARN MOVIE
            </a>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="https://cyberlearn.vn"
                    id="dropdownId"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="#">
                      Action 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Action 2
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>

          <div className="container-fluid mt-5">
            <div className="row">{this.renderFilms()}</div>
          </div>
        </div>
      </div>
    );
  }
}
