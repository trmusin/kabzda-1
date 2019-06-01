import React from 'react';
import Profile from "./Profile/profile";
import * as axios from "axios/index";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";



class ProfileContainer extends React.Component {  debugger

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId=2;
        }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/'+ userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    render(){
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        profile: state.profilePage.profile
    }
}

export default   connect(mapStateToProps,
    {setUserProfile
    })(withRouter(ProfileContainer));