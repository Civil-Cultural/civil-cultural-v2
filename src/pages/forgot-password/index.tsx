/* --- libs --- */
import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";

/* --- hook --- */
import { useTheme } from "@providers/ThemeContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/* --- utils --- */
// import { withI18n } from "@utils/withI18n";

/* --- components --- */
import Button from "@components/Button";
import Input from "@components/Input";
import Logo from "@components/Logo";
import Label from "@components/Label";
import AlertError from "@components/AlertError";
import { Col, Form } from "react-bootstrap";

/* --- styles --- */
import styles from "./styles.module.scss";

export default function RecoverPassword() {
    const { theme } = useTheme();
    // const { t } = useTranslation();
    const navigate = useNavigate();

    let validatorEmail = useMemo(() => {
        return yup.object({
            email: yup.string().email().required(/* t("forms.message_error.email") */),
        });
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange", resolver: yupResolver(validatorEmail) });

    function verifyEmail(data: any) {
        console.log(data);
    }

    return (
        <div className={`d-flex ${styles.container_forgot} ${styles[theme]}`}>
            {/* <Head>
                <title>{t("pages.forgot_password.title")} | Civil Cultural</title>
            </Head> */}

            <Col className={`${styles.img_container}  col-6 d-none d-md-block p-0`} />

            <Col
                as="section"
                className={`scol-12 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-items-center align-items-center`}
            >
                <Col className="col-11 mx-auto">
                    <Col className="col-10 col-xxl-5 col-xl-5 col-lg-6 col-md-7 col-sm-8 mx-auto d-flex align-items-center mb-5">
                        <h4 className={` ${styles.logo_title}  ${styles[theme]} text-capitalize ms-2`}>
                            Civil Cultural
                        </h4>
                        <Logo />
                    </Col>

                    <Form onSubmit={handleSubmit(verifyEmail)}>
                        <Form.Group className="col-12 col-lg-8 col-md-10 col-sm-12 mx-auto mb-5">
                            <Col>
                                <p className={`${styles.instruction} ${styles[theme]}`}>
                                    {/* {t("pages.forgot_password.message_info")} */}
                                </p>
                            </Col>
                            <Label label="E-mail" className={`${styles[theme]}`}>
                                <Input
                                    type="text"
                                    placeholder="E-mail"
                                    {...register("email", { required: true })}
                                />
                            </Label>

                            <Col className="col-12 mx-auto">
                                {errors.email && <AlertError text={errors.email.message as string} />}
                            </Col>
                        </Form.Group>

                        <Form.Group className="col-12 col-lg-8 col-md-10 col-sm-12 mx-auto mb-4">
                            <Col className="col-12 d-grid gap-1">
                                <Button
                                    type="button"
                                    className={styles.submit}
                                    onClick={() => navigate("/reset-password")}
                                >
                                    Enviar{" "}
                                </Button>
                            </Col>
                        </Form.Group>
                    </Form>

                    <Col className="col-12 my-2 text-center clearfix">
                        <Link className={`${styles.form_link} link-primary text-decoration-none text-center`} to="/login">
                            Login
                        </Link>
                    </Col>
                </Col>
            </Col>
        </div>
    );
}
