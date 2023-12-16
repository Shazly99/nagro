import Icons from 'constants/Icons'
import { LocalizationContext } from 'context/LangChange'
import React, { useContext } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import './connect.scss'
import { ContantServices } from './ContantServices';
import { useFormik } from 'formik';
import AOS from 'aos';
import * as Yup from 'yup';
import { Button } from 'primereact/button';
import { useTranslation } from 'react-i18next';

const ConnectHome = () => {
  let { isLang } = useContext(LocalizationContext)
  const { t } = useTranslation()
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(isLang === "en" ? 'you name is required' : 'يرجى إدخال الاسم'),
    email: Yup.string().email(isLang === "ar" ? 'يرجى إدخال عنوان بريد إلكتروني صحيح' : 'Please enter a valid email address').required(isLang === "en" ? 'The email field is required.' : 'يرجى إدخال عنوان بريد إلكتروني'),
    phone: Yup.string().required(isLang === "en" ? 'The phone field is required.' : 'يرجى إدخال رقم الهاتف'),
    reason: Yup.string().required(isLang === "en" ? 'The reason field is required.' : 'يرجى إدخال السبب'),
    message: Yup.string().required(isLang === "en" ? 'The message field is required.' : 'يرجى إدخال الرسالة'),
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      reason: '',
      message: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      await ContantServices(isLang, values).then(({ data }) => {
        console.log(data?.message);

        resetForm();
      })
    }
  });
  return (
    <div className='py-8 app_clients_home' >
      <Container>
        <Row>
          <Col xl={6} lg={6} md={12} sm={12} dir={isLang === "en" ? 'ltr' : 'rtl'}>
            <span className='w-100 client_span'>{t('contact_title')}</span>
            <Form className="form" onSubmit={formik.handleSubmit} >
              <Row className='mt-6'>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className='label-style'> {t('name')}    </Form.Label>
                    <Form.Control
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={formik.touched.name && formik.errors.name}
                      className='input-style' type="text" placeholder={t('placeholder_name')} />
                    {formik.touched.name && formik.errors.name && (
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.name}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>

                <Col xl={6} lg={6} md={6} sm={12}>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label className='label-style'>{t('email')}</Form.Label>
                    <Form.Control
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={formik.touched.email && formik.errors.email}
                      className='input-style' type="email" placeholder={t('placeholder_email')} />
                    {formik.touched.email && formik.errors.email && (
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.email}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>

                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label className='label-style'>{t('phone')}</Form.Label>
                    <Form.Control
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={formik.touched.phone && formik.errors.phone}
                      className='input-style' type="tel" placeholder={t('placeholder_phone')} />
                    {formik.touched.phone && formik.errors.phone && (
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.phone}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>

                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label className='label-style'> {t('reason')}</Form.Label>
                    <Form.Control
                      name="reason"
                      value={formik.values.reason}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={formik.touched.reason && formik.errors.reason}
                      className='input-style' type="text" placeholder={t('placeholder_reason')} />
                    {formik.touched.reason && formik.errors.reason && (
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.reason}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>

                <Col xl={12} lg={12} md={12} sm={12}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea5">
                    <Form.Label className='label-style'>{t('reason')}</Form.Label>
                    <Form.Control
                      name="message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={formik.touched.message && formik.errors.message}
                      className='input-style' as="textarea" rows={5} placeholder={t('placeholder_message')} />
                    {formik.touched.message && formik.errors.message && (
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.message}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Button size='small' iconPos={isLang === "en" ? "left" : 'right'} icon="pi pi-arrow-left" type={t('submit')} label='إرسال' className='rounded-2 mt-4 p-2 px-4' />
            </Form>

          </Col>
          <Col xl={6} lg={6} md={12} sm={12} className=' '>
            <Icons.Map className='w-100' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ConnectHome
