import React from 'react';
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import CardScroll from "@vkontakte/vkui/dist/components/CardScroll/CardScroll";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import CellButton from "@vkontakte/vkui/dist/components/CellButton/CellButton";


const TopicsScroll = ({ go, topics }) => (
    <Group separator="show"
           header={
                <Header
                    aside={
                        <CellButton
                            onClick={go}
                            data-to="topic-list"
                        >
                            Смотреть все
                        </CellButton>
                    }
                    subtitle="Конспекты и осмысления"
                    style={{
                        marginBottom: -10
                    }}
                >
                    <b>Недавно изученное</b>
                </Header>
            }>
        <CardScroll>
            {topics.map((topic) => (
                <Div
                    key={topic.id}
                    style={{
                        marginBottom: -10,
                        marginLeft: -11,
                        marginRight: -11,
                    }}
                    onClick={()=> window.location.href=topic.link}
                >
                    <div style={{
                        backgroundImage: 'url("' + topic.img + '")',
                        height: 100,
                        width: 140,
                        backgroundPosition: 'center',
                        backgroundSize: '105%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingBottom: '6px',
                        borderRadius: 10
                        }}
                    >
                        <Div>
                            <b>
                                {topic.header}
                            </b>
                        </Div>
                    </div>
                </Div>
            ))}
        </CardScroll>
    </Group>
);


export default TopicsScroll;
