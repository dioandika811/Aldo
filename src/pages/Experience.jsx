import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoMdCafe } from "react-icons/io";
import { MdSchool } from "react-icons/md";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function Experience() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - 2025"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<IoMdCafe />}
          >
            <h3 className="vertical-timeline-element-title">Perjalanan</h3>
            <h4 className="vertical-timeline-element-subtitle">CAFE</h4>
            <p>
              Perjalanan Di Gapilot Kupi Pertama kali Saya berkerja di Gapilot
              kupi menjadi seorang waiters waktu SMK,saya Berkerja untuk
              tambahan uang jajan saya,saya berkerja saat kelas 3 SMK pada tahun
              2024 bulan 5.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Perjalanan</h3>
            <h4 className="vertical-timeline-element-subtitle">KULIAH</h4>
            <p>
              Seiring berjalan nya waktu,pada saat bulan 6 teman saya memberikan
              tawaran untuk ikut pendaftaran kip kuliah, dan puji Tuhan saya dan
              teman² saya lolos di Drs.Sofyantan dan saya mengambil prodi
              informatika, dikarenakan waktu kuliah dan waktu kerja saya
              bersamaan, saya pun memutuskan untuk resign dari kerjaan tersebut,
              dan saya melakukan kerjaan sampingan sperti menjaga toko sambil
              kuliah sampai sekarang. Sekian Dan Terima Kasih.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Experience;
