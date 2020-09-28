import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import TopicListHeader from "../components/TopicListHeader";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

import {topics} from "../data";
import CardGrid from "@vkontakte/vkui/dist/components/CardGrid/CardGrid";
import Card from "@vkontakte/vkui/dist/components/Card/Card";


const TopicList = ({ topics }) => (
        <CardGrid>
            {topics.map((topic) => (
                <Card
                    key={topic.id}
                    size="l"
                    style={{
                        minHeight: 100,
                        marginBottom: 10,
                        marginLeft: 6,
                        marginRight: 60,
                    }}

                >
                    <Div

                    >
                        <div style={{
                            backgroundImage: 'url("' + topic.img + '")',
                            backgroundPosition: 'center',
                            backgroundSize: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingBottom: '6px',
                            borderRadius: 10,
                            marginBottom: -16,
                            marginTop: -16,
                            marginLeft: -16,
                            marginRight: -16,
                            minHeight: 100
                        }}
                        >
                            <Div><b>{topic.header}</b></Div>
                        </div>
                    </Div>
                </Card>
            ))}
        </CardGrid>
);


export default TopicList;
