import React from 'react';

const MapingUser = ({ data, i }) =>
{
    console.log(i, data)
    return (
        <div>
            <th>{i}</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
        </div>
    );
};

export default MapingUser;