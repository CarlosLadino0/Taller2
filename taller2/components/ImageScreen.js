import React from 'react';
import { ScrollView, Image, View } from 'react-native';

const ImageScreen = () => {
  return (
    <ScrollView>
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Image
          source={{
            uri: 'https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/4/41/Kokushibo_anime.jpg/revision/latest?cb=20230412121253&path-prefix=es',
          }}
          style={{ width: 300, height: 200, margin: 10 }}
        />
        <Image
          source={{
            uri: 'https://preview.redd.it/z0j8a2vi4vmc1.png?auto=webp&s=eef4ebf0d004e6c74f3ef269f52fec492fc01c28',
          }}
          style={{ width: 300, height: 200, margin: 10 }}
        />
        <Image
          source={{
            uri: 'https://preview.redd.it/akasa-demon-slayer-vs-yujiro-hanma-baki-v0-aomnp7jv26ed1.jpg?width=640&crop=smart&auto=webp&s=6e27c78560eef1afababa4594caaaaadda10b7bf',
          }}
          style={{ width: 300, height: 200, margin: 10 }}
        />
        <Image
          source={{
            uri: 'https://images2-mega.cdn.mdstrm.com/etcetera/2023/05/15/21113_1_64627b5140a46.jpg',
          }}
          style={{ width: 300, height: 200, margin: 10 }}
        />
        <Image
          source={{
            uri: 'https://www.fayerwayer.com/resizer/bC3DznFZ002XpEXhcY3Lezs5GXk=/arc-photo-metroworldnews/arc2-prod/public/6BLKBE6XKFE2VNZVE6VMFVWF6Q.jpg',
          }}
          style={{ width: 300, height: 200, margin: 10 }}
        />
        <Image
          source={{
            uri: 'https://comicbook.com/wp-content/uploads/sites/4/2022/02/f3745df0-d858-4058-aed0-2c03a78d89e8.jpg',
          }}
          style={{ width: 300, height: 200, margin: 10 }}
        />
      </View>
    </ScrollView>
  );
};

export default ImageScreen;
