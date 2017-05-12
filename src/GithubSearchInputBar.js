/**
 * Created by Walter on 2017/5/12.
 */
import React from 'react';
import {ControlLabel, FormControl, FormGroup} from "react-bootstrap";

class GithubSearchInputBar extends React.Component {

    render() {

        const {keyword} = this.props;

        return (
            <FormGroup>
                <ControlLabel>搜索关键字</ControlLabel>
                <FormControl
                    type="text"
                    value={keyword}
                    placeholder="搜索关键字"
                    onChange={this.props.handleChange}
                />
            </FormGroup>
        );

    }


}

export default GithubSearchInputBar;