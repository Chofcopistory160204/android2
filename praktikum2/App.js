import React from 'react';
import { FlatList, Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  const data = [
    { id: 1, name: 'Rawon', image: 'https://asset.kompas.com/crops/YoZ-O9bR7rpbA9hexhPEpDqgGZc=/0x12:983x667/750x500/data/photo/2023/11/17/6556dc6484a92.jpg' },
    { id: 2, name: 'Soto', image: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/17043644/Praktis-dan-Simpel-Ini-Resep-Soto-Ayam-Lamongan-yang-Menggugah-Selera-.jpg.webp' },
    { id: 3, name: 'Gado - gado', image: 'https://i0.wp.com/resepkoki.id/wp-content/uploads/2017/02/Resep-Gado-Gado.jpg?fit=1920%2C1840&ssl=1' },
    { id: 4, name: 'Tahu telor', image: 'https://o-cdn-cas.sirclocdn.com/parenting/images/resep_tahu_telur_lontong.width-800.format-webp.webp' },
    { id: 5, name: 'Bakso', image: 'https://akcdn.detik.net.id/visual/2020/11/06/10-resep-bakso-untuk-jualan-sederhana-dan-mudah-dibuat_169.jpeg?w=650&q=90' },
    { id: 6, name: 'Ayam Panggang', image: 'https://www.sasa.co.id/medias/page_medias/resep_ayam_panggang_bumbu_rujak.jpg' },
    { id: 7, name: 'seblak', image: 'https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2021/11/seblak-ayam-resepsehat-com.webp' },
    { id: 8, name: 'Mie ayam', image: 'https://asset.kompas.com/crops/krSLAkJhiYmOL3g6b6c-x_9p1sI=/98x0:944x564/750x500/data/photo/2023/04/14/6438d1d8bc59b.jpeg' },
    { id: 9, name: 'Pecel', image: 'https://asset.kompas.com/crops/etxkCgz_0N5ZbdP6YGJScpobPVk=/60x23:959x622/750x500/data/photo/2020/11/05/5fa3f16d9c1cf.jpg' },
    { id: 10, name: 'Bebek goreng', image: 'https://asset.kompas.com/crops/UhV2ngrlUWo92yJyruxM7I-vSNE=/69x65:869x598/750x500/data/photo/2021/11/25/619f7dc86e939.jpg' },
    { id: 11, name: 'Rendang', image: 'https://www.astronauts.id/blog/wp-content/uploads/2023/03/Resep-Rendang-Daging-Sapi-Untuk-Lebaran-Gurih-dan-Nikmat-1200x900.jpg' },
    { id: 12, name: 'Lontong Kikil', image: 'https://cdn.idntimes.com/content-images/community/2021/08/fromandroid-186e5a7a0e7f34cf96801b22662d755a_600x400.jpg' },
    { id: 13, name: 'Ayam Geprek', image: 'https://www.sasa.co.id/medias/page_medias/Cara_Membuat_Ayam_Geprek.jpg' },
    { id: 14, name: 'Gurame Bakar', image: 'https://kewpie.co.id/media/image/thumbs/post/2018/12/20/7-gurame-bakar_webs-1360-480_thumb.JPG' },
    { id: 15, name: 'Udang saus madu', image: 'https://asset.kompas.com/crops/U-7HessZ0G1Jo189ODb_O50YSo8=/818x0:5244x2951/750x500/data/photo/2022/02/19/62106a8f89144.jpg' },
    { id: 16, name: 'Cumi Hitam', image: 'https://cdns.klimg.com/merdeka.com/i/w/news/2022/10/28/1486584/content_images/670x335/20221028122758-1-cumi-hitam-001-tantiya-nimas-nuraini.png' },
    { id: 17, name: 'Sate Kambing', image: 'https://cdn1-production-images-kly.akamaized.net/bLDquq0oaVBpG2NE_Lq0QTthaDo=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4485302/original/008851000_1687970322-aa.jpg' },
    { id: 18, name: 'Lontong Kupang', image: 'https://paxelmarket.co/wp-content/uploads/2022/03/1629028813182.jpg' },
    { id: 19, name: 'kepiting Saus Padang', image: 'https://img.okezone.com/content/2020/09/07/298/2273715/resep-kepiting-saus-padang-seenak-di-restoran-endes-banget-GpqKW1siPy.jpg' },
    { id: 20, name: 'Sate Kerang', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC-H16qHz4cEdnhTaD4j1fPOHuR2Oq3OPKbgu-aABjhQ&s' },
    { id: 21, name: 'Bandeng Presto', image: 'https://paxelmarket.co/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-08-at-21.25.04.jpeg' },
  ];

  const renderItem = ({ item }: { item: { id: number; name: string; image: string } }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.cardText}>{item.name}</Text>
    </View>
  );

  return (
    
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: '#cca9dd',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%', // Adjust card width to fit 2 columns
    // Adding shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // Adding elevation for Android
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 15,
    marginTop: 10,
  },
});