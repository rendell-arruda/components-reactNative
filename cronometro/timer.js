import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
function App() {
  const [totalTimeInseconds, setTotalTimeInSeconds] = useState(5 * 60)
  const minutes = Math.floor(totalTimeInseconds / 60)
  const seconds = totalTimeInseconds % 60
  useEffect(() => {
    if (totalTimeInseconds === 0) {
      alert('o tempo acabou!')
      return
    } else {
      setTimeout(() => {
        setTotalTimeInSeconds(totalTimeInseconds - 1)
      }, 1000)
    }
  }, [totalTimeInseconds])

  return (
    <View style={styles.container}>
      <Text style={styles.msgPadrao}>
        Para sua segurança, este código tem um tempo para reenvio.
      </Text>
      <Text style={styles.textTimer}>
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </Text>
      <Text style={styles.msgPadrao}>restantes.</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    Width: 327,
    Height: 42,
    Top: 279,
    Left: 24
  },
  textTimer: {
    fontSize: 12,
    color: '#302A4B',
    fontWeight: 'bold'
  },
  msgPadrao: {
    color: '#9DA1AB',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 14
  }
})

export default App
