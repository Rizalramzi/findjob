import Image from "next/image";
import  Text  from "@/components/text/text";
import  Button  from "@/components/button/button";
import NavMenu from "@/components/navMenu/navMenu";
import Card from "@/components/card/card";
export default function Home() {
  return (
    <div className="pb-[3vw]"> 
      <nav className="flex items-center justify-between py-[2vw] px-[4.167vw]">
        <div className="flex items-center space-x-[8vw]">
          <div className="flex items-center space-x-[0.7vw]">
            <img src="/logo.svg" alt="" className="w-[2.604vw] h-[2.604vw]"/>
            <Text
              size={24}
              weight="medium"
              color="main"
              children="findjob."
            />
          </div>
          <NavMenu
            items={[
              { label: "Beranda", size: 20, weight: "regular" },
              { label: "Eksplor Layanan", size: 20, weight: "regular" },
              { label: "Kategori", size: 20, weight: "regular" },
              { label: "Tentang Kami", size: 20, weight: "regular" },
              { label: "Kontak", size: 20, weight: "regular" },
            ]}/>
        </div>
        <div className="flex items-center space-x-[1vw]">
          <Button
            type="button"
            size="desktop"
            variant="full"
            children="Masuk"
          />
          <Button
            type="button"
            size="desktop"
            variant="outline"
            children="Daftar"
          />
        </div>
      </nav>

      <section className="px-[8vw] mt-[2vw]">
        <div className="w-full flex items-center">
          <div className="w-3/5 space-y-[2vw]">
            <div className="space-y-[1.406vw]">
              <div className="max-w-[43.75vw]">
                <Text size={64} weight="regular" color="dark">
                  Bantu bisnis tumbuh dengan{' '}
                  <span className="font-semibold text-main">Profesional Berpengalaman</span>
                </Text>
              </div>
              <div className="max-w-[39.063vw]">
                <Text size={20} weight="light" color="dark" children="Dukung pertumbuhan bisnis Anda dengan tenaga profesional berpengalaman dan layanan berkualitas. Kami siap membantu Anda mencapai target, mengatasi tantangan, dan meraih kesuksesan yang lebih tinggi."/>
              </div>
              <Button type="button" size="desktop" variant="full" children="Mulai Sekarang"/>
            </div>
            <div className="space-y-[1vw]">
              <Text size={20} weight="regular" color="light-dark" children="Didukung Oleh :"/>
              <div className="flex space-x-[1.5vw]">
                <img src="/sponsor-1.svg" alt=""  className="w-auto h-[1.563vw]"/>
                <img src="/sponsor-2.svg" alt=""  className="w-auto h-[1.563vw]"/>
                <img src="/sponsor-3.svg" alt=""  className="w-auto h-[1.563vw]"/>
                <img src="/sponsor-4.svg" alt=""  className="w-auto h-[1.563vw]"/>
              </div>
            </div>
          </div>
          <div className="w-2/5 flex items-center justify-center">
            <img src="/hero-vector.svg" alt="" className="w-[31.25vw] h-[31.25vw]"/>
          </div>
        </div>
      </section>
            
      <section className="px-[8vw] mt-[10vw]">
        <div className="w-full">
          <Text size={48} weight="regular" color="dark">
                  Pilih berdasarkan{' '}
            <span className="font-semibold text-main">Kategori</span>
          </Text>
          <div className="grid grid-cols-4 mt-[2vw] gap-[0.8vw]">
              <Card type="category" title="Programming" imageUrl="/category-icon.svg" />
              <Card type="category" title="Digital Bussiness" imageUrl="/category-icon.svg" />
              <Card type="category" title="UI/UX Designer" imageUrl="/category-icon.svg" />
              <Card type="category" title="Big Data" imageUrl="/category-icon.svg" />
              <Card type="category" title="Front-end Developer" imageUrl="/category-icon.svg" />
              <Card type="category" title="Back-end Developer" imageUrl="/category-icon.svg" />
              <Card type="category" title="Illustrator" imageUrl="/category-icon.svg" />
              <Card type="category" title="Copywriter" imageUrl="/category-icon.svg" />
          </div>
        </div>
      </section>

      <section className="mt-[10vw] px-[8vw]">
            <div className="w-full flex flex-col items-center">
              <Text size={48} weight="regular" color="dark" children="Pekerjaan untukmu"/>
              <div className="grid grid-cols-2 gap-[2vw] mt-[3vw]">
                <div className="w-[31.25vw] h-[28vw] flex flex-col justify-center bg-white p-[3vw] rounded-[0.521vw] space-y-[1.5vw]">
                    <div className="w-full flex items-center justify-between">
                      <div className="flex items-center space-x-[1vw]">
                        <img src="/profile.png" alt="" className="w-[3.125vw] h-[3.125vw]"/>
                        <div>
                          <Text size={20} weight="medium" color="dark" children="Convert Figma to HTML"/>
                          <Text size={18} weight="regular" color="light-dark" children="Allians Wong"/>
                        </div>
                      </div>
                      <img src="/save.svg" alt="" className="w-[2.083vw] h-[2.083vw]"/>
                    </div>
                    <div>
                      <Text size={18} weight="light" color="dark" children="Saya mencari seorang pengembang web untuk melakukan slicing desain Figma menjadi kode HTML yang responsif dan berkualitas tinggi. Tugas utama Anda adalah mengubah desain UI/UX yang telah dibuat di Figma menjadi halaman web yang fungsional dengan HTML, CSS, dan JavaScript."/>
                    </div>
                    <div className="flex space-x-[0.6vw]">
                      <Button type="button" size="tools" variant="full" children="HTML"/>
                      <Button type="button" size="tools" variant="full" children="CSS"/>
                      <Button type="button" size="tools" variant="full" children="Javascript"/>
                    </div>
                    <div className="flex space-x-[1vw] items-center">
                      <div className="flex items-center space-x-[0.5vw]">
                        <img src="/price.svg" alt="" className="w-auto h-[1.302vw]"/>
                        <Text size={14} weight="regular" color="dark" children="25.00 USD / hrs"/>
                      </div>
                      <hr className="w-[0.01vw] h-[1vw] bg-dark" />
                      <div className="flex items-center space-x-[0.5vw]">
                        <img src="/location.svg" alt="" className="w-auto h-[1.302vw]"/>
                        <Text size={14} weight="regular" color="dark" children="United State"/>
                      </div>
                    </div>
                    <hr className="w-[15vw] h-[0.01vw] bg-dark"/>
                    <div className="flex justify-between items-center">
                      <Text size={18} weight="regular" color="dark" children="4 Hari yang lalu"/>
                      <Button type="button" size="desktop" variant="full" children="Detail"/>
                    </div>
                </div>
              </div>
            </div>
      </section>

      <section className="mt-[10vw] px-[8vw]">
            <div className="w-full flex items-center">
              <div className="w-[45%]">
                  <img src="/about.svg" alt=""  className="w-[29.948vw] h-[29.948vw]"/>
              </div>
              <div className="w-[55%] space-y-[1.042vw]">
                <Text size={64} weight="regular" color="dark">
                  Tentang{' '}
                  <span className="font-semibold text-main">findjob.</span>
                </Text>
                <Text size={24} weight="light" color="dark" children="FindJob adalah platform yang menghubungkan freelancer berbakat dengan perusahaan yang membutuhkan layanan profesional. Kami menyediakan beragam kategori pekerjaan, mulai dari desain grafis hingga pengembangan web, dengan antarmuka yang mudah digunakan dan sistem verifikasi untuk keamanan. Bergabunglah dengan kami untuk menemukan pekerjaan impian Anda atau freelancer terbaik untuk proyek Anda, karena kami percaya bahwa kolaborasi adalah kunci untuk mencapai hasil yang luar biasa.">

                </Text>
              </div>
            </div>
      </section>

      <section className="mt-[10vw] px-[8vw]">
        <div className="w-full flex items-center">
          <div className="w-[55%]">
                <Text size={64} weight="regular" color="dark">
                  Alasan memilih{' '}
                  <span className="font-semibold text-main">findjob.</span>
                </Text>
                <div className="flex items-center justify-start mt-[3vw]">
                  <div className="grid grid-cols-2 gap-[2vw]">
                    <div className="max-w-[18vw] space-y-[0.6vw]">
                      <img src="/checklist.svg" alt=""  className="w-[2.604vw] h-[2.604vw]"/>
                      <Text size={22} weight="medium" color="main" children="Beragam Kategori Pekerjaan"/>
                      <Text size={20} weight="light" color="dark" children="Temukan berbagai jenis pekerjaan, mulai dari desain grafis hingga pengembangan web, sesuai dengan keahlian dan minat Anda."/>
                    </div>
                    <div className="max-w-[18vw] space-y-[0.6vw]">
                      <img src="/checklist.svg" alt=""  className="w-[2.604vw] h-[2.604vw]"/>
                      <Text size={22} weight="medium" color="main" children="Beragam Kategori Pekerjaan"/>
                      <Text size={20} weight="light" color="dark" children="Temukan berbagai jenis pekerjaan, mulai dari desain grafis hingga pengembangan web, sesuai dengan keahlian dan minat Anda."/>
                    </div>
                    <div className="max-w-[18vw] space-y-[0.6vw]">
                      <img src="/checklist.svg" alt=""  className="w-[2.604vw] h-[2.604vw]"/>
                      <Text size={22} weight="medium" color="main" children="Beragam Kategori Pekerjaan"/>
                      <Text size={20} weight="light" color="dark" children="Temukan berbagai jenis pekerjaan, mulai dari desain grafis hingga pengembangan web, sesuai dengan keahlian dan minat Anda."/>
                    </div>
                    <div className="max-w-[18vw] space-y-[0.6vw]">
                      <img src="/checklist.svg" alt=""  className="w-[2.604vw] h-[2.604vw]"/>
                      <Text size={22} weight="medium" color="main" children="Beragam Kategori Pekerjaan"/>
                      <Text size={20} weight="light" color="dark" children="Temukan berbagai jenis pekerjaan, mulai dari desain grafis hingga pengembangan web, sesuai dengan keahlian dan minat Anda."/>
                    </div>
                  </div>
                </div>
          </div>
          <div className="w-[45%]">
            <img src="/reason.svg" alt=""  className="w-[29.896vw] h-[29.896vw]"/>
          </div>
        </div>
      </section>

      <section className="mt-[10vw] px-[8vw] flex justify-center">
            <div className="bg-main w-[91.667vw] h-[26.042vw] rounded-[0.521vw] flex flex-col justify-center items-center space-y-[1.563vw]">
                <Text size={48} weight="medium" color="white" children="Segera bergabung dengan kami
                    di findjob." className="max-w-[35.469vw] text-center"/>
                <Button 
                 type="button"
                 size="desktop"
                 variant="fullWhite"
                 children="Daftar Sekarang"
                
                />
            </div>
      </section>

      <footer>
        <div className="w-full mt-[10vw] bg-main">
            <div className="w-1/2">
              <div className="flex items-center">
                <img src="/logo.svg" alt="" className="w-[2.604vw] h-[2.604vw]"/>
                <Text
                  size={24}
                  weight="medium"
                  color="white"
                  children="findjob."
                />
              </div>
            </div>
            <div className="1/2">
            
            </div>
        </div>
      </footer>
      
    </div>
  );
}
