/**
 * Created by Walter on 2017/5/12.
 */
import React from 'react';
import {Badge, Image, ListGroupItem} from "react-bootstrap";


class GithubSearchResultItem extends React.Component {

    render() {

        const {name, full_name, stargazers_count, owner } = this.props;

        const { avatar_url } = owner;

        return (
            <ListGroupItem onClick={this.props.handleClick}>
                <Image src={avatar_url} width={20} alt={name} circle/>&nbsp;
                {name}/{full_name}&nbsp;<Badge bsStyle="primary">{stargazers_count}</Badge>
            </ListGroupItem>
        );
    }

}

export default GithubSearchResultItem;