import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import TopicListHeader from "../components/TopicListHeader";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

import {topics} from "../data";
import CardGrid from "@vkontakte/vkui/dist/components/CardGrid/CardGrid";
import Card from "@vkontakte/vkui/dist/components/Card/Card";
import Link from "@vkontakte/vkui/dist/components/Link/Link";


const TopicList = ({ id, go }) => (
    <Panel id={id}>
        <TopicListHeader go={go}/>

        <CardGrid>
            {topics.map((topic) => (
                <Div
                    key={topic.id}
                    onClick={()=> window.location.href=topic.link}
                >
                    <div style={{
                        backgroundImage: 'url("' + topic.img + '")',
                        backgroundPosition: 'center',
                        backgroundSize: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingBottom: '6px',
                        borderRadius: 10,
                        minHeight: 110,
                        marginTop: -10
                    }}
                    >
                        <Div><b>{topic.header}</b></Div>
                    </div>
                </Div>
            ))}
        </CardGrid>
    </Panel>
);


export default TopicList;
