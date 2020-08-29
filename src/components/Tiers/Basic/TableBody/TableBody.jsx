import React from 'react';

const TableBody = ({ tanggal, kode, nama_barang, jumlah, harga, person, debit, kredit }) => {
  return (
    <tr className="text-center">
      <th scope="row">{ tanggal }</th>
      <td>{ kode }</td>
      <td colspan="2">{ nama_barang }</td>
      <td>{ jumlah }</td>
      <td>{ harga }</td>
      <td>{ person }</td>
      <td colspan="2">{ debit }</td>
      <td colspan="2">{ kredit }</td>
  </tr>
  );
}

export default TableBody;
