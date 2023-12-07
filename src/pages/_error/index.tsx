/* ----------- libs ----------- */
import { useNavigate, useRouteError } from "react-router-dom";

/* --- components --- */
import AstroIllustration from "assets/astro_error.png";
import { Col, Image } from "react-bootstrap";

/* --- styles --- */
import styles from "Pages/_error/styles.module.scss";

export default function Error() {
    const navigate = useNavigate();
    const error = useRouteError() as any;
    return (
        <Col
            className={`${styles.errorContainer} d-flex flex-column flex-wrap justify-content-center align-items-center p-0 m-0`}
        >
            <Col
                className={`${styles.errorContent} col-11 col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-11 col-xs-11`}
            >
                <span className={styles.errorBadge}>Error</span>

                <p className={styles.errorStatusCode}>{error.statusText ?? error.message}</p>

                <Col className={styles.boxImg}>
                    <Image src={AstroIllustration} alt="Astro" width={86} height={86} />
                </Col>
            </Col>

            <Col className="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-11 col-xs-11 mt-3">
                <p style={{ color: "#546475" }} className="text-center mb-0">
                    Let's go{" "}
                    <a className={styles.linkBack} onClick={() => navigate(-1)}>
                        back
                    </a>
                </p>
            </Col>
        </Col >
    );
}
