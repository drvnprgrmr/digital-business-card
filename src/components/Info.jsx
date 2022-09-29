import profileImg from "../assets/images/profile.jpg"
import "./Info.css"

const Info = () => {
    return (
        <div className="info">
            <img className="profile-img" src={profileImg} alt="my profile image" />
            <h3 className="info--name">Ibukun Ekunwe</h3>
            <h4 className="info--role">Backend Developer</h4>
            <div className="btn-container container">
                <a className="btn btn--email"><i className="fa-solid fa-envelope" /> Email </a>
                <a className="btn btn--linkedin"><i className="fa-brands fa-linkedin" />Linkedin </a>
            </div>
        </div>
    )
}


export default Info