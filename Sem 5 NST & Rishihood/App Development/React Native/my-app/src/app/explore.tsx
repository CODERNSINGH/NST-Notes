import { SymbolView } from 'expo-symbols';
import { Platform, Pressable, ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { WebBadge } from '@/components/web-badge';

const QUOTES = [
  { id: 1, text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { id: 2, text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { id: 3, text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { id: 4, text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
  { id: 5, text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
];

export default function ExploreScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const insets = {
    ...safeAreaInsets,
    bottom: safeAreaInsets.bottom + BottomTabInset + Spacing.three,
  };
  const theme = useTheme();

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentInset={insets}
      contentContainerStyle={[
        styles.contentContainer,
        Platform.OS === 'web' && { paddingTop: Spacing.six, paddingBottom: Spacing.four },
      ]}>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="subtitle">Explore Quotes</ThemedText>
          <ThemedText style={styles.centerText} themeColor="textSecondary">
            Find inspiration from great minds across history.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.listContainer}>
          {QUOTES.map(quote => (
            <Pressable key={quote.id} style={({ pressed }) => [styles.quoteCard, { backgroundColor: theme.backgroundElement, opacity: pressed ? 0.8 : 1 }]}>
              <SymbolView name={{ ios: 'quote.opening', android: 'format_quote', web: 'format_quote' }} size={24} tintColor={theme.textSecondary} />
              <ThemedText style={styles.quoteText}>{quote.text}</ThemedText>
              <ThemedText type="small" themeColor="textSecondary" style={styles.quoteAuthor}>- {quote.author}</ThemedText>
            </Pressable>
          ))}
        </ThemedView>
        
        {Platform.OS === 'web' && <WebBadge />}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    padding: Spacing.four,
  },
  container: {
    maxWidth: MaxContentWidth,
    width: '100%',
    flexGrow: 1,
  },
  titleContainer: {
    gap: Spacing.three,
    alignItems: 'center',
    paddingVertical: Spacing.six,
  },
  centerText: {
    textAlign: 'center',
  },
  listContainer: {
    gap: Spacing.four,
  },
  quoteCard: {
    padding: Spacing.five,
    borderRadius: Spacing.four,
    gap: Spacing.three,
  },
  quoteText: {
    fontSize: 18,
    lineHeight: 26,
  },
  quoteAuthor: {
    fontStyle: 'italic',
    textAlign: 'right',
  },
});
