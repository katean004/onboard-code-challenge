import React, { Component } from "react";
import "./User.css";
import logo from "./assets/onboard_logo.svg";
import instagram from "./assets/instagram.svg";
import linkedin from "./assets/linkedin.svg";
import twitter from "./assets/twitter.svg";
import poweredBy from "./assets/powered_by_onboard.svg";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      loading: true
    };
  }

  componentDidMount() {
    const data = {
      id: 5,
      profile: {
        id: 5,
        linkedin_url: "https://www.linkedin.com/company/onboardio/",
        twitter_url: "https://www.twitter.com/onboardio/",
        instagram_url: "https://www.instagram.com/onboardio/",
        website_url: "https://onboard.io",
        bio: "This is my tagline.",
        job_title: "Title"
      },
      avatar: "https://assets.onboard.io/assets/a/5/5/fswnuakkcn.jpg",
      first_name: "John",
      last_name: "Smith",
      name: "John Smith",
      created_at: "2020-10-01T19:40:40Z"
    };

    this.setState({ userData: data, loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <h1>loading...</h1>
        ) : (
          <div className="User">
            {/* Onboard logo */}
            <a
              href={this.state.userData.profile.website_url}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="User-onboard-logo"
                src={logo}
                alt="onboard logo"
              />
            </a>
            {/* User info */}
            <div className="User-info">
              <img
                className="User-img"
                src={this.state.userData.avatar}
                alt="profile avatar"
              />
              <div className="User-text">
                <h1 className="User-name">
                  Hey, I'm {this.state.userData.name}!
                </h1>
                <h3 className="User-bio">{this.state.userData.profile.bio}</h3>
              </div>
            </div>
            {/* User social media */}
            <div className="User-socials">
              <a
                href={this.state.userData.profile.twitter_url}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="User-social-icon"
                  src={twitter}
                  alt="twitter icon"
                />
              </a>
              <a
                href={this.state.userData.profile.instagram_url}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="User-social-icon"
                  src={instagram}
                  alt="instagram icon"
                />
              </a>
              <a
                href={this.state.userData.profile.linkedin_url}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="User-social-icon"
                  src={linkedin}
                  alt="linkedin icon"
                />
              </a>
            </div>
            {/* Footer and logo */}
            <footer className="User-footer">
              <a
                href={this.state.userData.profile.website_url}
                target="_blank"
                rel="noreferrer"
              >
                <img src={poweredBy} alt="onboard logo" />
              </a>
            </footer>
          </div>
        )}
      </div>
    );
  }
}

export default User;
