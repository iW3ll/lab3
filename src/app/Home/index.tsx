import { View, Image, FlatList, Text, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';

import { Button } from "@/components/Button";
import { Input } from '@/components/Input';
import { Filter } from '@/components/Filter';
import { StatusIcon } from '@/components/StatusIcon';

import { FilterStatus } from '@/types/FilterStatus';

import { styles } from './styles';

type Item = {
  id: string;
  name: string;
  status: FilterStatus;
}

export function Home() {
  const [text, setText] = useState('');
  const [items, setItems] = useState<Item[]>([
    { id: '1', name: 'Leite', status: FilterStatus.PENDING },
    { id: '2', name: 'Pão', status: FilterStatus.DONE },
  ]);

  function handleAdd() {
    const trimmed = text.trim();
    if (!trimmed) return Alert.alert('Informe um item para adicionar');

    const newItem: Item = { id: String(Date.now()), name: trimmed, status: FilterStatus.PENDING };
    setItems(prev => [newItem, ...prev]);
    setText('');
  }

  function handleToggleStatus(id: string) {
    setItems(prev => prev.map(i => i.id === id ? { ...i, status: i.status === FilterStatus.DONE ? FilterStatus.PENDING : FilterStatus.DONE } : i));
  }

  function handleRemove(id: string) {
    setItems(prev => prev.filter(i => i.id !== id));
  }

  const renderItem = ({ item }: { item: Item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleToggleStatus(item.id)}>
      <View style={styles.itemLeft}>
        <StatusIcon status={item.status} />
        <Text style={[styles.itemText, item.status === FilterStatus.DONE && styles.itemTextDone]}>{item.name}</Text>
      </View>
      <TouchableOpacity onPress={() => handleRemove(item.id)} style={styles.removeButton}>
        <Text style={styles.removeText}>Remover</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/logo.png")}
        style={styles.logo}
      />

      <View style={styles.form}>
        <Input placeholder='O que você precisa' value={text} onChangeText={setText} />

        <Button title="Adicionar" 
          activeOpacity={0.8} onPress={handleAdd} />
      </View>

      <View style={styles.content}>
        <View style={styles.filters}>
          <Filter status={FilterStatus.DONE} isActive />
          <Filter status={FilterStatus.PENDING} isActive={false} />
        </View>

        <FlatList
          data={items}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          style={styles.list}
          contentContainerStyle={items.length === 0 ? styles.emptyListContainer : undefined}
          ListEmptyComponent={<Text style={styles.emptyText}>Nenhum item adicionado</Text>}
        />
      </View>
      
    </View>
  );
}