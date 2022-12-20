import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>

      <table class="table caption-top">
  <caption>Kullanıcı Listesi</caption>
  <thead>
    <tr>
      <th scope="col">Bulunduğu Mağaza</th>
      <th scope="col">Mağaza Görevlileri</th>
      <th scope="col">Ürün Temin Tarihi</th>
      <th scope="col">Tır Şoförü İsmi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">Aksaray</td>
      <td>Gökhan Kantarcı</td>
      <td>13/03/2022</td>
      <td>Harun Emre Kömekçi</td>
    </tr>
    <tr>
      <td scope="row">Aksaray</td>
      <td>Ömer Krmn</td>
      <td>03/03/2022</td>
      <td>Hidayet Yaşar Terzi</td>
    </tr>
    <tr>
      <td scope="row">Aksaray</td>
      <td>Kadir Özütürk</td>
      <td>22/02/2022</td>
      <td>Harun Emre Kömekçi</td>
    </tr>
    <tr>
      <td scope="row">Aksaray</td>
      <td>Ömer Ali Altın</td>
      <td>07/03/2022</td>
      <td>Hidayet Yaşar Terzi</td>
    </tr>
  </tbody>
</table>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
      
    </div>
  )
}
