import React from "react";

function ConselorItems(props) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <img src="https://images.unsplash.com/photo-1640057730815-8d4014138e88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" className="img-fluid conselor-image" alt="" />
            <h3 className="conselor-name mt-3">Edward Naduart</h3>
            <p className="conselor-position">Psikolog • Blogger</p>
        </div>
    );
}

export default ConselorItems;