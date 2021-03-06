import React, { Component } from 'react';

class PageBannerContent extends Component {
    render() {

        let { pageTitle, pageCaption } = this.props;

        return (
            <div className="domain-banner">
                <div className="container">
                    <div className="page-title-content">
                        <h2>{pageTitle}</h2>
                        <p>{pageCaption}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageBannerContent;