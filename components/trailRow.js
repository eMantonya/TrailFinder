import currencyFormatter from "@/helpers/currencyFormatter";

const TrailRow = ({ trail, selectTrail }) => {
    return (
        <tr onClick={() => selectTrail(trail)}>
            <td>{trail.name}</td>
            <td>{trail.city}</td>
            <td>
                {`${trail.difficulty.length != 0 ? `${trail.difficulty}` : "Not defined"}`}
            </td>
            <td>
                {`${trail.rating != 0 ? `${trail.rating}` : "Not rated"}`}
            </td>
        </tr>
    );
};

export default TrailRow;
