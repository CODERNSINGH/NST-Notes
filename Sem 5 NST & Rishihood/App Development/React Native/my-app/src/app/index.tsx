import { StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SymbolView } from 'expo-symbols';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function HomeScreen() {
  const theme = useTheme();
  
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.content}>
          <SymbolView 
            name={{ ios: 'quote.opening', android: 'format_quote', web: 'format_quote' }} 
            size={48} 
            tintColor={theme.textSecondary} 
          />
          
          <ThemedText type="title" style={styles.quote}>
            "The only way to do great work is to love what you do."
          </ThemedText>
          
          <ThemedText type="subtitle" style={styles.author} themeColor="textSecondary">
            - Steve Jobs
          </ThemedText>

          <ThemedView type="backgroundElement" style={styles.actionCard}>
            <SymbolView name={{ ios: 'sparkles', android: 'star', web: 'star' }} size={24} tintColor={theme.text} />
            <ThemedView>
              <ThemedText type="defaultSemiBold">Daily Inspiration</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">Come back tomorrow for a new quote.</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.six,
    paddingHorizontal: Spacing.four,
  },
  quote: {
    textAlign: 'center',
    fontSize: 28,
    lineHeight: 38,
    fontStyle: 'italic',
  },
  author: {
    textAlign: 'center',
    marginTop: -Spacing.four,
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.four,
    padding: Spacing.four,
    borderRadius: Spacing.four,
    marginTop: Spacing.six,
    alignSelf: 'stretch',
  },
});
