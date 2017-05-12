/**
 * Created by Walter on 2017/5/12.
 */
import React from 'react';
import {Col, Row, Thumbnail} from "react-bootstrap";

class GithubSingle extends React.Component {


    render() {

        const {id} = this.props;
        if(!id) {
            return (
                <p>Nothing</p>
            );
        }

        const {name, full_name, owner, description, html_url} = this.props;

        const {avatar_url} = owner;

        return (
            <Row>
                <Col md={6} mdOffset={3}>
                    <Thumbnail src={avatar_url} alt={name}>
                        <a href={html_url} target="_blank"><h5>{full_name}</h5></a>
                        <p>{description}</p>
                    </Thumbnail>
                </Col>
            </Row>

        );

    }

}

export default GithubSingle;