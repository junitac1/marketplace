import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";


interface produk {
    id: number;
    nama: string;
    deskripsi: string;
    harga: number;
    stok: number;
    gambar: string; // Assuming image is a URL or path to the image
}

interface Props {
    produks: produk;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Produks',
        href: '/produk',
    },
];

export default function Index({ produks }: Props) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
        <div className="container">
            <h1>Welcome to my marketplace</h1>
        </div>
        <table>
            <thead>
                <tr className="bg-gray-100 dark:bg-gray-800 text-left">
                    <th className="p-3 border-b">ID</th>
                    <th className="p-3 border-b">Name</th>
                    <th className="p-3 border-b">Deskripsi</th>
                    <th className="p-3 border-b">Harga</th>
                    <th className="p-3 border-b">Gambar</th>
                </tr>
            </thead>
            <tbody>
                 {produks.map((produk) => (
                    <tr key={produk.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="p-3 border-b">{produk.id}</td>
                        <td className="p-3 border-b">{produk.nama}</td>
                        <td className="p-3 border-b">{produk.deskripsi}</td>
                        <td className="p-3 border-b">Rp {produk.harga}</td>
                        <td className="p-3 border-b">
                        <img
                            src={produk.gambar}
                            alt={produk.nama}
                            className="w-16 h-16 object-cover rounded"
                        />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </AppLayout>
  );
}