import React from "react";

const Card = ({name, email, id}) => {
    return(
        <div className="tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}`} alt="robots" width={200} height={200}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;