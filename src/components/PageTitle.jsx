import React from 'react';
import Breadcrumbs from './Breadcrumbs';

function PageTitle() {
    return(
        <>
            {/* Page Title */}
        <div className="page-title dark-background" data-aos="fade">
        <div className="heading">
            <div className="container">
            <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                <h1>Starter Page</h1>
                <p className="mb-0">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                </div>
            </div>
            </div>
        </div>
        <Breadcrumbs />

        </div>{/* End Page Title */}

        </>
    );
}

export default PageTitle;