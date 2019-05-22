import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import { Conversation } from '../queries';

const Home: React.FC = () => {
    return (
        <Query query={Conversation.CONVERSATIONS}>
            {
                ({ loading, error, data }: QueryResult<any>) => {
                    if (loading) return <div>Loading...</div>;
                    if (error) {
                        console.log(error);
                        return;
                    }

                    return (
                        data.getConvertions.map((data: object, index: number) => {
                            return <div>Hello</div>
                        })
                    )
                }
            }
        </Query>
    )
};

export default Home;