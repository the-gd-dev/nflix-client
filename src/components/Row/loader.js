import React from 'react'
import ContentLoader from "react-content-loader"

const loader = ({large}) => {
    return (
        <ContentLoader
            height={large ? 250 : 150}
            width={large ? 230 : 300}
            backgroundColor="rgb(10, 10, 10)"
            foregroundColor="rgb(0 0 0)"
        >
            <rect width={large ? 200 : 350} height={large ? 250 : 150} />
        </ContentLoader>
    );
}

export default loader;