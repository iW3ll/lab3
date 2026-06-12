import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d0d2d8',
        alignItems: "center",
        paddingTop: 62,
    },
    logo: {
        maxWidth: 134,
        maxHeight: 34,
    },
    form: {
        width: "100%",
        paddingHorizontal: 16,
        gap: 10,
        marginTop: 42,
    },
    content: {
        flex: 1,
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 24,
        marginTop: 24,
    },
    filters: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 12,
    },
    list: {
        width: '100%'
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEF',
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    itemText: {
        fontSize: 14,
        color: '#000',
    },
    itemTextDone: {
        textDecorationLine: 'line-through',
        color: '#8B8D93'
    },
    removeButton: {
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    removeText: {
        color: '#B22222',
        fontSize: 12,
    },
    emptyListContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        color: '#8B8D93',
        textAlign: 'center',
        marginTop: 24,
    }
})
