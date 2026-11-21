import { SymbolView } from 'expo-symbols';
import { StyleSheet, ScrollView, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { WebBadge } from '@/components/web-badge';

export default function ProfileScreen() {
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
        <ThemedView style={styles.header}>
          <ThemedView style={[styles.avatar, { backgroundColor: theme.backgroundElement }]}>
            <SymbolView name={{ ios: 'person.fill', android: 'person', web: 'person' }} size={40} tintColor={theme.textSecondary} />
          </ThemedView>
          <ThemedText type="subtitle">Narendra</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">Daily Inspiration Seeker</ThemedText>
        </ThemedView>

        <ThemedView style={styles.statsContainer}>
          <ThemedView style={[styles.statBox, { backgroundColor: theme.backgroundElement }]}>
            <ThemedText type="subtitle">42</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">Quotes Saved</ThemedText>
          </ThemedView>
          <ThemedView style={[styles.statBox, { backgroundColor: theme.backgroundElement }]}>
            <ThemedText type="subtitle">7</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">Day Streak</ThemedText>
          </ThemedView>
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
    flexGrow: 1,
    alignItems: 'center',
    padding: Spacing.four,
  },
  container: {
    width: '100%',
    maxWidth: MaxContentWidth,
    flex: 1,
    gap: Spacing.six,
  },
  header: {
    alignItems: 'center',
    gap: Spacing.two,
    marginTop: Spacing.six,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.three,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: Spacing.four,
    justifyContent: 'center',
  },
  statBox: {
    flex: 1,
    padding: Spacing.four,
    borderRadius: Spacing.four,
    alignItems: 'center',
    gap: Spacing.one,
  },
});
