import  Text  from "@/components/text/text";
import  Input  from "@/components/input/input";

export default function Register(){
    return (
        <div className="flex items-center justify-center h-[100vh] px-[5vw]">
            <div className="w-1/2 flex items-center justify-center">
                <img src="/auth.svg" alt=""  className="w-[33.646vw] h-[32.396vw] object-contain"/>
            </div>
            <div className="w-1/2 space-y-[2vw]">
                <div>
                    <Text size={64} weight="semibold" color="main" children="Daftar"/>
                    <Text size={22} weight="light" color="main" children="Segera buat akunmu"/>
                </div>
                <div className="grid grid-cols-2 gap-[1.5vw]">
                    <Input type="email" label="Email" placeholder="Masukkan Email"/>
                    <Input type="text" label="Nama" placeholder="Masukkan Nama"/>
                    <Input type="password" label="Password" placeholder="Buat Password"/>
                    <Input
                        type="select"
                        label="Sebagai :"
                        options={[
                            { value: 'freelancer', label: 'Freelancer' },
                            { value: 'client', label: 'Klien' },
                        ]}
                        />
                    <Input type="text" label="Nomor Telepon" placeholder="Masukkan Nomor Telepon"/>
                    <Input type="file" label="Foto Profil (opsional)" placeholder=""/>
                    <div className="col-span-2 space-y-[1vw]">
                        <button className="w-full py-[1.042vw] bg-main col-span-2 font-outfit text-white rounded-lg">Daftar Sekarang</button>
                        <Text size={16} weight="light" color="dark" className="col-span-2 text-center">
                            Sudah punya akun?{' '}
                            <span className="font-light text-main">Masuk disini</span>
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    )
}