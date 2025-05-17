import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Layout,
  Input,
  Button,
  Text,
} from '@ui-kitten/components';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Replace with your login logic
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <Layout style={styles.container}>
      <Text category='h4' style={styles.header}>J INVENTORY</Text>

      <Input
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <Input
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <Button onPress={handleLogin} style={styles.button}>
        Login
      </Button>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    marginBottom: 32,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
});
