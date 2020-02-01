import React from "react";
import md5 from "md5";

const BadgeListItem = props => {
  const email = props.badge.email;
  const hash = md5(email);
  return (
    <article className="badges__article">
      <figure className="badges__figure">
        <img
          src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
          alt={props.badge.firstName + " " + props.badge.lastName}
        />
      </figure>

      <div>
        <h4 className="font-weight-bold">
          {props.badge.firstName} {props.badge.lastName}
        </h4>
        <div>
          <span className="span-icons">
            <i className="fa fa-twitter"></i>
          </span>
          <span className="badges__ancla-twitter">@{props.badge.twitter}</span>
        </div>
        <p className="mb-0">{props.badge.jobTitle}</p>
      </div>
    </article>
  );
};

export default BadgeListItem;
