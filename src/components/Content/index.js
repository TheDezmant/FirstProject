import React, { useState, useEffect } from "react";
import Increment from "../Increment";
import Sum from "../Sum";
import Menu from "./Menu";
import { StyledContent } from "./units";
import Post from "./Post";

const Content = () => {
    const [selectedItem, setSelectedItem] = useState(1);
    const [addData, setAddData] = useState([]);

    let postElement =
        addData.length !== 0
            ? addData.filter((_, i) => i < 40).map((p) => <Post title={p.title} id={p.id} body={p.body} />)
            : "Идёт загрузка!";

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => setAddData(json));
    }, []);

    return (
        <StyledContent>
            <Menu onChange={(i) => setSelectedItem(i)} />
            <Increment />
            {selectedItem === 1 && <Sum />}
            {postElement}
        </StyledContent>
    );
};
export default Content;
