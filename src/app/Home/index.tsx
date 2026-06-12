import { View, Image } from 'react-native';

import { Button } from "@/components/Button";
import { Input } from '@/components/Input';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/logo.png")}
        style={styles.logo}
      />

      <Input placeholder='O que você precisa' />

      <Button title="Adicionar"
        activeOpacity={0.9} onPress={() => console.log("Adicionar...")} />

      <Button title="Remover"
        activeOpacity={0.5} onPress={() => console.log("Remover...")} />

      <Button title="Editar" activeOpacity={0.1} />
    </View>
  );
}