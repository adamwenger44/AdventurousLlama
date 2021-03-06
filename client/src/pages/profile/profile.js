import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Jumbotron, Card, CardTitle, CardText, CardGroup, CardBody
} from 'reactstrap';
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
const axios = require("axios");

const Profile = (props) => {
    const user = props.auth.user
    console.log(user);

    axios.get("/api/users/"+ user.id)
        .then(({ data }) => {

            console.log(data)
        })
        .catch(err => { if (err) throw err })

    return (
        <div className="llama">

            <Jumbotron fluid>
                <div className="row">
                    <div className="col-md-12">
                        <h6>Hello {user.name}</h6>
                        
                        <span className="avatar"><img src="/llama.png" alt="avatar" className="profilepic" /></span>
                    </div>

                </div>
            </Jumbotron>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-9">
                    <div className="p">
                        <br />
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <CardGroup>
                        <Card>
                            <CardBody>
                                <CardTitle><h5>Connections</h5></CardTitle>
                                <CardText>Billy</CardText>
                                <CardText>Sue </CardText>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardTitle><h5>My Events</h5></CardTitle>
                                <CardText>Caamp</CardText>
                                <CardText>Charlotte Symphony Orchestra</CardText>
                            </CardBody>
                        </Card>

                    </CardGroup>
                </div>
                <div className="col-md-1"></div>
            </div>

        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Profile);
