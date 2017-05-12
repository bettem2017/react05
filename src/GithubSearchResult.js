/**
 * Created by Walter on 2017/5/12.
 */
import React from 'react';
import {ListGroup} from "react-bootstrap";
import GithubSearchResultItem from "./GithubSearchResultItem";

class GithubSearchResult extends React.Component {


    render() {

        const { keyword, loading, items, handleClick} = this.props;

        return (
            <div>
                { !keyword && <p>No Keyword Input</p>}

                { loading === true && keyword!=='' && <p>Loading result of '{keyword}'...</p>}

                { items && items.length>0 && <ListGroup>{items.map((item, index) => <GithubSearchResultItem key={index} {...item} handleClick={()=>{handleClick(index)}}/>)}</ListGroup>}

                { keyword!=='' && loading === false && items && items.length === 0 && <p>No Result</p>}
            </div>
        );


    }
}

export default GithubSearchResult;