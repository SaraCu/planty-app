import React, { Component } from "react";
import "./image-upload.styles.scss";
import { storage } from "../../firebase/firebase.utils";
import { getData } from "../../redux/items/items.data";

class ImageUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
    };

    getData().then((i) => i.forEach((it) => console.log(it)));
  }

  handleChange = (event) => {
    if (event.target.files[0]) {
      const image = event.target.files[0];
      this.setState({
        image: image,
      });
    }
  };

  handleClick = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
  };

  render() {
    return (
      <div className="image-input">
        <input type="file" onChange={this.handleChange.bind(this)}></input>
        <button onClick={this.handleClick.bind(this)}>Upload</button>
        <img src={this.state.url} alt="item"></img>
      </div>
    );
  }
}

export default ImageUpload;
