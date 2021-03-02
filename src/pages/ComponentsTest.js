import React from 'react';

import Team from '../components/common-components/Team';

const ComponentsTest = () => {

    const team = {
        id: 123,
        name: "oreo",
        members: [
            {
                id: "123xcasdf",
                name: "John Stones"
            },
            {
                id: "123xcbsdf",
                name: "John Snow"
            }
        ],
        event: {
            id: 123,
            name: "Sackathon",
            problemStatements: [
                "Sack the most managers",
                "Expose the bald-fraud"
            ]
        },
        repoLink: "https://github.com/pranjaltimsina/fpl-statistaks",
        reviews:[
            {
                review_no: 1,
                scores:[
                    {
                        "Criteria A": 12 
                    },
                    {
                        "Criteria B": 32
                    }
                ]
            }
        ]
    }

    return(
        <>
            <Team isAdmin={true} isLeader={false} team={team} />
        </>
    )
}

export default ComponentsTest;