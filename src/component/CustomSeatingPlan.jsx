import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const seats = [
  { id: 'A1', type: 'available' },
  { id: 'A2', type: 'available' },
  { id: 'A3', type: 'unavailable' },
  // Add more seats as needed
];

const CustomSeatingPlan = () => {
  const renderSeat = (seat) => {
    return (
      <TouchableOpacity
        key={seat.id}
        style={[
          styles.seat,
          seat.type === 'unavailable' && styles.seatUnavailable,
          seat.type === 'selected' && styles.seatSelected,
        ]}
      >
        <Text style={styles.seatText}>{seat.id}</Text>
      </TouchableOpacity>
    );
  };

  return <View style={styles.container}>{seats.map(renderSeat)}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  seat: {
    width: 30,
    height: 30,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5F4FE',
    borderRadius: 5,
  },
  seatUnavailable: {
    backgroundColor: '#d3d3d3',
  },
  seatSelected: {
    backgroundColor: '#4A90E2',
  },
  seatText: {
    fontSize: 12,
  },
});

export default CustomSeatingPlan;
