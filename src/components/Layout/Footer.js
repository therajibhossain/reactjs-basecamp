import React from 'react';

const footer = ( props ) => (
<footer className="footer">
©   2016 - {new Date().getFullYear()} BaseCamp <span className="text-muted d-none d-sm-inline-block float-right">Crafted with <i className="mdi mdi-heart text-danger"></i> by Joy Saha</span>
</footer>
);

export default footer;
