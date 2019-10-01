import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./styles/BadgesList.css";
import BadgeListItem from "./BadgeListItem";

function useSearchBadges(badge) {
  const [query, setQuery] = useState("");
  const [filteredBadges, setFilteredBadges] = useState(badge);

  useMemo(() => {
    let result = badge.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredBadges(result);
  }, [badge, query]);

  return { query, setQuery, filteredBadges };
}

function BadgeList(props) {
  const data = props.data;
  const { query, setQuery, filteredBadges } = useSearchBadges(data);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
        <h3>No badges were found</h3>
        <Link to="/badges/new" className="btn btn-primary">
          Create new badge
        </Link>
      </div>
    );
  }
  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      <ul>
        {filteredBadges.map(badge => {
          return (
            <li className="list-unstyled" key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <BadgeListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgeList;
