import React from 'react';

import './Basic.scss'

import TableBody from './TableBody/TableBody'
import Profit from './Profit/Profit'

const Basic = () => {
  return (
    <div className="d-flex mt-5 table-size">
      <div className="table-responsive mr-5">
        <h4>Masuk Keluar Barang</h4>
        <table className="table table-hover">
          <thead>
            <tr className="text-center table-primary">
              <th scope="col">Tanggal</th>
              <th scope="col">Kode</th>
              <th scope="col" colspan="2">Nama Barang</th>
              <th scope="col">Jumlah</th>
              <th scope="col">Harga</th>
              <th scope="col">Pengirim/Penerima</th>
              <th scope="col" colspan="2">Debit</th>
              <th scope="col" colspan="2">Kredit</th>
            </tr>
          </thead>
          <tbody>
            <TableBody
              tanggal={"20 Januari 2020"}
              kode={135925}
              nama_barang={"Sepatu Ardilla"}
              jumlah={50}
              harga={"20,000"}
              person={"Andre"}
              debit={""}
              kredit={"1,000,000"}
            />
            <TableBody
              tanggal={"21 Januari 2020"}
              kode={134053}
              nama_barang={"Sepatu Ardilla"}
              jumlah={30}
              harga={"25,000"}
              person={"Rudi"}
              debit={"750,000"}
              kredit={""}
            />
            <TableBody
              tanggal={"21 Januari 2020"}
              kode={123389}
              nama_barang={"Tas Ciampelas"}
              jumlah={15}
              harga={"65,000"}
              person={"Gofar"}
              debit={""}
              kredit={"975,000"}
            />
            <TableBody
              tanggal={"22 Januari 2020"}
              kode={909242}
              nama_barang={"Tas Ciampelas"}
              jumlah={10}
              harga={"125,000"}
              person={"Andre"}
              debit={"1,250,000"}
              kredit={""}
            />
            <tr className="table-light">
              <td>
                <div className="input-group input-group-sm mb-3">
                  <input type="date" className="form-control text-center" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </div>
              </td>
              <td>
                <div className="input-group input-group-sm mb-3">
                  <input type="number" className="form-control text-center" placeholder="kode transaksi"  aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </div>
              </td>
              <td colspan="2">
                <div className="input-group input-group-sm mb-3">
                  <input type="text" className="form-control text-center" placeholder="nama barang"  aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </div>
              </td>
              <td>
                <div className="input-group input-group-sm mb-3">
                  <input type="text" className="form-control text-center" placeholder="jumlah barang" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </div>
              </td>
              <td>
                <div className="input-group input-group-sm mb-3">
                  <input type="text" className="form-control text-center" placeholder="harga satuan"  aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </div>
              </td>
              <td>
                <div className="input-group input-group-sm mb-3">
                  <input type="text" className="form-control text-center" placeholder="pengirim/penerima" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </div>
              </td>
              <td colspan="2">
                <div className="input-group input-group-sm mb-3">
                  <input type="text" className="form-control text-center" placeholder="debit"  aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </div>
              </td>
              <td colspan="2">
                <div className="input-group input-group-sm mb-3">
                  <input type="text" className="form-control text-center" placeholder="kredit"  aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="7" className="text-right"><b>Pendapatan</b></td>
              <td colspan="3" className="text-center"><b>25,000</b></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Profit />
    </div>
  );
}

export default Basic;
