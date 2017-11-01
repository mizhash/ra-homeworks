'use strict';

function Stars({count}) {
  if (!count || count < 1 || count > 5) {
    return null;
  }

  let stars = new Array(count).fill(null);
  stars = stars.map((item, i) => <li key={i}><Star /></li>);
  return (
      <ul className="card-body-stars u-clearfix">
        {stars}
      </ul>
  );
}

Stars.defaultProps = {
  count: 0
};
