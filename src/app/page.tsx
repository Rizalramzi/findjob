import  Text  from "@/components/text/text";
import  Button  from "@/components/button/button";
import NavMenu from "@/components/navMenu/navMenu";
import Card from "@/components/card/card";
export default function Home() {
  return (
    <div className=""> 
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
                    { label: "Beranda", size: 20, weight: "regular", link:"/"},
                    { label: "Eksplor Layanan", size: 20, weight: "regular", link:"/service" },
                    { label: "Kategori", size: 20, weight: "regular", link:"category" },
                    { label: "Tentang Kami", size: 20, weight: "regular", link:"about" },
                    { label: "Kontak", size: 20, weight: "regular", link:"contact" },
            ]}/>
        </div>
        <div className="flex items-center space-x-[1vw]">
          <Button
            type="button"
            size="desktop"
            variant="full"
            children="Masuk"
            href="/login"
          />
          <Button
            type="button"
            size="desktop"
            variant="outline"
            children="Daftar"
            href="/register"
          />
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center h-[70vh] relative">
                <Text size={64} weight="regular" color="dark" className="max-w-[49.479vw] text-center">
                  Belajar dan mencari pekerjaan{' '}
                  <span className="font-semibold text-main">dalam satu tempat</span>
                </Text>
                <Text size={20} weight="light" color="dark" children="Tempat terbaik untuk belajar keterampilan baru sekaligus mencari peluang pekerjaan." className="max-w-[26.615vw] text-center mt-[1vw]"/>
                <div className="mt-[2.5vw]">
                    <Button
                        type="button"
                        size="desktop"
                        variant="full"
                        children="Selengkapnya"
                        href="/service"       
                    />
                </div>
                <div className="w-[20.833vw] h-[20.833vw] bg-white shadow-lg rounded-[0.781vw] p-[3vw] flex flex-col justify-center absolute bottom-0 left-[4vw] skew-x-[3deg] skew-y-[1deg] animate-skew-left">
                    <Text size={32} weight="regular" color="dark" children="Tugas hari ini"/>
                    <div className="mt-[1vw]">
                        <div className="flex justify-between">
                            <Text size={16} weight="regular" color="dark" children="Convert PDF to WORD"/>
                            <div className="flex items-center space-x-[-0.5vw]">
                                <img src="/profile.png" alt="" className="w-[1.5vw] h-[1.5vw]"/>
                                <img src="/profile.png" alt="" className="w-[1.5vw] h-[1.5vw]"/>
                                <img src="/profile.png" alt="" className="w-[1.5vw] h-[1.5vw]"/>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-[0.5vw] pb-[0.8vw] border-b-[0.1vw]">
                            <Text size={14} weight="light" color="main" children="In progress"/>
                            <div className="flex items-center space-x-[0.5vw]">
                                <div className="w-[6vw] h-[0.5vw] rounded-[0.5vw] flex overflow-hidden">
                                    <div className="w-1/2 h-full bg-main"></div>
                                    <div className="w-1/2 h-full bg-gray-300"></div>
                                </div>
                                <Text size={14} weight="light" color="dark" children="50%"/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[1vw]">
                        <div className="flex justify-between">
                            <Text size={16} weight="regular" color="dark" children="Convert PDF to WORD"/>
                            <div className="flex items-center space-x-[-0.5vw]">
                                <img src="/profile.png" alt="" className="w-[1.5vw] h-[1.5vw]"/>
                                <img src="/profile.png" alt="" className="w-[1.5vw] h-[1.5vw]"/>
                                <img src="/profile.png" alt="" className="w-[1.5vw] h-[1.5vw]"/>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-[0.5vw] pb-[0.8vw] border-b-[0.1vw]">
                            <Text size={14} weight="light" color="main" children="In progress"/>
                            <div className="flex items-center space-x-[0.5vw]">
                                <div className="w-[6vw] h-[0.5vw] rounded-[0.5vw] flex overflow-hidden">
                                    <div className="w-1/2 h-full bg-main"></div>
                                    <div className="w-1/2 h-full bg-gray-300"></div>
                                </div>
                                <Text size={14} weight="light" color="dark" children="50%"/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[1vw]">
                        <div className="flex justify-between">
                            <Text size={16} weight="regular" color="dark" children="Convert PDF to WORD"/>
                            <div className="flex items-center space-x-[-0.5vw]">
                                <img src="/profile.png" alt="" className="w-[1.5vw] h-[1.5vw]"/>
                                <img src="/profile.png" alt="" className="w-[1.5vw] h-[1.5vw]"/>
                                <img src="/profile.png" alt="" className="w-[1.5vw] h-[1.5vw]"/>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-[0.5vw] pb-[0.8vw] border-b-[0.1vw]">
                            <Text size={14} weight="light" color="main" children="In progress"/>
                            <div className="flex items-center space-x-[0.5vw]">
                                <div className="w-[6vw] h-[0.5vw] rounded-[0.5vw] flex overflow-hidden">
                                    <div className="w-1/2 h-full bg-main"></div>
                                    <div className="w-1/2 h-full bg-gray-300"></div>
                                </div>
                                <Text size={14} weight="light" color="dark" children="50%"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[20.833vw] h-auto bg-white shadow-lg rounded-[0.781vw] p-[3vw] absolute space-y-[1.2vw] right-[4vw] top-[1.2vw] skew-x-[-3deg] skew-y-[-1deg] animate-skew-right">
                    <div className="flex justify-between items-center">
                        <Text size={24} weight="regular" color="dark" children="Software Developer Jr."/>
                        <img src="/save.svg" alt="" className="w-[2.083vw] h-[2.083vw]"/>
                    </div>
                    <Text size={14} weight="light" color="dark" children="Saya mencari Software Developer Junior dengan keterampilan dasar pemrograman..."/>
                    <div className="flex items-center space-x-[0.5vw]">
                        <div className="flex items-center space-x-[0.5vw]">
                            <img src="/location.svg" alt="" className="w-auto h-[1.302vw]"/>
                            <Text size={14} weight="regular" color="dark" children="United State"/>
                        </div>
                        <div className="bg-main w-[0.4vw] h-[0.4vw] rounded-full"></div>
                        <Text size={14} weight="regular" color="dark" children="4 Hari yang lalu"/>
                    </div>
                </div>
                <div className="w-[20.833vw] h-auto bg-white shadow-lg rounded-[0.781vw] p-[2vw] absolute space-y-[1.5vw] right-[8vw] bottom-0 skew-x-[-6deg] skew-y-[-2deg] animate-skew-right">
                    <Text size={24} weight="regular" color="dark" children="Komunitas pemuda pecinta koding"/>
                    <div className="flex items-center justify-between">
                        <div className="flex space-x-[0.3vw] items-center">
                            <div className="flex items-center space-x-[-0.5vw]">
                                <img src="/profile.png" alt="" className="w-[1.5vw] h-[1.5vw]"/>
                                <img src="/profile.png" alt="" className="w-[1.5vw] h-[1.5vw]"/>
                                <img src="/profile.png" alt="" className="w-[1.5vw] h-[1.5vw]"/>
                            </div>
                            <Text size={14} weight="regular" color="dark" children="200+ Anggota"/>
                        </div>
                        <button className="px-[1.042vw] py-[0.521vw] bg-main text-[0.625vw] text-white rounded-[0.521vw]">Gabung</button>
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
              <div className="mt-[5vw]">
                <Button type="button" size="desktop" variant="with-arrow" children="Lihat Banyak Penawaran" href="/job-list"/>
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
                <div className="flex items-center mt-[3vw]">
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
          <div className="w-[45%] flex justify-end">
            <img src="/reason.svg" alt=""  className="w-[29.896vw] h-[29.896vw]"/>
          </div>
        </div>
      </section>

      <section className="mt-[10vw] px-[8vw] flex justify-center">
            <div className="bg-main w-[91.667vw] h-[26.042vw] rounded-[0.521vw] flex flex-col justify-center items-center space-y-[1.563vw] relative overflow-hidden">
              <Text 
                  size={48} 
                  weight="medium" 
                  color="white" 
                  children="Segera bergabung dengan kami di findjob." 
                  className="max-w-[35.469vw] text-center"
              />
              <Button 
                  type="button"
                  size="desktop"
                  variant="fullWhite"
                  children="Daftar Sekarang"
                  href="/register"
              />
              <div className="absolute left-[-4vw] top-[-15vw] w-[24.688vw] h-[24.688vw] border-[3vw] border-[#0F5F60] rounded-full border-t-transparent"></div>
              <div className="absolute left-[10vw] bottom-[-17vw] w-[24.688vw] h-[24.688vw] border-[3vw] border-[#0F5F60] rounded-full border-b-transparent"></div>
              <div className="absolute right-[4vw] top-[-18vw] w-[24.688vw] h-[24.688vw] border-[3vw] border-[#0F5F60] rounded-full border-t-transparent"></div>
          </div>
      </section>


      <footer className="w-full mt-[10vw] bg-main py-[2vw]">
        <div className="px-[8vw] flex justify-between items-center">
            <div className="w-1/3 space-y-[2vw]">
              <div className="flex items-center space-x-[1vw]">
                <svg className="w-[2.604vw] h-[2.604vw] stroke-white fill-transparent" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.41421" y="25" width="33.3553" height="33.3553" transform="rotate(-45 1.41421 25)"  strokeWidth="2"/>
                  <rect x="7.92758" y="28.0103" width="24.5165" height="24.5165" transform="rotate(-55 7.92758 28.0103)"  strokeWidth="2"/>
                  <rect x="14.5827" y="28.7916" width="15.6777" height="15.6777" transform="rotate(-65 14.5827 28.7916)"  strokeWidth="2"/>
                  <rect x="21.5805" y="28.4194" width="6.83883" height="6.83883" transform="rotate(-90 21.5805 28.4194)"  strokeWidth="2"/>
                </svg>
                <Text
                  size={24}
                  weight="medium"
                  color="white"
                  children="findjob."
                />
              </div>
              <div className="max-w-[26.979vw]">
                <Text
                size={20}
                weight="regular"
                color="white"
                children="Sedikit lagi tentang finjob. FindJob adalah platform yang menghubungkan freelancer berbakat dengan perusahaan yang membutuhkan layanan profesional."
                />
              </div>
              <div className="space-y-[1vw]">
                <Text size={20} weight="regular" color="white" children="Didukung Oleh :"/>
                <div className="flex space-x-[1.5vw]">
                  <svg className="w-auto h-[1.563vw] fill-white" viewBox="0 0 46 30" xmlns="http://www.w3.org/2000/svg">
                      <path d="M32.4002 0C28.6984 0 25.8054 2.78764 23.1852 6.32955C19.5849 1.74556 16.5753 0 12.9732 0C5.62794 0 0 9.55734 0 19.6752C0 26.0066 3.06226 30 8.19362 30C11.886 30 14.542 28.2601 19.2633 20.0063C19.2633 20.0063 21.2308 16.5302 22.5851 14.1376C23.0591 14.9031 23.5576 15.727 24.0843 16.613L26.2982 20.3373C30.6113 27.5528 33.0134 30 37.3679 30C42.3657 30 45.1477 25.9521 45.1477 19.489C45.1439 8.89523 39.3899 0 32.4002 0ZM15.6612 17.7716C11.8333 23.772 10.5091 25.1169 8.37795 25.1169C6.18471 25.1169 4.88118 23.1908 4.88118 19.758C4.88118 12.4127 8.54348 4.90376 12.9093 4.90376C15.2737 4.90376 17.2487 6.26936 20.2753 10.6013C17.403 15.0066 15.6612 17.7716 15.6612 17.7716ZM37.4676 25.1169C35.2875 25.1169 34.2454 23.678 30.1072 17.0174L27.4607 12.6027C26.744 11.4383 26.0574 10.368 25.3953 9.38617C27.7804 5.70506 29.7479 3.86921 32.0898 3.86921C36.9522 3.86921 40.8421 11.0283 40.8421 19.8201C40.8402 23.172 39.7436 25.1169 37.4676 25.1169Z"/>
                  </svg>
                  <svg className="w-auto h-[1.563vw] fill-white" viewBox="0 0 94 30" xmlns="http://www.w3.org/2000/svg">
                      <path d="M35.4147 0.530186L23.2552 29.5433H15.3218L9.34269 6.38932C8.97504 4.9613 8.66157 4.44272 7.55476 3.83514C5.74749 2.85991 2.77148 1.94272 0.147644 1.36997L0.329533 0.526318H13.0966C14.7258 0.526318 16.1887 1.61378 16.5563 3.48297L19.7181 20.2748L27.5277 0.526318L35.4147 0.530186ZM66.4944 20.0658C66.5292 12.4149 55.9062 11.9969 55.9836 8.57198C56.0029 7.52709 56.9936 6.42028 59.1647 6.14164C60.2405 5.99845 63.2049 5.89396 66.5679 7.43421L67.8837 1.28483C66.0764 0.626938 63.7506 0 60.8636 0C53.4448 0 48.2243 3.9435 48.1817 9.58978C48.1314 13.7655 51.9085 16.0952 54.7529 17.4845C57.6747 18.9087 58.6538 19.8142 58.6422 21.0913C58.6229 23.0379 56.3086 23.8893 54.1531 23.928C50.3798 23.9861 48.1894 22.9063 46.4402 22.0937L45.0818 28.4559C46.8311 29.2608 50.0741 29.9574 53.4294 30C61.3125 30 66.4712 26.0952 66.4944 20.0658ZM86.0842 29.5395H93.0269L86.9704 0.526318H80.5617C79.1221 0.526318 77.9069 1.3661 77.3651 2.6548L66.1113 29.5395H73.9905L75.554 25.2051H85.1825L86.0842 29.5395ZM77.7096 19.2608L81.6608 8.36687L83.9325 19.2608H77.7096ZM46.1383 0.530186L39.9271 29.5433H32.4232L38.6345 0.530186H46.1383Z"/>
                  </svg>
                  <svg className="w-auto h-[1.563vw] fill-white" viewBox="0 0 75 30" xmlns="http://www.w3.org/2000/svg">
                      <path d="M47.3696 15.8972C43.9709 16.0156 41.8618 16.6386 41.8618 18.866C41.8618 20.3115 43.0332 21.8754 45.9646 21.8754C49.9086 21.8754 51.9802 19.7258 51.9802 16.2118V15.8224C50.6126 15.8193 48.8961 15.8598 47.3696 15.8972ZM55.731 20.5483C55.731 21.6417 55.7715 22.6978 55.8494 23.6729H52.3727C52.2949 22.8909 52.2544 22.0716 52.2544 21.3302C50.379 23.6355 48.1142 24.299 45.0269 24.299C40.379 24.299 37.9179 21.8785 37.9179 19.0249C37.9179 14.9221 41.2762 13.5171 47.0986 13.3614C48.6998 13.3209 50.4973 13.3209 51.9802 13.3209V12.9314C51.9802 10.1962 50.2232 9.0654 47.1765 9.0654C44.9117 9.0654 43.2699 10.0031 43.0737 11.6043H39.1297C39.5597 7.57942 43.7777 6.56384 47.488 6.56384C51.9397 6.56384 55.6905 8.16509 55.6905 12.8536V20.5483H55.731Z"/>
                      <path d="M14.949 13.9066C14.7933 10.3894 12.2917 9.10282 9.55963 9.10282C6.66866 9.06232 4.32598 10.5483 3.93346 13.9066H14.949ZM3.85558 16.405C4.05184 19.8037 6.39452 21.8349 9.63751 21.8349C11.8649 21.8349 13.8556 20.9377 14.5191 18.9439H18.3852C17.6032 22.9284 13.3447 24.296 9.67489 24.296C2.99576 24.296 0.0269165 20.6262 0.0269165 15.6636C0.0269165 10.1963 3.07365 6.60126 9.71539 6.60126C14.9895 6.60126 18.8961 9.37384 18.8961 15.3894V16.405H3.85558Z"/>
                      <path d="M28.5036 21.7196C31.9802 21.7196 34.3634 19.2181 34.3634 15.4299C34.3634 11.6417 31.9802 9.14019 28.5036 9.14019C25.0269 9.14019 22.6438 11.6417 22.6438 15.4299C22.6438 19.2181 25.0269 21.7196 28.5036 21.7196ZM18.893 0H22.6438V9.41433C24.4818 7.22741 27.0207 6.60125 29.5191 6.60125C33.6998 6.60125 38.3478 9.41433 38.3478 15.5078C38.3478 20.5857 34.6749 24.2959 29.4818 24.2959C26.7466 24.2959 24.2076 23.3209 22.6064 21.405C22.6064 22.1869 22.5659 22.9688 22.488 23.7103H18.7777C18.8556 22.5389 18.8961 21.053 18.8961 19.8442L18.893 0Z"/>
                      <path d="M74.7933 7.22742L63.192 30H59.0114L62.3322 23.6729L53.6219 7.22742H57.9958L64.4008 20.0779L70.8057 7.22742H74.7933Z"/>
                  </svg>
                  <svg className="w-auto h-[1.563vw] fill-white" viewBox="0 0 232 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100.66 19.4981H115.884L107.844 6.51526L93.063 29.9709H86.3312L104.315 1.83181C105.671 -0.110805 108.344 -0.582031 110.277 0.773955C110.672 1.05285 111.018 1.38944 111.306 1.78374L129.338 29.9709H122.616L119.452 24.7297H104.046L100.689 19.5077M170.537 24.7201V0.283496H164.824V27.1339C164.824 27.8841 165.132 28.6053 165.671 29.1343C166.219 29.692 166.969 30.0094 167.748 29.9998H193.714L197.099 24.7586H170.498M76.0795 20.354C81.6189 20.354 86.1196 15.8629 86.1196 10.3139C86.1196 4.77459 81.6285 0.273875 76.0795 0.273875H51.1044V29.9613H56.8072V5.53433H75.7237C78.378 5.53433 80.5322 7.68852 80.5322 10.3428C80.5322 12.9971 78.378 15.1513 75.7237 15.1513H59.6346L76.6758 29.9709H84.9559L73.5118 20.3636L76.0795 20.354ZM16.0218 29.9709H33.2746C41.4682 29.7594 47.9404 22.941 47.7288 14.7473C47.5269 6.85185 41.1701 0.495063 33.2746 0.293107H16.0218C7.82823 0.081535 1.00983 6.55373 0.798256 14.7473C0.586683 22.941 7.05887 29.7594 15.2525 29.9709C15.5121 29.9709 15.7718 29.9709 16.0218 29.9709ZM32.8899 24.7393H16.4065C11.098 24.5662 6.94347 20.1328 7.11657 14.8243C7.28006 9.75616 11.348 5.69782 16.4065 5.53433H32.8899C38.1985 5.36123 42.6319 9.52536 42.805 14.8243C42.9781 20.1328 38.8139 24.5662 33.515 24.7393C33.3035 24.7489 33.0919 24.7489 32.8899 24.7393ZM141.253 29.9709H158.862L162.199 24.7489H141.648C136.339 24.922 131.906 20.7579 131.733 15.459C131.56 10.1505 135.724 5.71706 141.023 5.54395C141.225 5.53433 141.436 5.53433 141.638 5.54395H158.372L161.747 0.302728H141.253C133.06 0.0911558 126.241 6.56335 126.03 14.757C125.818 22.9506 132.29 29.769 140.484 29.9805C140.734 29.9709 140.994 29.9709 141.253 29.9709ZM211.034 24.7393C206.735 24.7393 202.956 21.8831 201.782 17.7478H226.171L229.527 12.5162H201.792C202.956 8.38094 206.735 5.5151 211.043 5.52472H227.786L231.133 0.283496H210.659C202.465 0.495068 195.993 7.31347 196.205 15.5071C196.406 23.4026 202.763 29.7594 210.659 29.9613H228.267L231.604 24.7297H211.024"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="2/3 flex space-x-[2vw]">
              <div>
                <ul className="space-y-[0.5vw]">
                  <li className="pb-[1vw]">
                    <Text size={24} weight="medium" color="white" children="Menu"/>
                  </li>
                  <li>
                    <Text size={16} weight="regular" color="white" children="Beranda"/>
                  </li>
                  <li>
                    <Text size={16} weight="regular" color="white" children="Tentang Kami"/>
                  </li>
                  <li>
                    <Text size={16} weight="regular" color="white" children="Eksplor Layanan"/>
                  </li>
                  <li>
                    <Text size={16} weight="regular" color="white" children="Kategori"/>
                  </li>
                  <li>
                    <Text size={16} weight="regular" color="white" children="Kontak"/>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="space-y-[0.5vw]">
                  <li className="pb-[1vw]">
                    <Text size={24} weight="medium" color="white" children="Ringkasan"/>
                  </li>
                  <li>
                    <Text size={16} weight="regular" color="white" children="Tema"/>
                  </li>
                  <li>
                    <Text size={16} weight="regular" color="white" children="Penyedia Jasa"/>
                  </li>
                  <li>
                    <Text size={16} weight="regular" color="white" children="Harga"/>
                  </li>
                  <li>
                    <Text size={16} weight="regular" color="white" children="Layanan"/>
                  </li>
                  <li>
                    <Text size={16} weight="regular" color="white" children="Hubungi Kami"/>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="space-y-[0.5vw]">
                  <li className="pb-[1vw]">
                    <Text size={24} weight="medium" color="white" children="Resourcing"/>
                  </li>
                  <li>
                    <Text size={16} weight="regular" color="white" children="Teknologi dan Platform"/>
                  </li>
                  <li>
                    <Text size={16} weight="regular" color="white" children="Desain dan Tampilan"/>
                  </li>
                  <li>
                    <Text size={16} weight="regular" color="white" children="Konten"/>
                  </li>
                  <li>
                    <Text size={16} weight="regular" color="white" children="Tim dan Keahlian"/>
                  </li>
                  <li>
                    <Text size={16} weight="regular" color="white" children="Marketing Tools"/>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="space-y-[0.5vw]">
                  <li className="pb-[1vw]">
                    <Text size={24} weight="medium" color="white" children="Sosial"/>
                  </li>
                  <li>
                    <Text size={16} weight="regular" color="white" children="Instagram"/>
                  </li>
                  <li>
                    <Text size={16} weight="regular" color="white" children="LinkedIn"/>
                  </li>
                  <li>
                    <Text size={16} weight="regular" color="white" children="Youtube"/>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="space-y-[0.5vw]">
                  <li className="pb-[1vw]">
                    <Text size={24} weight="medium" color="white" children="Tentang Kami"/>
                  </li>
                  <li>
                    <Text size={16} weight="regular" color="white" children="Visi & Misi"/>
                  </li>
                  <li>
                    <Text size={16} weight="regular" color="white" children="Tim kami"/>
                  </li>
                </ul>
              </div>

            </div>
        </div>
      </footer>
      
    </div>
  );
}
