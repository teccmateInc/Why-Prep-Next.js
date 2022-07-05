import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import { withTranslation } from 'react-i18next'

class MainBanner extends Component {

    componentDidMount() {
        if (document.getElementById("main-video")) {
            const video = document.getElementById("main-video")
            video.load();
            video.play();
        }
    }

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({ isOpen: true })
    }


    render() {
        const { t } = this.props
        return (
            <React.Fragment>
                <div className="banner-section">
                    <div className="container">
                        <div className="row m-0 align-items-center">
                            <div className="col-lg-5 col-md-12 p-0">
                                <div className="hero-content">
                                    <h1>{t('mainbanner.main')}</h1>
                                    <p>{t('mainbanner.sub')}</p>

                                    <Link href="/sign-up">
                                        <a className="btn btn-primary">{t('mainbanner.button')}</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12 p-0 mt-md-4">
                                <div style={{ maxHeight: '600px', maxHeight: '600px'  }} className="hero-image">
                                    <video style={{ width: '100%', height: '100%',borderRadius: '20px' }} id="main-video" playsInline muted loop>
                                        <source src="/video/main/main-banner.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* If you want to change the video need to update below videoID */}
                <ModalVideo
                    channel='youtube'
                    isOpen={this.state.isOpen}
                    videoId='szuchBiLrEM'
                    onClose={() => this.setState({ isOpen: false })}
                />
            </React.Fragment >
        );
    }
}

export default withTranslation('home')(MainBanner);