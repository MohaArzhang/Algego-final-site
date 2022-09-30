import { Helmet } from "react-helmet";

const SEO = (props) => {
    return (
        <Helmet>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <meta name='language' content={props.language}></meta>
            <link rel="canonical" href={props.link} />
        </Helmet>
    )
}

export default SEO