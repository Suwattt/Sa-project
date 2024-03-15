import React from "react";
import Header from "../Component/Header";
import "./About.css";
import Footer from "../Component/Footer";

function About() {
  return (
    <>
      <Header />
      <div className="about-container">
        <h2 className="h2">About Page</h2>
        <p className="about-content">
          "สวัสดีครับ/ค่ะ! เรายินดีต้อนรับทุกท่านสู่เว็บไซต์การจองที่พักของเรา.
          เราจุดประสงค์หลักของเว็บไซต์นี้คือการทำให้การค้นหาและจองที่พักเป็นเรื่องง่ายและสะดวกสบายสำหรับทุกคนที่กำลังมองหาที่พักที่เหมาะสมกับความต้องการของตนเอง.
          เรามีบริการค้นหาและจองที่พักในทุกที่ทุกเวลา
          รวมถึงการเปรียบเทียบราคาและบทวิจารณ์จากผู้ใช้เกี่ยวกับที่พักต่าง ๆ
          เพื่อให้คุณสามารถตัดสินใจได้อย่างมั่นใจ
          เรามุ่งมั่นที่จะให้บริการที่มีคุณภาพและปลอดภัยต่อข้อมูลส่วนตัวของคุณ
          ดังนั้น
          ความเชื่อถือและความปลอดภัยของลูกค้าเป็นสิ่งที่เราให้ความสำคัญอย่างยิ่ง
          หากท่านมีคำถามหรือข้อสงสัยใด ๆ เกี่ยวกับการใช้บริการของเรา
          อย่าลังเลที่จะติดต่อเราผ่านช่องทางติดต่อที่ทีมงานของเราได้จัดเตรียมไว้
          ขอบคุณที่ใช้บริการเว็บไซต์ของเรา
          และขอให้ท่านมีประสบการณ์ที่น่าจดจำและประทับใจกับการจองที่พักของคุณกับเรา!"
          โดยเนื้อหาข้างต้นสามารถปรับแต่งและปรับเปลี่ยนได้ตามความเหมาะสมของเว็บไซต์และกลุ่มเป้าหมายของคุณได้ครับ/ค่ะ
          หวังว่าข้อมูลนี้จะมีประโยชน์สำหรับคุณครับ/ค่ะ!
        </p>
        <img className="bgab" src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      </div>
      <Footer />
    </>
  );
}

export default About;
