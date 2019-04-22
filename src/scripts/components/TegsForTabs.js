import React from "react";
import Input from "./Input";

const TegsForTabs = props => {
    return (
        <Input
            title="Ссылка на сайт"
            name="linkTabs"
            type="text"
            value={this.state.linkTabs}
            placeholder="Вставьте ссылку на сайт"
            onChange={this.addLinkTabs}
        />
    );
};

export default TegsForTabs;
