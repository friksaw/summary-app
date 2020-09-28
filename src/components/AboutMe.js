import React from 'react';

import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import InfoRow from "@vkontakte/vkui/dist/components/InfoRow/InfoRow";
import Link from "@vkontakte/vkui/dist/components/Link/Link";

import Icon16Add from '@vkontakte/icons/dist/16/add';

import {changeBDAsync, selectBD} from '../redux/bdSlice';
import {useDispatch, useSelector} from "react-redux";
import Button from "@vkontakte/vkui/dist/components/Button/Button";


const AboutMe = ({ id, go, aboutMe }) => {
    const bd = useSelector(selectBD);
    const dispatch = useDispatch();

    dispatch(changeBDAsync());

    return (
        <Group>
            <Header><b>{aboutMe.name}</b></Header>
            <Header style={{marginTop: -20, color: "grey"}}><b>{aboutMe.vacancy}</b></Header>
            <Cell multiline>
                <InfoRow header="Жизненная цель">
                    {aboutMe.liveGoal}
                </InfoRow>
            </Cell>
            <Cell>
                <InfoRow header="Текущее место жительства">
                    {aboutMe.city}, {aboutMe.index}
                </InfoRow>
            </Cell>
            <Cell multiline>
                <InfoRow header="Дата рождения">
                    20.02.2004, {bd.bd} лет
                </InfoRow>
            </Cell>
            <Cell multiline>
                <InfoRow header="Знания">
                    {aboutMe.knowledge.map((knowledge) => (
                        <Button mode="tertiary" size="l" style={{marginLeft: -14}}>{knowledge}</Button>
                    ))}
                </InfoRow>
            </Cell>
            <Cell multiline>
                <InfoRow header="Опыт работы">
                    {aboutMe.workExperience}
                </InfoRow>
            </Cell>

            <Cell>
                <InfoRow header="Социальные сети и сервисы">
                    {aboutMe.links.map((link) => (
                        <Cell
                        key={link.id}
                        before={<Icon16Add />}
                        mode="add"
                        >
                            <Link href={link.link}>{link.name}</Link>
                        </Cell>
                    ))}
                </InfoRow>
            </Cell>
        </Group>
    )
};


export default AboutMe;
