import currencyFormatter from "@/helpers/currencyFormatter";
import defaultPhoto from "@/public/default-photo.jpg";

const Trail = ({ trail }) => {
    return (
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <img className="img-fluid" 
                        src={trail.thumbnail || defaultPhoto}
                        alt="Trail Thumbnail"
                    /> 
                </div>
            </div>
            <div className="col-6">
                <div className="row mt-2">
                    <h5 className="col-12">{trail.name}</h5>
                </div>
                <div className="row">
                    <h3 className="col-12">{trail.city}</h3>
                 </div>
                <div className="row">
                    <h2 className="themeFontColor col-12">
                        {`${trail.difficulty.length != 0 ? `${trail.difficulty}` : "Not defined"}`}
                    </h2>
                </div>
                <div className="row">
                    <div className="col-12 mt-3">{trail.description}</div>
                </div>
            </div>
        </div>
    );
};

export default Trail;