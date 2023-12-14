import img from 'constants/Img'
import React from 'react'
import './about.scss'
import { Col, Row } from 'react-bootstrap'
import Icons from 'constants/Icons'
import { Button } from 'primereact/button'
import { useEffect } from 'react'
const About = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <div className='master_about overflow-hidden'>
      <div className="header_banner " style={{ marginTop: '90px' }}>
        <img src={img.banner_about} alt="banner" className='w-100' srcset="" />]
        <div className="overlay">
          <div className="header">
            <span>من نحن</span>
          </div>
        </div>
      </div>
      <header className=''>
        <span className='span_header_about'>عن الشركة</span>
      </header>
      <div className="master_about_header mt-3">
        <div className="master_about_header_container">
          <Row>
            <Col xl={8} lg={8} md={8} sm={12} className=' b flex align-items-center'>
              <div className="content flex flex-column gap-4" >
                <span>إننا نملك - بفضل الله تعالى – الشھادات العلمیة و الخبرات العملیة في مجالات المحاماة والاستشارات القانونیة والعمالیة والتحكیم والتوثیق والأنظمة المتعلقة بذلك</span>
                <span className='mt-3 mb-3'>ویقوم عملنا على التطویر والارتقاء الدائم بمستوى منظومة العمل القانوني.</span>
              </div>
            </Col>
            <Col xl={4} lg={4} md={4} sm={12}>
              <img src={img.About1} alt="" className='w-100 p-2' />
            </Col>
          </Row>

        </div>
      </div>
      <div className="master_about_header_2th">

        <Row>
          <Col xl={6} lg={6} md={6} sm={12} className='mt-5'>
            <div className="app_about_1th p-5">
              <div className="title shadow-lg">
                <span>رؤیتنا</span>
              </div>
              <p>نسعى للریادة في مجالات خدماتنا ونحرص على الحفاظ على تمیزنا وصدارتنا في مجالات تخصصاتنا في أنحاء المملكة بكفاءة وسرعة ودقة أداء، من خلال الفھم الدقیق لاحتیاجات عملائنا، وتقدیم خدماتنا بشكل احترافي وبطرق مبتكرة وغیر تقلیدیة وتتوافق مع ما یستجد من أنظمة ولوائح تنفیذیة وقرارات وزاریة.</p>
            </div>
          </Col>
          <Col xl={6} lg={6} md={6} sm={12} className='mt-5'>
            <div className="app_about_2th p-5">
              <div className="title shadow-lg">
                <span>رسالتنا</span>
              </div>
              <p>نسعى للریادة في مجالات خدماتنا ونحرص على الحفاظ على تمیزنا وصدارتنا في مجالات تخصصاتنا في أنحاء المملكة بكفاءة وسرعة ودقة أداء، من خلال الفھم الدقیق لاحتیاجات عملائنا، وتقدیم خدماتنا بشكل احترافي وبطرق مبتكرة وغیر تقلیدیة وتتوافق مع ما یستجد من أنظمة ولوائح تنفیذیة وقرارات وزاریة.</p>
            </div>
          </Col>

        </Row>
      </div>

      <header className='mt-5'>
        <span className='span_header_about'>قیمنا</span>
      </header>
      <div className="master_about_header mt-3">
        <div className="master_about_header_container">
          <Row>
            <Col xl={8} lg={8} md={8} sm={12} className=' b flex align-items-center'>
              <div className="content flex flex-column gap-4" >
                <span>نعتمد في عملنا على الالتزام الكامل والتطبیق العملي للقیم التي نؤمن بھا بشكل مطلق، وأھمھا:</span>
                <ul className='flex flex-column gap-2'>
                  <li>  الشفافیة والنزاھة.</li>
                  <li>     المھنیة والاحترافیة والتخصصیة.</li>
                  <li>   الدقة والعنایة</li>
                  <li>     السریة التامة</li>
                  <li>     الإبداع والابتكار.</li>
                  <li>  العمل بروح الفریق الواحد. </li>

                </ul>
              </div>
            </Col>
            <Col xl={4} lg={4} md={4} sm={12}>
              <img src={img.About1} alt="" className='w-100 p-2' />
            </Col>
          </Row>

        </div>
      </div>


      <div className="owner">
        <div className="owner_title">
          <span> الشركاء المؤسسون</span>
        </div>
        <div className="owner_content ">
          <Row className='owner_content_row'>
            <Col xl={5} lg={5} md={5} sm={12} className='owner_content_col  '>
              <div className="owner_desc flex align-items-center h-100 justify-content-center flex-column">
                <img src={img.Owner1} alt="" className='w-75 owner_desc_img' />
                <div className="jop_title flex flex-row align-items-center bg-light gap-3 w-27rem rounded-3 shadow-3 p-2">
                  <img src={img.Owner1} alt="" srcset="" width={100} />
                  <div className="info">
                    <span>طلعت عبد الرحيم ناقرو</span>
                    <p> تجاوزت خبراتي۳۰ عاما.</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xl={7} lg={7} md={7} sm={12} className='owner_content_col  '>
              <div className="owner_content_body">
                <div className="title">
                <h2>المؤهلات</h2>

                </div>
                <ul className='flex flex-column gap-3 mt-5'>
                  <li>حاصل على دبلوم التحكیم الدولي</li>
                  <li>ماجستیر قانون خاص من كلیة الشرق العربي بالریاض</li>
                  <li>محاضر (متعاون) بكلیة الأمیر سلطان بجدة</li>
                  <li>محاضر (متعاون) بقسم القانون بكلیة الشرق العربي</li>
                  <li>الشریك المؤسس والمدیر العام لشركة طلعت ناقرو ومعتز ناقرو للمحاماة والاستشارات القانونیة</li>
                  <li>مدیر الشؤون القانونیة لكلیات الشرق العربي بالریاض</li>
                  <li>المستشار الإداري والعمالي والمطور لشركة عبد الله علي الجمیعة المحدودة</li>
                  <li>المستشار الإداري والعمالي والمطور لشركة عبد الله علي الجمیعة للاستثمار السیاحي والفندقي ذ.م.م</li>
                  <li>المستشار الإداري والعمالي والمطور لشركة عنایة نجد الطبیة</li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>

        <div className="owner_content mt-8">
          <Row>
            <Col xl={7} lg={7} md={7} sm={12} className='owner_content_col'>
              <div className="owner_content_body">
                <div className="title">
                  <h2>المؤهلات</h2>
                </div>

                <ul className='flex flex-column gap-3 mt-5'>
                  <li>ماجستیر قانون خاص من كلیة الشرق العربي بالریاض</li>
                  <li>محاضر (متعاون) بكلیة الأمیر سلطان بجدة</li>
                  <li>محاضر (متعاون) بقسم القانون بكلیة الشرق العربي</li>
                  <li>الشریك المؤسس والمدیر العام لشركة طلعت ناقرو ومعتز ناقرو للمحاماة والاستشارات القانونیة</li>
                  <li>مدیر الشؤون القانونیة لكلیات الشرق العربي بالریاض</li>
                  <li>المستشار الإداري والعمالي والمطور لشركة عبد الله علي الجمیعة المحدودة</li>
                  <li>المستشار الإداري والعمالي والمطور لشركة عبد الله علي الجمیعة للاستثمار السیاحي والفندقي ذ.م.م</li>
                  <li>المستشار الإداري والعمالي والمطور لشركة عنایة نجد الطبیة</li>
                </ul>
              </div>
            </Col>

            <Col xl={5} lg={5} md={5} sm={12} className='owner_content_col'>
              <div className="owner_desc flex align-items-center h-100 justify-content-center flex-column">
                <img src={img.Owner2} alt="" className='w-75 owner_desc_img2' />
                <div className="jop_title flex flex-row align-items-center bg-light gap-3 w-27rem  rounded-3 shadow-3 p-2">
                  <img src={img.Owner2} alt="" srcset="" width={100} />
                  <div className="info  ">
                    <span>طلعت عبد الرحيم ناقرو</span>
                    <p> تجاوزت خبراتي۳۰ عاما.</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>


      </div>

      <div className="owner_contact overflow-hidden">
        <div className="conatct_container">
          <Row>
            <Col xl={8} lg={8} md={8} sm={12} className='contact_sm'>
              <span className='contact_title'>نحن مستعدون لاستفساراتكم و استشاراتكم القانونية</span>
              <div className="contact_call flex gap-4 align-items-center">
                <Icons.Call />
                <span>تواصل مع فريقنا الآن !</span>
              </div>
            </Col>

            <Col xl={4} lg={4} md={4} sm={12} className='flex justify-content-center align-items-center'>
              <Button label='تواصل معنا' />
            </Col>

          </Row>
        </div>
      </div>
    </div>
  )
}

export default About