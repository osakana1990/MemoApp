import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MemoList extends React.Component {
    render() {
        return (
            <View style={styles.memoList}>
                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>蒙古タンメン</Text>
                    <Text style={styles.memoDate}>2019/11/29</Text>
                </View>

                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>北極ラーメン</Text>
                    <Text style={styles.memoDate}>2019/12/4</Text>
                </View>

                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>冷やし味噌ラーメン</Text>
                    <Text style={styles.memoDate}>2019/12/9</Text>
                </View>

                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>五目味噌タンメン</Text>
                    <Text style={styles.memoDate}>2019/12/15</Text>
                </View>

                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>塩タンメン</Text>
                    <Text style={styles.memoDate}>2019/12/21</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    memoList: {
        width: '100%',
        flex: 1,
      },
      memoListItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: '#fff',
      },
      memoTitle: {
        fontSize: 18,
        marginBottom: 4,
      },
      memoDate: {
        fontSize: 12,
        color: '#a2a2a2',
      },
});

export default MemoList;
