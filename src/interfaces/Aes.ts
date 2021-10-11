export default interface Aes {
    data: {
        build: string;
        mainKey: string;
        dynamicKeys: Array<{
            pakFilename: string;
            pakGuild: string;
            key: string;
        }>
        updated: Date;
    }
}