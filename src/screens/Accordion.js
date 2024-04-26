import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Accordion = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleAccordion = (item) => {
    setExpandedItems({
      ...expandedItems,
      [item]: !expandedItems[item],
    });
  };

  return (
    <View style={{ marginVertical: 10 }}>
      {[1, 2, 3, 4].map((item) => (
        <View key={item}>
          <TouchableOpacity onPress={() => toggleAccordion(item)}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: 'lightgray' }}>
              <Text>Item {item}</Text>
              <Text>{expandedItems[item] ? '-' : '+'}</Text>
            </View>
          </TouchableOpacity>
          {expandedItems[item] && (
            <View style={{ backgroundColor: 'white', padding: 10 }}>
              <Text>Accordion content for Item {item}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default Accordion;
