import React, {useState} from 'react';
import Layout from './Layout';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { NavLink } from "react-router-dom";

const RoadWays = () => {
    const [isTrue, setTrue] = useState(false)
    return(
        <Query query={gql`{categories{Mode_of_transportaion,name,description,picture{url}}}`}>
            {({loading, error, data}) => {
                if(loading) return <p>Loading...</p>;
                if(error) return <p>Error</p>;
                return(
                <Layout>
                    <div>
                    <h1>Road Ways</h1>
                    {data.categories.map((val,i) => {
                          if(val.Mode_of_transportaion === "Road_ways"){
                           return <tbody key={i}>
                            <tr><td><NavLink onClick={
                            () => {
                                setTrue(true);
                            }
                            }>Name: {val.name}</NavLink></td></tr>
                            {isTrue === true && <div>
                                {/* <tr><td>Name: {val.name}</td></tr> */}
                            <tr><td>Mode of transportation : {val.Mode_of_transportaion}</td></tr>
                            <tr><td>Description : {val.Mode_of_transportaion}</td></tr>
                            <tr>
                                <td>
                                    <img 
                                        style={{width:300,height:300}}
                                        src={'http://localhost:1337'+`${val.picture.url}`} 
                                        alt="crap"
                                     />
                                </td>
                            </tr>
                            </div>}
                            <hr/>
                        </tbody>
                        }
                        })}
                    </div>                     
                </Layout>
                )
            }}
        </Query> 
    )
}

export default RoadWays;