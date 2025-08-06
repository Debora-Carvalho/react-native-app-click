import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#383936',
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    containerHeader: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        paddingHorizontal: 30,
        gap: 10
    },
    imageLogo: {
        width: 178,
        height: 61
    },
    title: {
        fontSize: 22,
        fontWeight: 800,
        textAlign: 'left',
        color: '#FFFFFF',
    },
    textSimple: {
        fontSize: 16,
        textAlign: 'justify',
        color: '#FFFFFF',
        paddingHorizontal: 50,
        marginBottom: 20
    },
    textBold: {
        fontWeight: 800,
    },
    containerInput: {
        marginBottom: 20
    },
    label: {
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 4,
    },
    input: {
        width: 280,
        fontSize: 16,
        borderBottomWidth: 1,
        borderColor: '#FFFFFF',
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    inputPassword: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerLink: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
    textLink: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        fontWeight: 400,
        color: '#FFFFFF',
    },
    link: {
        fontWeight: 800,
        color: '#F9A450'
    },
    blockButton: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 24,
        paddingHorizontal: 5,
    },
    checkboxLabel: {
        marginLeft: 20,
        fontSize: 14,
        textAlign: 'left',
        color: '#FFFFFF',
        flex: 1,
    },
});