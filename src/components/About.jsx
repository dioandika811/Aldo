import "../styles/About.css";
import { PiGuitar } from "react-icons/pi";
import { FaMountain } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About</h3>
        <p>
          ALDO RISKI SIAHAAN, Saya Mahasiswa Universitas Satya Terra Bhinneka
          Prodi Informatika, saya tamatan SMK FREE METHODIS 2 Medan jurusan
          Teknik Komputer Dan Jaringan(TKJ). Banyak ilmu yang saya dapat ketika
          menduduki bangku SMK, terutama saat PKL di bagian Jaringan seperti
          pemasangan wifi, menyusun kabel LAN seperti straight dan cros.
          <br />
        </p>
        <p>
          Bahkan saya juga belajar sedikit tentang Desain dengan menggunakan
          Aplikasi Adobe Photoshop dan juga Canva.
        </p>
        <h4>Programming & Tools</h4>
        <div className="skills">
          <PiGuitar />
          <FaMountain />
          <FaRunning />
          <FaHtml5 />
          <FaCss3Alt />
          <FaJava />
        </div>
      </div>
    </section>
  );
}

export default About;
