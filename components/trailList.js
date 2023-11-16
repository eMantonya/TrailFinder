import { useState, useEffect } from "react";
import TrailRow from "./trailRow";

const TrailList = ({ selectTrail }) => {
    

    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Trails in your area
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>Difficulty</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {trailData.map(t => <TrailRow key={t.id} trail={t} selectTrail={selectTrail}/>)}
                </tbody>
            </table>
        </>
    );
};

    


export default TrailList;