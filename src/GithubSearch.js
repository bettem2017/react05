/**
 * Created by Walter on 2017/5/12.
 */
import React from 'react';
import axios from 'axios';
import {Col, Panel, Row} from "react-bootstrap";
import GithubSearchInputBar from "./GithubSearchInputBar";
import GithubSearchResult from "./GithubSearchResult";
import GithubSingle from "./GithubSingle";

class GithubSearch extends React.Component {


    constructor() {
        super();
        this.state = {
            items: [],
            currentItem: null,
            loading: false,
            keyword: 'react',
            error: null
        };
        this.searchFromGithub = this.searchFromGithub.bind(this);
        this.handleKeywordChange = this.handleKeywordChange.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    componentWillMount() {
        this.searchFromGithub();
    }

    searchFromGithub() {

        this.setState({
            loading: true
        });

        const url = 'https://api.github.com/search/repositories';
        const self = this;
        axios.get(url, {
            params: {
                q: this.state.keyword,
                sort: 'stars',
                order: 'desc'
            }
        }).then(function (response) {

            const {status, statusText, data} = response;

            const { items } = data || {data: []};

            if(status === 200 && statusText === 'OK') {
                self.setState({
                    items: items,
                    currentItem: items[0],
                    loading: false
                });
            }

        }).catch(function (error) {
            self.setState({
                error: error,
                loading: false
            });
        });
    }

    handleKeywordChange(e) {
        this.setState({
            keyword: (e.target.value||'')
        });
        if(!this.state.keyword) {
            this.setState({
                items: []
            });
        }else {
            setTimeout(()=>{
                this.searchFromGithub();
            }, 1000);
        }

    }

    handleItemClick(id) {
        this.setState({
            currentItem: this.state.items[id]
        });
    }

    render() {

        return (
            <div>
                <Row>
                    <Col md={6}>
                        <GithubSearchInputBar {...this.state} handleChange={this.handleKeywordChange}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Panel header={`Result of ${this.state.keyword}`}>
                            <div className="fixedHeight">
                                <GithubSearchResult {...this.state} handleClick={this.handleItemClick}/>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={6}>
                        <GithubSingle {...this.state.currentItem}/>
                    </Col>

                </Row>
            </div>
        );

    }

}




export default GithubSearch;


