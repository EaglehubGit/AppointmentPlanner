import React from "react";
import "./TileList.css"; // optional styling file

export const TileList = ({ data }) => {
  return (
    <div className="tile-list">
      {data && data.length > 0 ? (
        data.map((item, index) => (
          <div key={index} className="tile">
            {/* Render each property of the item */}
            {Object.entries(item).map(([key, value]) => (
              <p key={key}>
                <strong>{key}: </strong> {value}
              </p>
            ))}
          </div>
        ))
      ) : (
        <p>No items to display.</p>
      )}
    </div>
  );
};

export default TileList;

