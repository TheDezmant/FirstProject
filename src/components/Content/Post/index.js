import React from "react";
import StyledPost from "./units";
import { Head } from "./units";

const Post = ({ title, id, body }) => {
    return (
        <StyledPost>
            <Head>
                <h1>{title}</h1>
                <h3>{id}</h3>
            </Head>
            <div>
                <h2>{body}</h2>
            </div>
        </StyledPost>
    );
};

export default Post;
