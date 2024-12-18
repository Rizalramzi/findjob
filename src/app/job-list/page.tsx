import  Text  from "@/components/text/text";
import  Button  from "@/components/button/button";
import NavMenu from "@/components/navMenu/navMenu";
import Card from "@/components/card/card";
import Input from "@/components/input/input"

export default function jobList() {
    return (
        <div className="pb-[5vw]">
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
            <div className="px-[8vw] w-full flex justify-between mt-[3vw]">
                <div className="space-y-[3vw]">
                    <Input type="search" placeholder="Cari Pekerjaan"/>
                    <Card
                        type="job-list"
                        title="Create clean Bootstrap Page from existing HTML (1 Page)"
                        description="This project aims to take an existing HTML page and transform it into a more polished, efficient, and responsive design by utilizing the Bootstrap framework. By implementing Bootstrap’s grid system, components, and utilities, the goal is to improve the page’s user experience by ensuring it looks visually appealing and functions seamlessly across different screen sizes.."
                        date="Diunggah 4 hari lalu"
                        location="United States"
                        price="25.00 USD / hrs"
                        skills={['HTML', 'CSS', 'Tailwind']}  // Menampilkan keterampilan yang dibutuhkan untuk pekerjaan ini
                    />
                    <Card
                        type="job-list"
                        title="Create clean Bootstrap Page from existing HTML (1 Page)"
                        description="This project aims to take an existing HTML page and transform it into a more polished, efficient, and responsive design by utilizing the Bootstrap framework. By implementing Bootstrap’s grid system, components, and utilities, the goal is to improve the page’s user experience by ensuring it looks visually appealing and functions seamlessly across different screen sizes.."
                        date="Diunggah 4 hari lalu"
                        location="United States"
                        price="25.00 USD / hrs"
                        skills={['HTML', 'CSS', 'Tailwind']}  // Menampilkan keterampilan yang dibutuhkan untuk pekerjaan ini
                    />
                    <Card
                        type="job-list"
                        title="Create clean Bootstrap Page from existing HTML (1 Page)"
                        description="This project aims to take an existing HTML page and transform it into a more polished, efficient, and responsive design by utilizing the Bootstrap framework. By implementing Bootstrap’s grid system, components, and utilities, the goal is to improve the page’s user experience by ensuring it looks visually appealing and functions seamlessly across different screen sizes.."
                        date="Diunggah 4 hari lalu"
                        location="India"
                        price="102.00 USD / hrs"
                        skills={['HTML', 'CSS', 'Tailwind']}  // Menampilkan keterampilan yang dibutuhkan untuk pekerjaan ini
                    />
                </div>
                <div>
                    <div className="sticky top-[1vw] space-y-[2vw] overflow-auto h-[50vw] scrollbar-hide">
                        <div className="w-[23.438vw] h-auto px-[2vw] py-[3vw] flex flex-col justify-center bg-white border-[0.1vw] border-light-dark rounded-[1vw]">
                            <Text size={24} weight="regular" color="dark" children="Pilih berdasarkan kategori"/>
                            <div className="grid grid-cols-2 mt-[2.5vw] gap-[1vw]">
                                <div className="flex justify-between items-center">
                                    <Text size={18} weight="light" color="dark" children="Desain Grafis"/>
                                    <input type="checkbox" className="w-[1.2vw] h-[1.2vw] rounded-[1vw] bg-transparent accent-main" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <Text size={18} weight="light" color="dark" children="Bisnis Digital"/>
                                    <input type="checkbox" className="w-[1.2vw] h-[1.2vw] rounded-[1vw] bg-transparent accent-main" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <Text size={18} weight="light" color="dark" children="Frontend Developer"/>
                                    <input type="checkbox" className="w-[1.2vw] h-[1.2vw] rounded-[1vw] bg-transparent accent-main" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <Text size={18} weight="light" color="dark" children="Backend Developer"/>
                                    <input type="checkbox" className="w-[1.2vw] h-[1.2vw] rounded-[1vw] bg-transparent accent-main" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <Text size={18} weight="light" color="dark" children="Machine Learning"/>
                                    <input type="checkbox" className="w-[1.2vw] h-[1.2vw] rounded-[1vw] bg-transparent accent-main" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <Text size={18} weight="light" color="dark" children="UI / UX Desainer"/>
                                    <input type="checkbox" className="w-[1.2vw] h-[1.2vw] rounded-[1vw] bg-transparent accent-main" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <Text size={18} weight="light" color="dark" children="Copywriter"/>
                                    <input type="checkbox" className="w-[1.2vw] h-[1.2vw] rounded-[1vw] bg-transparent accent-main" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <Text size={18} weight="light" color="dark" children="Animator"/>
                                    <input type="checkbox" className="w-[1.2vw] h-[1.2vw] rounded-[1vw] bg-transparent accent-main" />
                                </div>
                            </div>
                        </div>

                        <div className="w-[23.438vw] h-auto px-[2vw] py-[3vw] flex flex-col justify-center bg-white border-[0.1vw] border-light-dark rounded-[1vw]">
                            <Text size={24} weight="regular" color="dark" children="Tingkat Pendidikan"/>
                            <div className="grid grid-cols-2 mt-[2.5vw] gap-[1vw]">
                                <div className="flex justify-between items-center">
                                    <Text size={18} weight="light" color="dark" children="Doktor (S3)"/>
                                    <input type="checkbox" className="w-[1.2vw] h-[1.2vw] rounded-[1vw] bg-transparent accent-main" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <Text size={18} weight="light" color="dark" children="SMA / SMK"/>
                                    <input type="checkbox" className="w-[1.2vw] h-[1.2vw] rounded-[1vw] bg-transparent accent-main" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <Text size={18} weight="light" color="dark" children="Magister (S2)"/>
                                    <input type="checkbox" className="w-[1.2vw] h-[1.2vw] rounded-[1vw] bg-transparent accent-main" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <Text size={18} weight="light" color="dark" children="SMP"/>
                                    <input type="checkbox" className="w-[1.2vw] h-[1.2vw] rounded-[1vw] bg-transparent accent-main" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <Text size={18} weight="light" color="dark" children="Sarjana (S1)"/>
                                    <input type="checkbox" className="w-[1.2vw] h-[1.2vw] rounded-[1vw] bg-transparent accent-main" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <Text size={18} weight="light" color="dark" children="SD"/>
                                    <input type="checkbox" className="w-[1.2vw] h-[1.2vw] rounded-[1vw] bg-transparent accent-main" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <Text size={18} weight="light" color="dark" children="Diploma (D1 - D4)"/>
                                    <input type="checkbox" className="w-[1.2vw] h-[1.2vw] rounded-[1vw] bg-transparent accent-main" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-[23.438vw] h-auto px-[2vw] py-[3vw] flex flex-col justify-center bg-white border-[0.1vw] border-light-dark rounded-[1vw]">
                            <Text size={24} weight="regular" color="dark" children="Pengalaman Kerja"/>
                            <div className="grid grid-cols-2 mt-[2.5vw] gap-[1vw]">
                                <div className="flex justify-between items-center">
                                    <Text size={18} weight="light" color="dark" children="Tidak Berpengalaman"/>
                                    <input type="checkbox" className="w-[1.2vw] h-[1.2vw] rounded-[1vw] bg-transparent accent-main" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <Text size={18} weight="light" color="dark" children="3-5 Tahun"/>
                                    <input type="checkbox" className="w-[1.2vw] h-[1.2vw] rounded-[1vw] bg-transparent accent-main" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <Text size={18} weight="light" color="dark" children="Fresh Graduate"/>
                                    <input type="checkbox" className="w-[1.2vw] h-[1.2vw] rounded-[1vw] bg-transparent accent-main" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <Text size={18} weight="light" color="dark" children="5-10 Tahun"/>
                                    <input type="checkbox" className="w-[1.2vw] h-[1.2vw] rounded-[1vw] bg-transparent accent-main" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <Text size={18} weight="light" color="dark" children="Kurang dari setahun"/>
                                    <input type="checkbox" className="w-[1.2vw] h-[1.2vw] rounded-[1vw] bg-transparent accent-main" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <Text size={18} weight="light" color="dark" children="Lebih dari 10 Tahun"/>
                                    <input type="checkbox" className="w-[1.2vw] h-[1.2vw] rounded-[1vw] bg-transparent accent-main" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <Text size={18} weight="light" color="dark" children="1-3 Tahun"/>
                                    <input type="checkbox" className="w-[1.2vw] h-[1.2vw] rounded-[1vw] bg-transparent accent-main" />
                                </div>
                            </div>
                        </div>

                        <div className="w-[23.438vw] h-auto px-[2vw] py-[3vw] flex flex-col justify-center bg-white border-[0.1vw] border-light-dark rounded-[1vw]">
                            <Text size={24} weight="regular" color="dark" children="Tipe Pekerjaan"/>
                            <div className="grid grid-cols-2 mt-[2.5vw] gap-[1vw]">
                                <div className="flex justify-between items-center">
                                    <Text size={18} weight="light" color="dark" children="Full-Time Job"/>
                                    <input type="checkbox" className="w-[1.2vw] h-[1.2vw] rounded-[1vw] bg-transparent accent-main" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <Text size={18} weight="light" color="dark" children="Pekerja Lepas"/>
                                    <input type="checkbox" className="w-[1.2vw] h-[1.2vw] rounded-[1vw] bg-transparent accent-main" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <Text size={18} weight="light" color="dark" children="Part-Time Job"/>
                                    <input type="checkbox" className="w-[1.2vw] h-[1.2vw] rounded-[1vw] bg-transparent accent-main" />
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}