import React from 'react';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {IOS, platform} from "@vkontakte/vkui";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";


const osName = platform();

const TopicListHeader = ({ go }) => (
    <PanelHeader
        left={<PanelHeaderButton onClick={go} data-to="home">
            {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
        </PanelHeaderButton>}
        style={{
            marginBottom: 22
        }}
    >
        Недавно изученное
    </PanelHeader>
);


export default TopicListHeader;