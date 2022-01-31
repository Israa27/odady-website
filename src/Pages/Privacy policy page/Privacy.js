import React from 'react'
import Navbar from '../../Components/Navbar/Navber';
import Footer from '../../Components/Footer/Footer';
import { Container } from 'react-bootstrap';
import './privacy.css';
export default function Privacy() {
    return (
        <div>
           <Navbar /> 
           <Container>
               <div className='privacy-content'>
                   <h4>سياسة الخصوصية</h4>
                   <div className='privacy-text'>
                       <span>أولاً : إشتراك الزبائن</span>
                       <p>يتوجب على الزبائن التسجيل في الموقع(والمقصود به متجر عُدَدي للتسوق الإلكتروني) 
                           لغرض إستخدام سلة التسوق الإلكترونية وذلك لغرض مساعدته على تجميع الطلبات وإكمالها بدقة وسهولة تامة</p>
                   </div>
                   <div className='privacy-text'>
                       <span>ثانياً : تجميع بيانات الزبائن</span>
                       <p>يقوم متجر عُدَدي بفرض عملية الإشتراك أو التسجيل على الزبائن لغرض تقديم خدمة التسوق 
                            بالصورة الصحيحة ولضمان الدقة في عمل الخدمة. وخلال عملية التسجيل ، يقوم موقع متجر عُدَدي
                            بسؤال الزبائن عن المعلومات التالية :</p>
                        <ul>
                            <li>الاسم</li>
                            <li>رقم الهاتف</li>
                            <li>المحافظة</li>
                            <li>اسم المنطقة</li>
                            <li>اقرب نقطة دالة</li>
                        </ul>
                   </div>

                   <div className='privacy-text'>
                       <span>ثالثاً : الغرض من البيانات</span>
                       <p>يحتاج متجر عُدَدي بيانات الزبون لأجل :</p>
                       <ul>
                            <li>إنشاء حساب خاص لكل زبون يفصل نشاطه عن باقي الزبائن</li>
                            <li>تخصيص سلة مشتريات ألكترونية لكل زبون لغرض فصل طلبياته عن باقي طلبيات الزبائن</li>
                            <li>تخصيص سلة مشتريات ألكترونية لكل زبون لغرض فصل طلبياته عن باقي طلبيات الزبائن</li>
                        </ul>
                    </div>

                    <div className='privacy-text'>
                       <span>رابعاً : إنهاء حساب الزبون</span>
                       <p>يحق لمتجر عُدَدي للتسوق الإلكتروني إنهاء حساب الزبون بدون إشعار مسبق في الحالات التالية :</p>
                       <ul>
                            <li>إدخال معلومات خاطئة أو مظللة من قبل الزبون أثناء عملية التسجيل</li>
                            <li>سوء إستخدام الخدمة من قبل الزبون</li>
                            <li>مشاركة الزبون الخارجية عن السياقات على صفحات مواقع التواصل الإجتماعي الخاصة
                                 في متجر عُدَدي للتسوق الإلكتروني</li>
                        </ul>
                    </div>

                    <div className='privacy-text'>
                       <span>خامساً : علاقة الزبون بالمتجر</span>
                       <p>يعمل متجر عُدَدي للتسوق الإلكتروني بجهد للحفاظ على علاقة مهنية وأخلاقية عالية 
مع الزبائن من خلال الإلتزام بسياسة الإستخدام و الخصوصية ، كما ونتمنى من زبائننا الكرام الإلتزام بهذه السياسات. علماً أن مشاركات الزبائن على قنوات متجر عُدَدي في مواقع التواصل الإجتماعي يجب أن تكون ضمن سياسة الإستخدام و الخصوصية.</p>
                   </div>
               </div>
           </Container>
           <Footer />
        </div>
    )
}
