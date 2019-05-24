import React, { FC } from 'react';
import { Query, QueryResult } from 'react-apollo';
import { ConversationQueries } from '../queries';
import { IConversation } from "./conversation/types";
import Conversation from './conversation';

const Home: FC = () => {
    return (
        <Query query={ConversationQueries.CONVERSATIONS}>
            {
                ({ loading, error, data }: QueryResult<any>) => {
                    if (loading) return <div>Loading...</div>;
                    if (error) {
                        console.log(error);
                        return <h2>ERROR!</h2>;
                    }

                    return (
                        data.getConversations.map((data: IConversation, index: number) => {
                            return (
                                <Conversation
                                    key={index}
                                    id={data.id}
                                    senderId={data.senderId}
                                    receiverId={data.receiverId}
                                    archived={data.archived}
                                    messages={data.messages}
                                />
                            )
                        })
                    )
                }
            }
        </Query>
    )
};

export default Home;