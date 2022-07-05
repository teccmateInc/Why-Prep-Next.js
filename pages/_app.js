import '../public/css/bootstrap.min.css';
import '../public/css/fontawesome.min.css';
import '../public/css/animate.min.css';
import '../public/css/flaticon.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../public/css/style.css';
import '../public/css/responsive.css';
import i18n from '../helpers/i18n'
import App from 'next/app';
import Head from 'next/head';
import GoTop from '../components/Layouts/GoTop';
import { wrapper } from '../redux/store';
import { changeFont } from '../helpers/changeFont';
import { extractRefererence } from '../helpers/extractReference';


class MyApp extends App {

    componentDidMount() {
        const current_lang = i18n.language
        changeFont(document, current_lang)
        extractRefererence(window)
    }

    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
        if (!ctx.res) {
            return {
                pageProps
            }
        }

        const cookie = ctx.req.headers.cookie
        if (!cookie || cookie === undefined) {
            ctx.res.setHeader('Set-Cookie', "lang=th")
            return {
                pageProps
            }
        }
        const lang = cookie.split('=')[1]
        i18n.changeLanguage(lang)
        return {
            pageProps
        }
    }

    render() {
        const { Component, pageProps } = this.props

        return (
            <React.Fragment>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <title>Prep - Commerce Solution</title>
                </Head>

                <Component {...pageProps} />

                {/* Go Top Button */}
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </React.Fragment>
        );
    }
}

export default wrapper.withRedux(MyApp)