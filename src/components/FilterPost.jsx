import React from 'react';
import Input from "./UI/input/Input";
import Select from "./UI/select/Select";

const FilterPost = (props) => {
    return (
        <div>
            <Input
                value={props.filtered.query}
                onChange={e => props.setFiltered({...props.filtered, query: e.target.value})}
                placeholder="searching..."/>
            <Select
                value={props.filtered.sort}
                onChange={selectedSort => props.setFiltered({...props.filtered, sort: selectedSort})}
                defaultValue="Sort"
                options={[
                    {value: "userName", name: "by user name"},
                    {value: "body", name: "by post text"}
                ]}
            />
        </div>
    );
};

export default FilterPost;