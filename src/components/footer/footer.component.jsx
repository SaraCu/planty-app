import React from "react";
import "./footer.styles.scss";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <a className="link" href="https://www.vecteezy.com/free-vector/free">
        Free Vectors by Vecteezy
      </a>
      <span className="text-muted"> &bull; </span>
      {thanks}
      <span className="text-muted"> &bull; </span>
      <div className="text-muted">
        Icons made by{" "}
        <a
          className="link"
          href="https://www.flaticon.com/authors/freepik"
          title="Freepik"
        >
          Freepik
        </a>{" "}
        from{" "}
        <a className="link" href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  </footer>
);

const thanks = (
  <span className="text-muted">
    Photos by{" "}
    <a
      className="link"
      href="https://unsplash.com/@renran?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
    >
      Ren Ran,
    </a>{" "}
    <a
      className="link"
      href="https://unsplash.com/@anniespratt?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
    >
      Annie Spratt,
    </a>{" "}
    <a
      className="link"
      href="https://unsplash.com/@sk3tch?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
    >
      Vadim L
    </a>{" "}
    on{" "}
    <a
      className="link"
      href="https://unsplash.com/s/photos/plants?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
    >
      Unsplash
    </a>
  </span>
);

export default Footer;
