import React from "react";
import "./Event.css";

import Img1 from "../../assets/WD1.png";
import Img2 from "../../assets/WD2.jpg";
import Img3 from "../../assets/WD3.png";
import Img4 from "../../assets/WD4.png";
import Img5 from "../../assets/WD5.png";
import Img6 from "../../assets/WD6.png";

function Event() {
  return (
    <section className="event-container">
      <div className="event-content">
        <h1> กิจกรรมและข่าวสารจากทางวัด</h1>
        <p>
          วัดพระธาตุดอยสุเทพ ยูเอสเอ เมืองชิโนฮิลส์ รัฐแคลิฟอร์เนีย
          มีการทำบุญตักบาตร ถวายภัตตาหารเพล ถวายมหาสังฆทาน ถือศีล ฟังเทศน์
          ทุกวันอาทิตย์ เริ่มเวลาประมาณ 10.30 น.
          และได้มีตลาดการกุศลทุกวันอาทิตย์ มีอาหารไทย หลากหลายรสชาติ
          มีก๋วยเตี๋ยว น้ำชา กาแฟ ส้มตำ ผัดไทย ข้าวผัด ขนมหวาน หลากหลายชนิด
          **ทางวัดกำลังดำเนินการก่อสร้างอุโบสถ สร้างศาลาอเนกประสงค์
          สร้างกุฎีสงฆ์ สร้างที่จอดรถ สร้างพระประธานประจำอุโบสถ
          จึงขอบอกบุญมายังพุทธศาสนิกชนทั้งหลาย
          ขอเชิญร่วมทำบุญเป็นเจ้าภาพในส่วนต่าง ๆ หรือร่วมทำบุญตามกำลังศรัทธา
          สอบถามได้ที่
          <br />
          <br />
          <hr />
          <br />
          Tel: 909-606-9502
          <br />
          E-mail: watchino18@gmail.com
        </p>
      </div>

      <div className="galley">
        <img src={Img1} alt="pic-1" />
        <img src={Img2} alt="pic-2" />
        <img src={Img3} alt="pic-3" />
        <img src={Img4} alt="pic-4" />
        <img src={Img5} alt="pic-5" />
        <img src={Img6} alt="pic-6" />
        <button className="btn">ติดต่อสอบถาม</button>
      </div>
    </section>
  );
}

export default Event;
