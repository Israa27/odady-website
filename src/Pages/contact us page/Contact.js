import { Container } from 'react-bootstrap';
import React from 'react';
import './contact.css';
export default function Contact() {
  return <div>

      <Container>
      <h3 className='contact-name'>معلومات الاتصال</h3>
          <div className='contact-div'>
              <div className='contact-card'>
                  <span className='contact'><i className="far fa-envelope"></i></span>
                  <h5>البريد العمل	</h5>
                  <p>إذا كنت ترغب في الانضمام إلى فريقنا فإننا ننشر جميع وظائفنا المتاحة على صفحة Facebook ويمكنك مراسلتنا على سيرتك الذاتية من خلال</p>
                  <span>التالي : info@mytools-iq.com</span>
              </div>
              <div className='contact-card  '>
                  <span className='contact'><i className="fab fa-telegram-plane"></i></span>
                  <h5>البريد الإلكتروني</h5>
                  <p>يمكنكم مراسلتنا على بريدنا الإلكتروني</p>
                  <span>التالي : info@mytools-iq.com</span>
              </div>
              <div className='contact-card'>
                  <span className='contact'><i className="fas fa-phone-alt"></i></span>
                  <h5>أرقام الهواتف</h5>
                  <p>يمكنكم الأتصال على الرقم المُخصص</p>
                  <span>07814631456	</span>
              </div>

          </div>
          
          <div className='contact-icon'>
          <h3 >تابعونا على</h3>
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-whatsapp-square"></i>
              <i className="fab fa-instagram-square"></i>
              <i className="fab fa-youtube-square"></i>
              </div>
      </Container>
     
  </div>;
}
