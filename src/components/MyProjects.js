import React from 'react';
import PropTypes from 'prop-types';
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import Link from "@vkontakte/vkui/dist/components/Link/Link";
import CardScroll from "@vkontakte/vkui/dist/components/CardScroll/CardScroll";
import Card from "@vkontakte/vkui/dist/components/Card/Card";
import CardGrid from "@vkontakte/vkui/dist/components/CardGrid/CardGrid";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Icon16Add from "@vkontakte/icons/dist/16/add";
import InfoRow from "@vkontakte/vkui/dist/components/InfoRow/InfoRow";
import Banner from "@vkontakte/vkui/dist/components/Banner/Banner";

import Icon24DismissDark from '@vkontakte/icons/dist/24/dismiss_dark';
import Button from "@vkontakte/vkui/dist/components/Button/Button";


const MyProjects = props => (
    <Group separator="show"
           header={
        <Header>
            <b>Реализованные проекты</b>
        </Header>
    }>

        {props.projects.map((project) => (
            <Banner
                key={project.id}
                mode="image"
                imageTheme="light"
                size="m"
                header={<b>{project.header}</b>}
                subheader={
                    <span>
                        <b>
                            Моя роль: {project.role}
                        </b>
                        <br/>
                        <b>
                            Статус: {project.status}
                        </b>
                        <br/>
                        {project.description}

                    </span>
                }
                background={
                    <div
                        style={{
                            backgroundColor: '#ffffff',
                            backgroundImage: 'url("' + project.img + '")',
                            backgroundPosition: 'right bottom',
                            backgroundSize: '160%',
                            backgroundRepeat: 'no-repeat',
                        }}
                    />
                }
                actions={
                    <React.Fragment>
                        <Button mode="overlay_primary" size="l" href={project.code}>Исходный код</Button>
                        <Button mode="tertiary" size="l" href={project.demo}>Демо</Button>
                    </React.Fragment>
                }
            />
        ))}
    </Group>
);


export default MyProjects;
