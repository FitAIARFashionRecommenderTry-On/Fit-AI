import React from 'react';

export const FavProducts = () => {
  return (
    <div>
      {/* Your Fav Departments */}
      <div className="margsize">
        <h2>Your favorite departments</h2>
        <a href="https://www.walmart.com/cp/electronics/3944?athcpid=f4afd4fd-9649-464d-928a-0d23ebfc357c&athpgid=AthenaHomepageDesktop&athznid=athenaModuleZone&athmtid=AthenaCategory&athtvid=2&athena=true">
          <div className="your-fav">
            <h3>Grocery</h3>
            <h3>Arts, Crafts &amp; Sewing</h3>
            <h3>Sports &amp; Outdoor</h3>
            <h3>Baby</h3>
            <h3>Movie &amp; TV Shows</h3>
            <h3>Beauty</h3>
          </div>
        </a>
      </div>
      <br /><br />
    </div>
  );
};
