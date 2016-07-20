import React from "react";
import {render} from "react-dom";

render(
	<div>
		<MobiscrollCalendar
			ref="calendar"
			theme="mobiscroll"
			display="bottom"
			calendarScroll="vertical"
			placeholder="Please Select..."
			anchor=""
		/>
	</div>
	, document.getElementById ('mobi')
);