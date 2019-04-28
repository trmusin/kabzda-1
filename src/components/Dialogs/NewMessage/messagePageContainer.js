import React from 'react';
import {addNewMessageActionCreate, updateNewMessageTextActionCreate} from './../../../redux/dialogs-reducer';
import MessagePage from '../NewMessage/messagePage';
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessageAction: () => {
            dispatch(addNewMessageActionCreate())
        },

        updateNewMessageAction: (message) => {
            dispatch(updateNewMessageTextActionCreate(message))
        }
    }
};

const MessagePageContainer = connect(mapStateToProps, mapDispatchToProps)(MessagePage);


export default MessagePageContainer;