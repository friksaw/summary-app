import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';

import HomeHeader from "../components/HomeHeader";
import AboutMe from "../components/AboutMe";
import TopicsScroll from "../components/TopicsScroll";
import MyProjects from "../components/MyProjects";
import {topics, aboutMe, projects} from "../data";


const Home = ({ id, go }) => (
	<Panel id={id}>
		<HomeHeader />

		<TopicsScroll topics={topics} go={go}/>
		<AboutMe aboutMe={aboutMe}/>
		<MyProjects projects={projects}/>
	</Panel>
);


export default Home;
